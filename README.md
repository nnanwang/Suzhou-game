# Suzhou-game

## Chapter

### Chapter 1


## Developer Blog

### Sep 11 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).




## Run locally

Use Node.js 22.12 or later. From this project folder:

```sh
npm ci
npm run dev
```

Run `npm run build` to check the production build and `npm run lint` to check the code.

The current game includes the home screen, chapter hub, water report, canal visit, two multi-line interviews, and policy selection and confirmation. Meters remain display-only; confirming a policy records it only during the current chapter visit.

Key files: `src/components/ChapterOne.jsx` controls story screens, `DialogueCard.jsx` advances dialogue, `PolicyDecision.jsx` displays policy choices, and `src/data/chapter1.js` stores story content.
