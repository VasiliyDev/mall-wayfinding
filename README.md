# Mall Wayfinding — 3D indoor navigation demo

A client-side **indoor wayfinding** demo built with **Vue 3 + TypeScript + Three.js**.
Pick a starting level and a parking spot; the app renders the two floors in 3D,
draws the walking route to the spot, and shows a lift transition between levels.

> Runs entirely in the browser on bundled sample data — no backend, no API keys.
> This is a standalone showcase reconstructed from a private production project;
> all data, branding and identifiers here are synthetic.

## Features

- **3D floor rendering** with Three.js (SVG-derived floor geometry, extruded markers, CSS2D labels).
- **Pathfinding** to a selected parking spot, animated route line.
- **Cross-floor lift transition** between the starting level and the parking level.
- **Demo shell** to switch start level (`L4` / `L5`), parking level (`B3` / `B4`) and spot.
- **Desktop / kiosk and mobile** render modes.
- **i18n** (English / Chinese) via `vue-i18n`.

## Tech

Vue 3 (Options API + `defineComponent`), TypeScript, Vue Router (hash mode),
Pinia, Three.js, `troika-three-text`, vue-cli (webpack 5).

## Develop

```bash
npm install
npm run serve      # dev server
npm run build      # production build → dist/
npm run typecheck  # optional: vue-tsc --noEmit
```

## Deploy

Pushing to `main` builds and publishes to **GitHub Pages** via
`.github/workflows/deploy.yml`. `publicPath` is relative and the router uses
hash history, so it works under a project subpath without extra config.

## Project layout

```
src/
  classes/       # Three.js engine: Floor, Camera, PathFinding, Animation
  components/    # PathScene.vue — the 3D scene component
  views/         # ViewDemo.vue — the demo shell (selectors + scene)
  data/floors/   # sample floor geometry & parking-spot data
  helpers.ts     # geometry helpers (rounded rects, lift icon loader)
```
