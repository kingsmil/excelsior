import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createPC } from './pc';

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// The PC's own lighting is the only colour on the page; it shifts per chapter.
const GLOWS = [
  { at: 0, color: new THREE.Color('#2fb4ff') },
  { at: 0.36, color: new THREE.Color('#8f5bff') },
  { at: 0.68, color: new THREE.Color('#ff9226') },
  { at: 1, color: new THREE.Color('#2fb4ff') },
];

// Too close together to label on a phone-width stage.
const MINOR = new Set(['board', 'cpu', 'ram']);
// Callouts sit in a band above or below the build, on two tiers so neighbours never collide.
const CALLOUT: Record<string, [side: 1 | -1, tier: 0 | 1]> = {
  glass: [-1, 1],
  fans: [1, 1],
  cooler: [-1, 0],
  board: [-1, 1],
  gpu: [1, 0],
  ram: [1, 0],
  cpu: [1, 1],
  psu: [1, 0],
};

export function mountStage(section: HTMLElement): boolean {
  const canvas = section.querySelector<HTMLCanvasElement>('canvas')!;
  const labelHost = section.querySelector<HTMLElement>('[data-labels]')!;
  const chapters = [...section.querySelectorAll<HTMLElement>('[data-chapter]')];
  const ticks = [...section.querySelectorAll<HTMLElement>('[data-tick]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch {
    return false;
  }

  const bg = new THREE.Color(getComputedStyle(section).getPropertyValue('--stage').trim() || '#07080b');
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = bg;
  scene.fog = new THREE.Fog(bg, 30, 72);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.42;

  const key = new THREE.DirectionalLight(0xffffff, 0.95);
  key.position.set(6, 9, 8);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9db4ff, 1.1);
  rim.position.set(-8, 4, -6);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0);
  fill.position.set(9, 2, 5);
  scene.add(fill);

  const pc = createPC();
  scene.add(pc.root);

  const inner = new THREE.PointLight(0xffffff, 2.2, 7, 1.8);
  inner.position.set(0.2, 0.2, 0.5);
  pc.root.add(inner);
  const under = new THREE.PointLight(0xffffff, 2.4, 6.5, 2);
  under.position.set(0, -2.0, 2.2);
  pc.root.add(under);

  // The floor is a pool under the PC that fades out, so the stage stays black to the edges.
  const fade = document.createElement('canvas');
  fade.width = fade.height = 256;
  const ctx = fade.getContext('2d')!;
  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, '#fff');
  grad.addColorStop(0.45, '#888');
  grad.addColorStop(1, '#000');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(11, 64),
    new THREE.MeshStandardMaterial({
      color: 0x0c0e13,
      metalness: 0,
      roughness: 1,
      envMapIntensity: 0,
      alphaMap: new THREE.CanvasTexture(fade),
      transparent: true,
      depthWrite: false,
    }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.62;
  scene.add(floor);

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 140);
  const target = new THREE.Vector3(0, -0.15, 0);

  const composer = new EffectComposer(
    renderer,
    new THREE.WebGLRenderTarget(1, 1, { samples: 4, type: THREE.HalfFloatType }),
  );
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.6, 0.65, 0.92);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // labels
  const labelled = pc.parts.filter((p) => p.label);
  const labelEls = labelled.map((p) => {
    const el = document.createElement('div');
    el.className = 'part-label';
    if (MINOR.has(p.id)) el.dataset.minor = '';
    el.dataset.side = (CALLOUT[p.id]?.[0] ?? 1) < 0 ? 'up' : 'down';
    el.innerHTML = `<i></i><u></u><b>${p.label}</b>`;
    labelHost.appendChild(el);
    return el;
  });

  // half of each callout's text width plus a gutter, so text never leaves the stage
  const halves = labelEls.map(() => 70);
  const measure = () => labelEls.forEach((el, n) => (halves[n] = (el.querySelector('b')?.offsetWidth ?? 110) / 2 + 14));

  let width = 0;
  let height = 0;
  let narrow = false;
  const resize = () => {
    const rect = canvas.parentElement!.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    narrow = width < 760;
    const dpr = Math.min(window.devicePixelRatio || 1, narrow ? 1.75 : 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    composer.setPixelRatio(dpr);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.fov = narrow ? 40 : 28;
    // Keep the PC right of the copy on wide screens, above it on phones.
    if (narrow) camera.setViewOffset(width, height, 0, Math.round(height * 0.27), width, height);
    else camera.setViewOffset(width, height, Math.round(-width * 0.19), 0, width, height);
    camera.updateProjectionMatrix();
    measure();
  };
  new ResizeObserver(resize).observe(canvas.parentElement!);
  resize();

  let progress = 0;
  const readProgress = () => {
    const rect = section.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    progress = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
  };

  const glowColor = new THREE.Color();
  const v = new THREE.Vector3();
  let activeChapter = -1;
  let shown = 0;
  let last = performance.now();
  let visible = true;
  let raf = 0;

  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    readProgress();
    shown = reduced ? progress : lerp(shown, progress, 1 - Math.exp(-dt * 7));
    const p = shown;

    const explode = smooth(0.1, 0.4, p) * (1 - smooth(0.6, 0.86, p));
    pc.setExplode(explode);
    if (!reduced) pc.spin(dt);

    // glow
    let i = 0;
    while (i < GLOWS.length - 2 && p > GLOWS[i + 1].at) i++;
    const a = GLOWS[i];
    const b = GLOWS[i + 1];
    glowColor.lerpColors(a.color, b.color, smooth(a.at, b.at, p));
    pc.setGlow(glowColor);
    inner.color.copy(glowColor);
    under.color.copy(glowColor);
    section.style.setProperty('--glow', `#${glowColor.getHexString()}`);

    // camera: side-on enough when open that the layers separate across the screen
    const sway = reduced ? 0 : Math.sin(now * 0.00022) * 0.04;
    const close = smooth(0.84, 1, p);
    const yaw = lerp(lerp(0.62, 0.92, explode), 0.42, close) + sway;
    const pitch = lerp(0.17, 0.24, explode);
    const radius = narrow
      ? lerp(lerp(22, 37, explode), 21, close)
      : lerp(lerp(17.5, 24, explode), 16.5, close);
    target.z = lerp(0, 1, explode);
    // on a phone the open build drops a little so the top callouts clear it
    target.y = -0.15 + (narrow ? explode * 0.9 : 0);
    camera.position.set(
      target.x + radius * Math.sin(yaw) * Math.cos(pitch),
      target.y + radius * Math.sin(pitch),
      target.z + radius * Math.cos(yaw) * Math.cos(pitch),
    );
    camera.lookAt(target);
    scene.environmentIntensity = lerp(0.42, 0.7, explode);
    fill.intensity = explode * 0.7;

    composer.render();

    // chapters
    const idx = p < 0.16 ? 0 : p < 0.56 ? 1 : p < 0.84 ? 2 : 3;
    if (idx !== activeChapter) {
      activeChapter = idx;
      chapters.forEach((c, n) => c.classList.toggle('is-active', n === idx));
      ticks.forEach((t, n) => t.classList.toggle('is-active', n === idx));
    }

    // callouts follow their parts while the build is open
    labelHost.classList.toggle('is-open', explode > 0.82);
    if (explode > 0.5) {
      const bandTop = height * (narrow ? 0.16 : 0.15);
      const bandBottom = height * (narrow ? 0.5 : 0.86);
      labelled.forEach((part, n) => {
        const [side, tier] = CALLOUT[part.id] ?? [1, 0];
        v.copy(part.anchor);
        part.group.localToWorld(v);
        v.project(camera);
        const x = (v.x * 0.5 + 0.5) * width;
        const y = (-v.y * 0.5 + 0.5) * height;
        const band = (side < 0 ? bandTop : bandBottom) - side * tier * 26;
        const el = labelEls[n];
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.setProperty('--run', `${(band - y).toFixed(1)}px`);
        // keep the text on screen when its part sits near an edge
        el.style.setProperty('--shift', `${(Math.min(width - halves[n], Math.max(halves[n], x)) - x).toFixed(1)}px`);
      });
    }

    if (visible) raf = requestAnimationFrame(frame);
  };

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    },
    { rootMargin: '10% 0px' },
  ).observe(section);

  // Lets a paused or background tab be brought to the current scroll position in one frame.
  section.addEventListener('stage:snap', () => {
    readProgress();
    shown = progress;
    frame(performance.now());
  });

  section.classList.add('is-live');
  return true;
}
