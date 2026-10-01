---
version: 1
slug: "src-pages-teardown-index-astro"
primary_target: "src/pages/teardown/index.astro"
related_targets: ["src/styles/teardown.css","src/lib/stage.ts","src/lib/pc.ts"]
---

# Surface brief: /teardown/ (concept two)

Scope: the whole home page at `src/pages/teardown/index.astro`. Visitor mode: Persuade.

Audience and job: a Singapore buyer, mostly on a phone, arriving from Carousell or search with a budget and no confidence about parts. Action: start a WhatsApp chat. Proof: 5.0 from 1,682 Carousell reviews, verbatim buyer quotes, listed prices as of 1 Oct 2026.

Constraints: static Astro on GitHub Pages; no cart; no purchased or commissioned 3D assets, so the PC is drawn in code; no live part-swap builder (user ruled it out for now).

Direction was pinned by the user ("the PC unravelling style", after the Timeless & Co. watch demo the client named), so the concept roll was not used to choose it.

## Direction contract

THESIS: One PC comes apart into its parts as you scroll and goes back together, so the visitor sees that every part is a decision someone makes for them. It refuses the category default of a sale banner over a carousel.

OWN-WORLD: Black studio stage. The only colour is the PC's own lighting, which shifts blue, violet, amber, blue by chapter and drives the page accent. Archivo at expanded width, heavy, uppercase for display; Archivo regular for text. Square-cornered controls, hairline rules, no cards.

STORY: This shop builds around my budget; they choose parts honestly; it is built and tested properly; 1,682 people agree; here are real builds and prices; message them.

FIRST VIEWPORT: Full-bleed canvas. The assembled PC sits right of centre at roughly half the viewport height. Bottom left: the h1 "A PC built around you" in three lines, one paragraph, the WhatsApp button and the review count beside it. Four progress ticks under the copy; a scroll hint bottom right. On phones the PC sits in the top half and the copy below it.

FORM: Scroll-scrubbed 3D teardown with callouts (user-pinned; seed key 20e1470d was rolled but not applied). Signature interaction: scroll opens the build along one axis, callout leaders name each part, and the lighting colour changes per chapter. Motion grammar: scroll-driven, eased, no autoplay beyond fan spin and a slow sway.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Unresolved: real logo files; whether the client approves quoting reviews; who maintains prices.
