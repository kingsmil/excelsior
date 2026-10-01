import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// A dual-chamber "fishbowl" PC drawn entirely from primitives. One unit is
// 10cm. The viewer looks through the side glass (+z); the case front is +x.

export interface Part {
  id: string;
  label: string;
  group: THREE.Group;
  home: THREE.Vector3;
  away: THREE.Vector3;
  tilt: THREE.Euler;
  delay: number;
  anchor: THREE.Vector3;
}

export interface PC {
  root: THREE.Group;
  parts: Part[];
  setExplode(t: number): void;
  setGlow(color: THREE.Color): void;
  spin(dt: number): void;
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function createPC(): PC {
  const root = new THREE.Group();
  const parts: Part[] = [];
  const glowMats: THREE.MeshStandardMaterial[] = [];
  const rotors: { obj: THREE.Object3D; axis: 'x' | 'y' | 'z'; speed: number }[] = [];

  const metal = new THREE.MeshStandardMaterial({ color: 0x2b2e36, metalness: 0.7, roughness: 0.56 });
  const metalLight = new THREE.MeshStandardMaterial({ color: 0xa9adb8, metalness: 0.95, roughness: 0.26 });
  const plastic = new THREE.MeshStandardMaterial({ color: 0x1d2027, metalness: 0.25, roughness: 0.5 });
  const pcb = new THREE.MeshStandardMaterial({ color: 0x15181f, metalness: 0.35, roughness: 0.55 });
  const slot = new THREE.MeshStandardMaterial({ color: 0x3a3e48, metalness: 0.55, roughness: 0.42 });
  // Dark base colour: a white pane picks up enough diffuse light to read as a grey sheet.
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x0b0d12,
    metalness: 0,
    roughness: 0.05,
    transparent: true,
    opacity: 0.1,
    envMapIntensity: 0.3,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const glow = (intensity = 1.7) => {
    const m = new THREE.MeshStandardMaterial({
      color: 0x050505,
      emissive: 0x7fd8ff,
      emissiveIntensity: intensity,
      roughness: 0.4,
    });
    glowMats.push(m);
    return m;
  };

  const box = (w: number, h: number, d: number, mat: THREE.Material, r = 0.02) => {
    const geo = r > 0 ? new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2)) : new THREE.BoxGeometry(w, h, d);
    return new THREE.Mesh(geo, mat);
  };

  const at = <T extends THREE.Object3D>(o: T, x: number, y: number, z: number) => {
    o.position.set(x, y, z);
    return o;
  };

  const addPart = (
    id: string,
    label: string,
    group: THREE.Group,
    away: [number, number, number],
    delay: number,
    tilt: [number, number, number] = [0, 0, 0],
    anchor: [number, number, number] = [0, 0, 0],
  ) => {
    root.add(group);
    parts.push({
      id,
      label,
      group,
      home: group.position.clone(),
      away: new THREE.Vector3(...away),
      tilt: new THREE.Euler(...tilt),
      delay,
      anchor: new THREE.Vector3(...anchor),
    });
  };

  // A fan that faces +z: square frame, lit ring, hub and swept blades.
  const makeFan = (size: number, lit = true) => {
    const fan = new THREE.Group();
    const r = size / 2;
    const frameShape = new THREE.Shape();
    const c = 0.12 * size;
    frameShape.moveTo(-r + c, -r);
    frameShape.lineTo(r - c, -r);
    frameShape.quadraticCurveTo(r, -r, r, -r + c);
    frameShape.lineTo(r, r - c);
    frameShape.quadraticCurveTo(r, r, r - c, r);
    frameShape.lineTo(-r + c, r);
    frameShape.quadraticCurveTo(-r, r, -r, r - c);
    frameShape.lineTo(-r, -r + c);
    frameShape.quadraticCurveTo(-r, -r, -r + c, -r);
    const hole = new THREE.Path();
    hole.absarc(0, 0, r * 0.92, 0, Math.PI * 2, true);
    frameShape.holes.push(hole);
    const frame = new THREE.Mesh(
      new THREE.ExtrudeGeometry(frameShape, { depth: 0.25, bevelEnabled: false, curveSegments: 40 }),
      plastic,
    );
    frame.position.z = -0.125;
    fan.add(frame);

    if (lit) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 0.86, r * 0.045, 10, 72), glow(1.9));
      ring.position.z = 0.1;
      fan.add(ring);
    }

    const rotor = new THREE.Group();
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.26, r * 0.26, 0.16, 28), plastic);
    hub.rotation.x = Math.PI / 2;
    rotor.add(hub);
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(r * 0.22, -r * 0.08);
    bladeShape.quadraticCurveTo(r * 0.6, -r * 0.34, r * 0.8, -r * 0.06);
    bladeShape.quadraticCurveTo(r * 0.82, r * 0.2, r * 0.56, r * 0.3);
    bladeShape.quadraticCurveTo(r * 0.36, r * 0.2, r * 0.22, r * 0.1);
    const bladeGeo = new THREE.ShapeGeometry(bladeShape, 8);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c22,
      metalness: 0.1,
      roughness: 0.35,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 9; i++) {
      const holder = new THREE.Group();
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.rotation.x = 0.42;
      holder.add(blade);
      holder.rotation.z = (i / 9) * Math.PI * 2;
      rotor.add(holder);
    }
    fan.add(rotor);
    rotors.push({ obj: rotor, axis: 'z', speed: 5 + Math.random() * 1.5 });
    return fan;
  };

  // ---------------------------------------------------------------- chassis
  const W = 4.6;
  const H = 4.6;
  const zFront = 1.45;
  const zMid = -0.62;
  const zBack = -1.45;

  const chassis = new THREE.Group();
  chassis.add(at(box(W, 0.14, zFront - zBack, metal, 0.04), 0, -H / 2, 0));
  chassis.add(at(box(W, 0.14, zFront - zBack, metal, 0.04), 0, H / 2, 0));
  chassis.add(at(box(0.1, H, zFront - zBack, metal, 0.03), -W / 2 + 0.05, 0, 0));
  chassis.add(at(box(W, H, 0.06, metal, 0.02), 0, 0, zMid));
  chassis.add(at(box(0.12, H, 0.12, metal, 0.03), W / 2 - 0.06, 0, zMid + 0.03));
  // rear chamber front face, where the side intake fans mount
  chassis.add(at(box(0.1, H, zMid - zBack, metal, 0.02), W / 2 - 0.05, 0, (zMid + zBack) / 2));
  // rear I/O cut-out and expansion slots
  const io = at(box(0.04, 1.35, 0.5, metalLight, 0.01), -W / 2 - 0.01, 1.15, -0.2);
  chassis.add(io);
  for (let i = 0; i < 5; i++) {
    chassis.add(at(box(0.04, 0.12, 1.0, slot, 0.01), -W / 2 - 0.01, -0.35 - i * 0.2, 0.2));
  }
  // feet
  for (const fx of [-1.8, 1.8]) {
    for (const fz of [-1.0, 1.0]) {
      chassis.add(at(box(0.5, 0.16, 0.3, plastic, 0.05), fx, -H / 2 - 0.14, fz));
    }
  }
  // light strip along the floor edge
  chassis.add(at(box(W - 0.5, 0.035, 0.035, glow(1.5), 0), 0, -H / 2 + 0.1, zFront - 0.12));
  addPart('chassis', '', chassis, [0, 0, 0], 0);

  // ------------------------------------------------------------------ glass
  const glassSide = new THREE.Group();
  glassSide.add(box(W - 0.02, H - 0.1, 0.05, glass, 0));
  // a thin frame so the panel still reads once it is clear of the case
  for (const y of [-(H - 0.1) / 2, (H - 0.1) / 2]) glassSide.add(at(box(W, 0.035, 0.07, metal, 0), 0, y, 0));
  for (const x of [-W / 2, W / 2]) glassSide.add(at(box(0.035, H - 0.1, 0.07, metal, 0), x, 0, 0));
  glassSide.position.set(0, 0, zFront);
  addPart('glass', 'Tempered glass', glassSide, [0, 0, 5.6], 0, [0, 0, 0], [0, H / 2 - 0.05, 0]);

  const glassFront = new THREE.Group();
  glassFront.add(box(0.05, H - 0.1, zFront - zMid - 0.1, glass, 0));
  glassFront.position.set(W / 2, 0, (zFront + zMid) / 2);
  addPart('glassFront', '', glassFront, [2.4, 0, 0.8], 0.02);

  // -------------------------------------------------------- rear side panel
  const panel = new THREE.Group();
  panel.add(box(W, H, 0.05, metal, 0.02));
  panel.position.set(0, 0, zBack);
  addPart('panel', '', panel, [0, 0, -3.6], 0.04);

  // ------------------------------------------------------------ motherboard
  const board = new THREE.Group();
  const bw = 3.05;
  const bh = 3.05;
  board.add(box(bw, bh, 0.05, pcb, 0.01));
  // VRM heatsinks around the socket
  board.add(at(box(0.42, 1.25, 0.34, metal, 0.04), -1.28, 0.75, 0.19));
  board.add(at(box(1.2, 0.36, 0.3, metal, 0.04), -0.5, 1.33, 0.17));
  // socket frame
  board.add(at(box(0.62, 0.62, 0.05, metalLight, 0.01), -0.42, 0.62, 0.05));
  // memory slots
  for (let i = 0; i < 4; i++) {
    board.add(at(box(0.07, 1.4, 0.07, slot, 0.01), 0.42 + i * 0.13, 0.62, 0.06));
  }
  // expansion slots
  board.add(at(box(2.0, 0.09, 0.09, metalLight, 0.01), -0.35, -0.42, 0.07));
  board.add(at(box(2.0, 0.07, 0.07, slot, 0.01), -0.35, -1.05, 0.06));
  // chipset heatsink with a lit edge
  board.add(at(box(0.95, 0.7, 0.14, metal, 0.03), 0.75, -0.78, 0.09));
  board.add(at(box(0.6, 0.03, 0.03, glow(1.5), 0), 0.75, -0.5, 0.17));
  // 24-pin and headers
  board.add(at(box(0.1, 0.62, 0.13, slot, 0.01), 1.42, 0.7, 0.09));
  board.position.set(-0.72, 0.62, zMid + 0.1);
  addPart('board', 'Motherboard', board, [0, 0, 0.3], 0.3, [0, 0, 0], [0.9, bh / 2, 0]);

  // ---------------------------------------------------------------- CPU
  const cpu = new THREE.Group();
  cpu.add(box(0.46, 0.46, 0.06, metalLight, 0.02));
  cpu.position.set(-1.14, 1.24, zMid + 0.22);
  addPart('cpu', 'Processor', cpu, [0, 0, 0.8], 0.2, [0, 0, 0], [0, -0.23, 0]);

  // ---------------------------------------------------------- liquid cooler
  const cooler = new THREE.Group();
  const pump = new THREE.Group();
  const pumpBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.42, 48), plastic);
  pumpBody.rotation.x = Math.PI / 2;
  pump.add(pumpBody);
  const pumpRing = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.03, 10, 64), glow(2));
  pumpRing.position.z = 0.215;
  pump.add(pumpRing);
  const pumpFace = new THREE.Mesh(new THREE.CircleGeometry(0.3, 48), new THREE.MeshStandardMaterial({ color: 0x030304, metalness: 0.6, roughness: 0.12 }));
  pumpFace.position.z = 0.213;
  pump.add(pumpFace);
  pump.position.set(-1.14, 1.24, zMid + 0.5);
  cooler.add(pump);
  // radiator and three fans under the roof
  const rad = at(box(3.7, 0.27, 1.25, plastic, 0.03), 0.1, 2.0, 0.5);
  cooler.add(rad);
  for (let i = 0; i < 3; i++) {
    const f = makeFan(1.2);
    f.rotation.x = Math.PI / 2;
    f.position.set(-1.1 + i * 1.21, 1.74, 0.5);
    cooler.add(f);
  }
  // tubes from pump to radiator
  const tubeMat = new THREE.MeshStandardMaterial({ color: 0x08090b, roughness: 0.5, metalness: 0.2 });
  for (const off of [-0.13, 0.13]) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.14 + off, 1.24 - 0.3, zMid + 0.58),
      new THREE.Vector3(-1.5 + off, 0.75, zMid + 1.05),
      new THREE.Vector3(-1.95 + off * 0.6, 1.3, 0.55),
      new THREE.Vector3(-1.82 + off, 1.86, 0.5),
    ]);
    cooler.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.055, 10), tubeMat));
  }
  addPart('cooler', 'Liquid cooler', cooler, [0, 1.5, 1.0], 0.12, [0, 0, 0], [0.1, 2.15, 0.5]);

  // ------------------------------------------------------------------ memory
  const ram = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const stick = new THREE.Group();
    stick.add(box(0.07, 1.34, 0.36, metal, 0.015));
    stick.add(at(box(0.075, 1.3, 0.08, glow(2), 0.02), 0, 0, 0.22));
    stick.position.x = i * 0.26;
    ram.add(stick);
  }
  ram.position.set(-0.17, 1.24, zMid + 0.36);
  addPart('ram', 'Memory', ram, [0.5, 0, 1.9], 0.16, [0, 0, 0], [0.13, -0.67, 0.1]);

  // ---------------------------------------------------------- graphics card
  const gpu = new THREE.Group();
  const gl = 3.1;
  gpu.add(box(gl, 0.56, 1.28, plastic, 0.06));
  gpu.add(at(box(gl - 0.04, 0.03, 1.26, metalLight, 0.01), 0, 0.295, 0));
  gpu.add(at(box(gl - 0.5, 0.05, 0.035, glow(2), 0), 0.05, 0.2, 0.645));
  gpu.add(at(box(0.05, 1.0, 1.36, metalLight, 0.01), -gl / 2 - 0.02, -0.12, -0.02));
  for (let i = 0; i < 3; i++) {
    const f = makeFan(0.94, false);
    f.rotation.x = Math.PI / 2;
    f.position.set(-1.0 + i * 1.0, -0.2, 0);
    gpu.add(f);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.016, 8, 56), glow(1.6));
    ring.rotation.x = Math.PI / 2;
    ring.position.set(-1.0 + i * 1.0, -0.29, 0);
    gpu.add(ring);
  }
  gpu.position.set(-0.68, 0.1, zMid + 0.82);
  addPart('gpu', 'Graphics card', gpu, [0, -0.5, 3.7], 0.06, [-0.75, 0, 0], [0, -0.3, 0.3]);

  // ----------------------------------------------------------------- storage
  const ssd = new THREE.Group();
  ssd.add(box(0.8, 0.22, 0.03, new THREE.MeshStandardMaterial({ color: 0x12301f, roughness: 0.5 }), 0.005));
  ssd.add(at(box(0.3, 0.18, 0.03, slot, 0.005), -0.15, 0, 0.025));
  ssd.add(at(box(0.16, 0.16, 0.03, slot, 0.005), 0.22, 0, 0.025));
  ssd.position.set(-0.9, -0.58, zMid + 0.2);
  addPart('ssd', '', ssd, [0, -0.2, 1.4], 0.24, [0, 0, 0]);

  // ------------------------------------------------------------ intake fans
  const fans = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const f = makeFan(1.2);
    f.position.set(1.55, 1.25 - i * 1.25, zMid + 0.2);
    fans.add(f);
  }
  for (let i = 0; i < 3; i++) {
    const f = makeFan(1.2);
    f.rotation.x = -Math.PI / 2;
    f.position.set(-1.25 + i * 1.25, -2.08, 0.55);
    fans.add(f);
  }
  const rear = makeFan(1.2);
  rear.rotation.y = Math.PI / 2;
  rear.position.set(-2.05, 1.25, 0.55);
  fans.add(rear);
  addPart('fans', 'Fans', fans, [0.5, 0, 2.7], 0.1, [0, 0, 0], [0, -2.2, 0.55]);

  // ------------------------------------------------------------ power supply
  const psu = new THREE.Group();
  psu.add(box(1.6, 0.86, 0.72, metal, 0.03));
  const grille = makeFan(0.7, false);
  grille.position.set(0, 0, -0.37);
  grille.rotation.y = Math.PI;
  psu.add(grille);
  psu.position.set(-1.3, -1.7, (zMid + zBack) / 2);
  addPart('psu', '', psu, [0, 0, -2.2], 0.34, [0, 0, 0], [0, -0.43, 0]);

  let current = -1;
  const q0 = new THREE.Quaternion();
  const q1 = new THREE.Quaternion();
  const setExplode = (t: number) => {
    if (t === current) return;
    current = t;
    for (const p of parts) {
      const local = easeInOut(THREE.MathUtils.clamp((t - p.delay) / (1 - 0.34), 0, 1));
      p.group.position.copy(p.home).addScaledVector(p.away, local);
      q1.setFromEuler(p.tilt);
      p.group.quaternion.copy(q0).slerp(q1, local);
    }
    glass.opacity = 0.1 + 0.06 * Math.sin(Math.min(t, 1) * Math.PI);
  };
  setExplode(0);

  return {
    root,
    parts,
    setExplode,
    setGlow(color) {
      for (const m of glowMats) m.emissive.copy(color);
    },
    spin(dt) {
      for (const r of rotors) r.obj.rotation[r.axis] += r.speed * dt;
    },
  };
}
