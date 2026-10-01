---
name: Excelsior Systems (two concept worlds)
description: Two competing visual worlds for one custom PC builder. The Storefront (light, editorial) and The Teardown (dark, scroll-driven 3D). Only one survives the client's choice.
colors:
  edit-paper: "#f3f4f7"
  edit-paper-2: "#e6e8ef"
  edit-tile: "#fbfbfd"
  edit-ink: "#13151b"
  edit-soft: "#555c6c"
  edit-haze: "#6b748c"
  edit-line: "#d3d6df"
  edit-accent: "#2545d6"
  edit-on-ink-soft: "#c9cedb"
  edit-haze-on-ink: "#a9b1c6"
  teardown-stage: "#07080b"
  teardown-raise: "#0f1116"
  teardown-ink: "#eef1f6"
  teardown-muted: "#a3aab8"
  teardown-line: "#262a33"
  teardown-glow: "#2fb4ff"
  teardown-glow-violet: "#8f5bff"
  teardown-glow-amber: "#ff9226"
  teardown-on-light: "#05060a"
typography:
  edit-display:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni Moda', 'Didot', serif"
    fontSize: "clamp(2.75rem, 4.5vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  edit-headline:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni Moda', 'Didot', serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  edit-title:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni Moda', 'Didot', serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  edit-statement:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', sans-serif"
    fontSize: "clamp(2.75rem, 7.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  edit-quote:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni Moda', 'Didot', serif"
    fontSize: "clamp(1.3rem, 1.75vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.3
  edit-body:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  edit-body-sm:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  edit-control:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  edit-label:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.18em"
  edit-wordmark:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni Moda', 'Didot', serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.24em"
  teardown-display:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(2.25rem, min(5.6vw, 9vh), 5.25rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 125"
  teardown-headline:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 125"
  teardown-price:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 125"
  teardown-title:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  teardown-quote:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.3
  teardown-body:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  teardown-label:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 112"
  teardown-callout:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 112"
  teardown-wordmark:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 800
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 125"
rounded:
  edit-pill: "999px"
  edit-photo: "0.6rem"
  teardown-control: "2px"
spacing:
  edit-gutter: "clamp(1.25rem, 4.8vw, 4.5rem)"
  edit-section: "clamp(4rem, 8vw, 7rem)"
  edit-section-lg: "clamp(4.5rem, 9vw, 8rem)"
  edit-grid-gap: "clamp(0.9rem, 1.8vw, 1.5rem)"
  teardown-gutter: "clamp(1.25rem, 5vw, 5rem)"
  teardown-section: "clamp(5rem, 11vw, 9.5rem)"
  teardown-head-gap: "clamp(2.5rem, 5vw, 4rem)"
  teardown-column-gap: "clamp(1.5rem, 4vw, 4rem)"
components:
  edit-pill:
    backgroundColor: "{colors.edit-tile}"
    textColor: "{colors.edit-ink}"
    typography: "{typography.edit-control}"
    rounded: "{rounded.edit-pill}"
    padding: "0.35rem 1.35rem 0.35rem 0.4rem"
    height: "3rem"
  edit-pill-hover:
    backgroundColor: "{colors.edit-ink}"
    textColor: "{colors.edit-paper}"
  edit-pill-ink:
    backgroundColor: "{colors.edit-ink}"
    textColor: "{colors.edit-paper}"
    typography: "{typography.edit-control}"
    rounded: "{rounded.edit-pill}"
    padding: "0.35rem 1.35rem 0.35rem 0.4rem"
    height: "3rem"
  edit-pill-ink-hover:
    backgroundColor: "{colors.edit-accent}"
    textColor: "{colors.edit-paper}"
  edit-block-button:
    backgroundColor: "{colors.edit-ink}"
    textColor: "{colors.edit-paper}"
    typography: "{typography.edit-label}"
    padding: "0.8rem 1.6rem"
    height: "3rem"
  edit-block-button-hover:
    backgroundColor: "{colors.edit-accent}"
    textColor: "{colors.edit-paper}"
  edit-product-tile:
    backgroundColor: "{colors.edit-tile}"
    textColor: "{colors.edit-ink}"
  edit-product-peek:
    backgroundColor: "{colors.edit-ink}"
    textColor: "{colors.edit-on-ink-soft}"
    padding: "1rem 1rem 1.1rem"
  edit-top-bar-scrolled:
    backgroundColor: "{colors.edit-paper}"
    textColor: "{colors.edit-ink}"
    padding: "1.1rem clamp(1.25rem, 4.8vw, 4.5rem)"
  teardown-button:
    backgroundColor: "{colors.teardown-ink}"
    textColor: "{colors.teardown-on-light}"
    typography: "{typography.teardown-label}"
    rounded: "{rounded.teardown-control}"
    padding: "0.85rem 1.5rem"
    height: "3rem"
  teardown-button-hover:
    backgroundColor: "{colors.teardown-glow}"
    textColor: "{colors.teardown-on-light}"
  teardown-button-line:
    backgroundColor: "transparent"
    textColor: "{colors.teardown-ink}"
    typography: "{typography.teardown-label}"
    rounded: "{rounded.teardown-control}"
    padding: "0.85rem 1.5rem"
    height: "3rem"
  teardown-button-line-hover:
    backgroundColor: "{colors.teardown-glow}"
    textColor: "{colors.teardown-on-light}"
  teardown-build-row:
    backgroundColor: "{colors.teardown-stage}"
    textColor: "{colors.teardown-ink}"
    padding: "1rem 0.75rem"
  teardown-build-row-hover:
    backgroundColor: "{colors.teardown-raise}"
  teardown-bar-solid:
    backgroundColor: "{colors.teardown-stage}"
    textColor: "{colors.teardown-ink}"
    padding: "1rem clamp(1.25rem, 5vw, 5rem)"
---

# Design System: Excelsior Systems

> **Two worlds, one survivor.** This repository deliberately holds two alternative visual worlds built as competing concepts for one client: **World one, The Storefront** (`/edit/`) and **World two, The Teardown** (`/teardown/`). The client will choose one. When they do, the other world is deleted: remove every token prefixed with the losing world (`edit-*` or `teardown-*`), every subsection headed with its name below, its stylesheet and its page, then drop the prefix from the survivor. Until then, the two worlds never mix on one surface. Everything recorded here was read from the shipped code on 1 October 2026, not from the plans.

## Overview

### Shared ground (survives either choice)

Both worlds are one static Astro site sharing a single layout shell (`src/layouts/Base.astro`), one data file (`src/data/site.ts`) and one image library. The shell carries no styling of its own; each world loads its own stylesheet and its own fonts, so a page is always wholly one world.

What the two builds agree on, value for value:

- **One primary action.** Every call to action opens a WhatsApp chat with a prefilled message. There is no cart, form or second primary action in either world.
- **One easing curve.** `cubic-bezier(0.16, 1, 0.3, 1)` for every transition in both worlds.
- **One phone breakpoint.** 760px.
- **One focus treatment.** A 2px outline in the world's accent, offset 4px.
- **One control floor.** Buttons are at least 3rem tall; 2.75rem inside the fixed header.
- **A transparent fixed header** that gains the ground colour and a hairline underline once the page has moved on.
- **A promise marquee** of the same six facts, duplicated once for a seamless loop, static and scrollable under reduced motion.
- **Hairline rules** (1px in the world's line colour) as the only dividers.
- **The shop's own photographs** as the only imagery. Sources and rights status are recorded in `src/assets/README.md`.

The chooser page at the site root is scaffolding, not a third world: a split screen that borrows each world's ground and text colour by literal value. It goes away with the losing concept and sets no rules.

### World one: The Storefront

**Creative North Star: "The Storefront"**

PCs shown the way a fashion house shows a season. A cool porcelain page, ink-navy text and a high-contrast Didone serif, so that the only saturated colour on screen comes from the RGB lighting inside the build photographs. The hero is a ring of twelve build photos curving across the top of the viewport like the inside of a cylinder, drifting and draggable, with one cut-out PC standing in front of it.

The density is editorial: large photographs, short lines of text, generous section padding, no containers around copy. Products sit as cut-outs on near-white tiles with centred captions. The single loud typographic moment is a heavy uppercase sans statement, "We don't upsell.", set against the serif everywhere else.

**Key Characteristics:**
- Light, cool, almost monochrome chrome; photographs supply the colour.
- Bodoni Moda headings with an italic closing phrase in slate.
- Pill buttons with a round arrow badge; one square ink block button.
- Cut-out PCs with soft grounding shadows on near-white tiles.
- Motion you can touch: a draggable photo ring, hover reveals, two photos drifting at different rates.

### World two: The Teardown

**Creative North Star: "The Teardown"**

One PC, drawn entirely in code, sits on a black studio stage. As the visitor scrolls it comes apart along one axis into its parts, callouts name each one, and it goes back together. The scene is pinned for 520vh while four chapters of copy change beside it. The PC's own lighting is the accent colour: it moves from blue to violet to amber and back to blue across the scroll, and the stage's interface colour follows it.

Below the stage the page is a plain dark document: wide, heavy, uppercase Archivo headings, a hairline-ruled list of builds with prices, staggered quotes, three steps, a photo and an address. No cards, no panels, no shadows.

**Key Characteristics:**
- Near-black ground, one cool off-white for text, one glow colour at a time.
- Archivo at three widths; display is 125% wide, weight 800, uppercase.
- Square controls (2px corners), hairline rules, lists instead of cards.
- Scroll is the only driver of the scene; nothing autoplays beyond fan spin and a slow sway.
- A complete static fallback when WebGL or scripting is unavailable.

## Colors

### World one: The Storefront

A cool blue-grey family at very low chroma, plus one cobalt that only appears when something is touched.

#### Primary
- **Cobalt** (`edit-accent`): the response colour. Hover fill of the ink pill and the block button, hover colour of text links, and the focus ring. Never present at rest.

#### Neutral
- **Porcelain** (`edit-paper`): the page ground, the scrolled header, text on ink.
- **Porcelain Shade** (`edit-paper-2`): alternate section ground (the statement band, the shop collage), the foot of the hero gradient, the placeholder behind ring photos.
- **Tile White** (`edit-tile`): the product tile and the resting pill. One step lighter than the page so cut-outs read as displayed objects.
- **Ink Navy** (`edit-ink`): all primary text, the ink pill, the block button, the reveal panel, the closing band, the short rule under a centred section title.
- **Slate** (`edit-soft`): secondary text: captions, nav links, notes, footer links. 6.09:1 on Porcelain.
- **Haze** (`edit-haze`): the italic closing phrase of serif headings and the marquee separator dot.
- **Hairline** (`edit-line`): 1px rules and the resting pill border.
- **Mist on Ink** (`edit-on-ink-soft`): secondary text on Ink Navy (reveal panel specs, struck-through prices over photos). A literal in the stylesheet, not yet a custom property.
- **Haze on Ink** (`edit-haze-on-ink`): the italic closing phrase when the heading sits on Ink Navy. Also a literal.

#### Named Rules
**The Photos Are the Colour Rule.** Ground, text and rules stay inside the blue-grey family. Every saturated hue visible at rest belongs to a build photograph.

**The Accent on Touch Rule.** Cobalt appears only as a response: hover and focus. Nothing is cobalt at rest.

**The Haze Is Display-Only Rule.** Haze reaches 4.24:1 on Porcelain. It is for the italic display phrase and for dots, never for body-size text. Secondary text is Slate.

### World two: The Teardown

Near-black, one cool off-white, and a single emissive colour that the 3D scene and the interface share.

#### Primary
- **Rig Blue** (`teardown-glow`): the default glow. Link underlines, the GPU line in a build row, quote attributions, step numerals, the active progress tick, marquee diamonds, the focus ring, and the hover fill of every button.

#### Secondary
- **Rig Violet** (`teardown-glow-violet`) and **Rig Amber** (`teardown-glow-amber`): the glow's other two states. They exist only inside the pinned stage, written to the stage's `--glow` each frame from the scroll position (stops at 0, 0.36, 0.68, 1.0: blue, violet, amber, blue). All three clear 4.5:1 as text on the stage (violet is the lowest at 4.87:1).

#### Neutral
- **Stage Black** (`teardown-stage`): page ground, scene background and fog colour, the solid header.
- **Raise** (`teardown-raise`): the only tonal step, used for build-row hover and focus.
- **Studio White** (`teardown-ink`): primary text and the resting button fill.
- **Muted** (`teardown-muted`): paragraphs, nav links, spec lines, the lighter half of the wordmark. 8.58:1 on Stage Black.
- **Hairline** (`teardown-line`): 1px rules and inactive progress ticks.
- **Dark on Light** (`teardown-on-light`): text on Studio White or on a glow fill. A literal in the stylesheet, used four times, not yet a custom property.

#### Named Rules
**The One Light Rule.** There is one glow colour at a time and the interface accent is that colour. Inside the stage it travels with the scroll; outside the stage it holds at Rig Blue. Photographs keep their own colour.

**The Dark on Glow Rule.** Text on a glow fill or on Studio White is Dark on Light, never Studio White.

## Typography

### World one: The Storefront

**Display Font:** Bodoni Moda Variable, optical-size axis, roman and italic (with Bodoni Moda, Didot, serif)
**Body Font:** Hanken Grotesk Variable (with Hanken Grotesk, sans-serif)

**Character:** A fashion-masthead Didone over a quiet, slightly warm grotesque. The serif carries every headline, quote and the wordmark; the sans carries reading text, controls and tracked uppercase labels.

#### Hierarchy
- **Display** (`edit-display`, weight 400, line-height 1.02): the hero headline, bottom left of the first viewport. On phones it becomes `clamp(2.6rem, 13vw, 3.4rem)`.
- **Headline** (`edit-headline`): section headings that open a grid of items or quotes. The closing band uses a larger cut of the same style, `clamp(2.6rem, 6vw, 5.25rem)`.
- **Title** (`edit-title`): headings that sit beside other content (the recent-builds strip, the shop paragraph, range names at `clamp(1.6rem, 2.4vw, 2.1rem)`). Line-height opens to 1.1 where the heading runs to several lines.
- **Statement** (`edit-statement`, sans, weight 700, uppercase, line-height 0.92): used once, for the no-upsell claim. It is the page's single switch out of the serif at display size.
- **Quote** (`edit-quote`, serif, line-height 1.3): buyer quotes in the reviews row.
- **Body** (`edit-body`, 1rem, line-height 1.6): paragraphs, capped between 27rem and 34rem wide.
- **Body small** (`edit-body-sm`): captions, product sub-lines, prices, footer links. Prices and counts use tabular numerals.
- **Control** (`edit-control`): pill and text-link text.
- **Label** (`edit-label`, uppercase): the block button, marquee items, header fact labels, reveal-panel prompt, footer column headings. In the build this voice runs from 0.6875rem to 0.75rem.
- **Wordmark** (`edit-wordmark`, serif, uppercase, 0.24em tracking): "Excelsior" in the header and footer.

#### Named Rules
**The Italic Second Line Rule.** A serif heading may turn its closing phrase to italic in Haze: "Built to *your budget.*", "Recent *builds*", "You can only do *better.*". One phrase per heading, always the last.

**The Label Names Something Rule.** Tracked uppercase is for a control, a fact's name, a marquee item or a footer column. It labels a thing; it never sits above a headline as an introduction to it.

### World two: The Teardown

**Display Font:** Archivo Variable, width axis (with Archivo, sans-serif)
**Body Font:** Archivo Variable at normal width

**Character:** One family doing three jobs by width. Expanded and heavy it reads like lettering stamped on equipment; at normal width and weight it is a plain, legible text face.

#### Hierarchy
- **Display** (`teardown-display`, weight 800, 125% width, uppercase, line-height 0.96): the four chapter headings in the stage. The size is capped by viewport height as well as width so a chapter always fits beside the scene. On phones: `clamp(2rem, 9.4vw, 2.75rem)`.
- **Headline** (`teardown-headline`, same voice): section headings below the stage. The visit heading steps down to `clamp(2.25rem, 4.4vw, 4rem)`.
- **Price** (`teardown-price`, 125% width, tabular numerals): the price in a build row; 1.25rem on phones.
- **Title** (`teardown-title`, weight 700, 112% width, sentence case): step titles. Build names use the same voice at 1.125rem.
- **Quote** (`teardown-quote`, weight 500): buyer quotes.
- **Body** (`teardown-body`, 1.0625rem, line-height 1.55; 1rem on phones): paragraphs in Muted, capped between 24rem and 34rem.
- **Label** (`teardown-label`, uppercase): buttons at 112% width. Nav links, text links and row prompts use the same size at normal width and weight 600 to 700.
- **Callout** (`teardown-callout`, uppercase, 112% width): part names in the open scene; 0.625rem on phones.
- **Wordmark** (`teardown-wordmark`, 125% width, uppercase): "Excelsior" at weight 800 with "Systems" at weight 500 in Muted.

#### Named Rules
**The Three Widths Rule.** 125% for display, prices, the wordmark and the marquee. 112% for buttons, callouts, build names and step titles. 100% for paragraphs, quotes, links and spec lines.

**The Uppercase Stops at Titles Rule.** Headings and labels are uppercase. Step titles, build names, quotes and paragraphs are sentence case.

## Layout

### World one: The Storefront

Full-bleed and fluid with no max-width wrapper; every section is inset by one gutter (`edit-gutter`). Sections alternate between Porcelain and Porcelain Shade and close on a single Ink Navy band. Vertical padding is `edit-section` for most sections and `edit-section-lg` above the product grids.

- **Hero:** at least `max(100svh, 41rem)` tall. The photo ring takes the top 61%; the cut-out PC stands centre, overlapping it; headline and pill sit bottom left, a right-aligned note and italic signature bottom right.
- **Grids:** ranges in three columns; featured builds in four; budget builds in three; quotes in three under a hairline. Gaps follow `edit-grid-gap`.
- **Collage:** the shop section is a 12-column grid where two photographs overlap a large pale wordmark set behind them.
- **Strip:** recent builds scroll horizontally with proximity snapping, bleeding to the viewport edge, keyboard focusable.
- **At 1000px and below:** header facts hide; four- and three-column product grids become two.
- **At 760px and below:** the hero stops being positioned layers and stacks (ring, PC overlapping it, copy, note); two section links move to their own line under the header; every grid becomes one column; the collage becomes two offset, overlapping photos.
- **On touch devices** (`hover: none`): the product reveal panel is not hidden; the specs sit under the image as plain text.

### World two: The Teardown

Full-bleed and fluid, inset by `teardown-gutter`. The page is one pinned scene followed by a single-column document; sections are separated by `teardown-section` of space and by hairlines, never by background changes.

- **Stage:** 520vh tall with a sticky 100svh viewport. Copy is anchored bottom left, `min(30rem, 34vw)` wide, 15vh from the bottom; four progress ticks sit 8vh from the bottom; a scroll hint sits bottom right during the first chapter only. The camera's view is offset 19% of the width so the PC sits right of the copy.
- **Section heads:** a two-column split (1.3fr / 1fr), heading left, one paragraph right, baseline-aligned at the bottom.
- **Build list:** one row per build on a five-column grid: image, name, specs, price, prompt.
- **Quotes:** three columns, each starting 4rem lower than the one before.
- **Steps:** three columns, each under a hairline.
- **Visit:** a 50/50 split of photograph and address, closed top and bottom by hairlines.
- **At 1040px and below:** a build row folds to image, name and price, with specs and prompt on their own lines.
- **At 760px and below:** the PC moves to the top half (camera offset 27% of the height, wider field of view), a gradient from transparent to Stage Black covers the lower half so copy stays legible, the three closely spaced callouts and the in-stage quotes are dropped, the quote stagger is removed, and nav links are hidden over the stage and return on a second line once the header turns solid.

## Elevation & Depth

### World one: The Storefront

Layered, with shadows doing one job: standing an object on the page. Every shadow is tinted with Ink Navy (`rgb(19 21 27 / …)`), soft, and pulled downward. Sections themselves are flat; there are no raised panels.

#### Shadow Vocabulary
- **Cut-out, hero** (`filter: drop-shadow(0 34px 34px rgb(19 21 27 / 0.3))`): the PC standing in front of the ring.
- **Cut-out, feature** (`filter: drop-shadow(0 30px 30px rgb(19 21 27 / 0.24))`): the PC beside the statement.
- **Cut-out, tile** (`filter: drop-shadow(0 18px 18px rgb(19 21 27 / 0.2))`): products on tiles.
- **Photograph** (`box-shadow: 0 34px 50px -24px rgb(19 21 27 / 0.45)`): the two overlapping collage photos.
- **Pill** (`box-shadow: 0 10px 24px -14px rgb(19 21 27 / 0.35)`): the only shadow on a control.
- **Caption scrim** (`linear-gradient(to top, rgb(9 10 14 / 0.86), rgb(9 10 14 / 0))`): under white caption text on budget-build photos.

Real depth is used once: the hero ring is a CSS 3D cylinder (radius 2.02 times the card width, perspective 1.85 times the radius), with cards beyond 96 degrees of the viewer hidden.

#### Named Rules
**The Grounding Shadow Rule.** A shadow sits under an object: a cut-out PC, a photograph, the pill. It never outlines a section or lifts a block of text.

### World two: The Teardown

Flat interface, deep scene. The stylesheet contains no `box-shadow` at all. The page's depth lives in the 3D stage; everything else is separated by hairlines and one tonal step (`teardown-raise` on a hovered build row).

How the scene builds depth, as shipped:
- **Light:** a white key light, a cool rim light, a fill that rises as the build opens, and two point lights inside and under the PC that take the glow colour.
- **Bloom:** strength 0.6, radius 0.65, threshold 0.92, so only emissive strips and rings flare.
- **Fog and floor:** fog in Stage Black from 30 to 72 units; the floor is a round pool under the PC that fades to nothing, so the stage stays black to its edges.
- **Tone:** ACES filmic tone mapping at exposure 1.05.
- **Callout halo** (`text-shadow: 0 0 10px` in Stage Black): keeps part names legible where they cross the model. It is the only shadow-like effect in the interface.

#### Named Rules
**The Scene Holds the Depth Rule.** Outside the canvas nothing floats: no box shadows, no raised panels. Hover changes tone, not height.

## Shapes

### World one: The Storefront

Three forms, each with a job. **Pills and circles** (`edit-pill`, 50% badges, 4px marquee dots) are for controls. **Softly rounded rectangles** (`edit-photo`) are for framed photographs: ring cards, range cards and budget-build cards. **Square edges** are for everything architectural: product tiles, the block button, the collage and strip photographs, the reveal panel. Borders are 1px hairlines only, and icons are a single stroked arrow (1.4px stroke, round caps) drawn inline.

### World two: The Teardown

Square. Buttons carry a barely perceptible corner (`teardown-control`); images, rows and sections have none. The only round forms are 6px callout dots; the marquee separator is a 6px square turned 45 degrees. Progress ticks are 2px bars. Borders are 1px hairlines, plus a 1px Studio White outline on buttons. The code-drawn PC follows the same language: boxes with tight bevels, circular fans and light rings.

## Components

### World one: The Storefront

#### Buttons
- **Pill** (`edit-pill`): Tile White with a hairline border, the pill shadow, and a 2.2rem Ink Navy circle at the leading edge holding the arrow. On hover the pill inverts to Ink Navy, the badge inverts to Porcelain, and the arrow moves 3px right (0.45s). Pressed, it drops 1px.
- **Ink pill** (`edit-pill-ink`): the same shape pre-inverted, used for the hero's primary action. Hover fills Cobalt. On the Ink Navy closing band the light pill is used with a transparent border and the same Cobalt hover.
- **Block button** (`edit-block-button`): square, Ink Navy, Label type. Hover fills Cobalt (0.35s). Used once, under the statement.
- **Text link:** Control type with a 1px underline offset 0.4em; hover turns Cobalt.

#### Cards / Containers
- **Product tile** (`edit-product-tile`): a square-cornered Tile White field, ratio 1 / 1.14, holding a cut-out at 78% with the tile shadow. Name, sub-line and price are centred beneath, outside the tile. No border, no radius.
- **Reveal panel** (`edit-product-peek`): on hover or keyboard focus an Ink Navy panel slides up from the tile's bottom edge (0.55s) listing the specs and ending in a Label prompt, while the cut-out lifts 9% and scales to 0.94 (0.7s).
- **Range card:** a rounded photograph (ratio 4 / 4.6) with a serif name, one line and an arrow prompt beneath. Hover saturates the photo to 1.15 and scales it to 0.985 (0.9s); the arrow moves 4px.
- **Budget card:** a rounded photograph (4 / 3) with the caption scrim, build name left and price right in white; a previous price is struck through in Mist on Ink. Hover scales the photo to 1.04 (1s).

#### Navigation
- **Header:** fixed, transparent over the hero. Wordmark, two label-and-value facts, a right-aligned stack of small section links in Slate (hover Ink Navy), and a pill. After 24px of scroll it gains a Porcelain ground and a hairline (0.4s).
- **Footer:** wordmark, three columns under Label headings, and a hairline-topped note.

#### Photo Ring (signature)
Twelve build photographs (ratio 1 / 1.12, `edit-photo` corners) on the inside of a cylinder. It drifts at 2.2 degrees per second and can be dragged horizontally, 70 degrees per viewport width, keeping momentum and easing back to the drift. Vertical touch scrolling passes through. Card width is `clamp(9rem, 16.5vw, 16rem)`, 44vw on phones. Under reduced motion the drift stops and dragging still works. Before the script runs, only the arc facing the viewer is shown.

#### Promise Tape
A hairline-bounded marquee of Label items separated by Haze dots, 52s per loop, linear.

#### Photo Drift
The two collage photographs move vertically at 0.06 and -0.05 of the section's distance from the viewport centre. Disabled under reduced motion.

### World two: The Teardown

#### Buttons
- **Solid** (`teardown-button`): Studio White with a matching 1px border, Dark on Light label text. Hover fills and borders it in the current glow (0.3s). Pressed, it drops 1px.
- **Line** (`teardown-button-line`): transparent with the Studio White border, used in the header. Hover fills with glow and switches the text to Dark on Light.
- **Text link:** Label type at normal width with a 2px glow underline offset 0.45em; hover turns the text glow.

#### Build Row (the list, in place of cards)
`teardown-build-row`: a full-width link between hairlines. A 5.5rem image, the processor in Title voice with the graphics card beneath it in glow, a Muted spec line joined by middle dots, the price in Price voice with any previous price struck through above it, and an uppercase prompt. Hover and focus tint the row Raise, scale the image to 1.12 (0.5s) and turn the prompt glow.

#### Navigation
- **Header:** fixed and transparent over the whole pinned stage; wordmark left, three uppercase links centred in Muted (hover Studio White), line button right. It turns Stage Black with a hairline only once the stage has scrolled past.
- **Footer:** wordmark, a right-aligned row of Muted links, one small note.

#### The Stage (signature)
- **Model:** a dual-chamber glass PC built from primitives: dark graphite metal (`0x2b2e36`), bright metal (`0xa9adb8`), plastic (`0x1d2027`), board (`0x15181f`), near-clear dark glass at 10% opacity. Light strips and fan rings are emissive and take the glow colour.
- **Timeline:** driven only by scroll position through the 520vh section, smoothed toward the target each frame. The build opens between 10% and 40%, holds, and closes between 60% and 86%. Parts leave in a stagger, each on a cubic ease-in-out, mostly along the axis facing the viewer. Chapters change at 16%, 56% and 84%.
- **Camera:** 28 degree field of view (40 on phones). It swings more side-on and pulls back as the build opens, then comes round to the front and closer at the end.
- **Ambient motion:** fans spin and the camera sways slightly. Nothing else moves without scroll.
- **Chapters:** four blocks of copy share one position; the incoming one fades up from 28px with a 10px blur clearing over 0.7s.
- **Progress ticks:** four 2px bars, 2.75rem wide in Hairline; the active one is 4.5rem in glow.
- **Reduced motion:** the scene follows scroll directly with no smoothing, fan spin or sway, and chapters switch without blur or travel.
- **Fallback:** without WebGL or scripting the stage is an ordinary section: a build photograph, then all four chapters stacked in a 36rem column.

#### Part Callouts
Seven named parts. Each has a 6px glow dot on the part, a 1px leader in glow at 55% strength, and a Callout label resting in a band above or below the model on one of two tiers so neighbours never collide. Labels fade in once the build is more than 82% open, track their parts every frame, and are nudged inward so text never leaves the stage.

#### Promise Ribbon
A hairline-bounded marquee at 125% width, weight 700, separated by glow diamonds, 46s per loop, linear.

#### Steps
An ordered list of three, each under a hairline: the list's own number in glow, a Title, one Muted paragraph. The numeral is the marker of a real sequence, not a decoration.

## Do's and Don'ts

### Shared

#### Do:
- **Do** end every call to action in a WhatsApp link with a prefilled message. It is the only primary action in either world.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for transitions and honour `prefers-reduced-motion` the way each build does: stop the autoplay, keep the content.
- **Do** keep buttons at least 3rem tall (2.75rem in the fixed header) and give every focusable element the 2px accent outline at 4px offset.
- **Do** use only images recorded in `src/assets/README.md`, and add provenance for any new one.

#### Don't:
- **Don't** mix the worlds. No Storefront token, font or component on a Teardown surface, and none the other way.
- **Don't** treat the chooser page as a pattern source. It is scaffolding for the client's decision.
- **Don't** keep the losing world's tokens after the client chooses.

### World one: The Storefront

#### Do:
- **Do** let the build photographs supply the colour; keep chrome inside Porcelain, Ink Navy, Slate and Haze.
- **Do** set headings in Bodoni Moda at weight 400 and, where the sentence allows, turn the closing phrase italic in Haze.
- **Do** show products as cut-outs on Tile White with a soft, ink-tinted drop shadow.
- **Do** use the pill with its arrow badge for the WhatsApp action and reserve the block button for a single supporting action.
- **Do** switch to Haze on Ink and Mist on Ink when text sits on Ink Navy.

#### Don't:
- **Don't** show Cobalt at rest. It is the hover and focus colour only.
- **Don't** set body-size text in Haze; use Slate.
- **Don't** put a shadow on a section or a block of text. Shadows ground objects.
- **Don't** fill a section with a saturated colour. The dark surfaces are Ink Navy only: the closing band and the reveal panel.
- **Don't** repeat the heavy uppercase sans statement. It works because it happens once.

### World two: The Teardown

#### Do:
- **Do** take the accent from the glow: one colour at a time, shifting only inside the stage, Rig Blue everywhere else.
- **Do** set headings in Archivo at 125% width, weight 800, uppercase, line-height 0.96.
- **Do** list builds as hairline-separated rows with the price in the Price voice.
- **Do** keep the scene scroll-driven, and keep the static fallback complete whenever chapter copy changes.
- **Do** put Dark on Light text on any glow or Studio White fill.

#### Don't:
- **Don't** add box shadows, cards or raised panels. Depth belongs to the scene; hover changes tone.
- **Don't** round the corners of controls, images or rows beyond 2px.
- **Don't** introduce a second accent hue outside the stage, or a glow colour the scene is not showing.
- **Don't** autoplay the teardown or add motion that scroll does not drive, beyond fan spin and the slow sway.
- **Don't** set paragraphs, quotes or spec lines in the 125% width or in uppercase.
