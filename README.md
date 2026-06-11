# Wonderland XR

A WebXR experience exploring anxiety through Alice in Wonderland metaphor. Built for desktop browser and standalone VR.

**Live demo:** [wonderland-xr.vercel.app](https://wonderland-xr.vercel.app)

## Concept

How might we help people become aware of their anxiety by learning to look at it instead of running from it?

Wonderland's absurd logic becomes a metaphor for how anxiety distorts reality. The user descends through a garden into a small room where four objects each represent a face of anxiety; time, identity, control, choice. Interaction is not solving, but recognition. The exit appears only after all four have been seen.

## How it works

1. **Garden** — entry scene with intro text and rabbit hole
2. **Rabbit hole** — transition with animation and ambient sound
3. **Room** — four interactive objects (mirror, clock, potion, cake), each responding with anxiety statements
4. **Exit** — appears after all four interactions, returning to garden

## Tech stack

- A-Frame 1.5.0
- Three.js
- aframe-extras (animation mixer)
- aframe-look-at-component
- Vite (multi-page build)
- Cloudinary (CDN for 3D assets and audio)
- Vercel (hosting)

## Project structure

```
public/
  assets/         (excluded from repo, hosted on Cloudinary)
js/
  forest.js       (garden interactions)
  interactions.js (room interactions)
index.html        (garden)
rabbithole.html   (transition)
room.html         (interaction space)
```

## Local development

```bash
npm install
npm run dev
```

## Team

- **Irem Stalbrand**
- **Eylul Balcilar**
- **Simmar Ommar**

## User testing

Three user tests across development. Key iterations from feedback:

- Added glow indicators around interactive objects (affordance)
- Added info frame and exit door (completion state)
- Replaced low-quality garden assets via meshy.ai (atmosphere)
- Added intro text in garden (onboarding)

## License

Student project — Hyper Island FED27 — Exploring Code & Immersive Experiences , June 2026
