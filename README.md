# Excelsior Systems: site concepts

Two home-page concepts for Excelsior Systems, a custom PC builder in Ang Mo Kio, Singapore.

- `/edit/` is a light, editorial storefront built on the shop's own build photos.
- `/teardown/` is a dark, scroll-driven page where a code-drawn 3D PC comes apart and rebuilds.
- `/` is a chooser between the two.

Built with Astro and Three.js. Static output, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # local preview
npm run build    # static site in dist/
```

Content lives in `src/data/site.ts`. Prices, specs, photos and reviews were taken from Excelsior Systems'
public Carousell page on 1 October 2026 and need the client's sign-off before launch; see `src/assets/README.md`
for image provenance and `PRODUCT.md` for the product record.
