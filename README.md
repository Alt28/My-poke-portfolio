# Clarence.DEX

An interactive Pokédex-inspired portfolio for Clarence Bayna. It combines a clean portfolio structure with game-style navigation, animated project entries, and a turn-based Pokémon battle.

## Features

- Pokédex-inspired responsive interface
- Home, trainer profile, project archive, and contact pages
- Game-style field menu and quest navigation
- Filterable project entries with animated detail overlays
- Turn-based Charizard vs. Gengar battle
- Mega Charizard X and Mega Gengar transformations
- Animated attacks, HP systems, enemy turns, healing, and rematches
- Local Pokémon sprite assets for reliable deployment
- Vercel-compatible SPA routing

## Technology

- React 19
- Vite
- React Router
- Framer Motion
- GSAP
- Howler.js
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Validation

```bash
npm run lint
npm run build
```

## Deploying to Vercel

Import this repository into Vercel. The project uses:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` sends client-side routes such as `/about`, `/projects`, and `/contact` to the React application.

## Project structure

```text
src/
  components/   Reusable interface and battle components
  pages/        Portfolio routes
  utils/        Sound management
public/
  pokemon/      Local animated battle sprites
```

Pokémon names and imagery belong to their respective owners. Battle sprites are sourced from the PokéAPI sprite repository.
