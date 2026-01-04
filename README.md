# GutGrub App

This repository contains the GutGrub frontend and minimal server pieces used by the GutGrub demo app. It is a Vite + React (TypeScript) single-page application with a small Express-based server that can run as a local server or be wrapped as a serverless Netlify function.

The README below describes the project architecture, how to run and build the app, the main routes and pages, and a brief developer guide.

## Table of contents

- Project overview
- Tech stack
- Project layout
- Development (run locally)
- Build and production
- Routes / pages
- Server & Netlify function
- Key components & utilities
- Tests
- Notes & next steps

## Project overview

GutGrub is a recipe / meal-planning demo app focusing on simple UX flows: onboarding, discovery, planning, and recipe detail screens. The repository contains:

- A React + TypeScript client app in `client/` (Vite).
- A small Express server in `server/` with example routes and a Netlify serverless wrapper in `netlify/functions/api.ts`.
- Shared types/helpers in `shared/`.

The UI uses Tailwind CSS for styling and a set of small UI components under `client/components/ui/`.

## Tech stack

- React 18 (TypeScript)
- Vite (dev server + build)
- Tailwind CSS
- Express (server)
- Netlify serverless wrapper via `serverless-http`
- React Router v6 for client routing
- @tanstack/react-query for data fetching state

## Project layout

- `client/` - React application and pages
	- `App.tsx` - application entry that wires react-query, routing and providers
	- `global.css` - global Tailwind/utility CSS
	- `pages/` - main page routes (Index, Register, Login, Discover, Plan, Explore, CinnamonRolls, NotFound)
	- `components/ui/` - many small UI building blocks (buttons, inputs, toasts, dialogs, etc.)
	- `hooks/` - small client hooks (e.g., `use-toast`, `use-mobile`)
	- `lib/` - client utilities and tests

- `server/` - express server and build helper
	- `index.ts` - exports `createServer()` which sets up middleware and example routes
	- `routes/demo.ts` - demo API handler used by `/api/demo`

- `netlify/functions/api.ts` - Netlify serverless handler that wraps the Express app
- `shared/` - shared types (used by client and server)
- Top-level `package.json` - scripts and dependencies for the full repo (Vite + server builds)

## Development (run locally)

Prerequisites: Node 18+ and the package manager configured in `packageManager` (pnpm is listed; npm/yarn also work but the lockfile may differ).

1. Install dependencies (pnpm recommended):

```powershell
pnpm install
```

2. Start the client in dev mode (from `gutgrub-app`):

```powershell
pnpm dev
```

This runs the Vite dev server and serves the React app. The app entry is `client/App.tsx` which mounts into `index.html`.

3. Running the server locally

The repo includes a small Express server. To run it in development you can build and run the server or run it via ts-node/tsx if you prefer. The provided npm scripts expect a build step before `start`.

For local API testing during development the frontend pages make example requests to `http://localhost:4000` (see login/register pages). To run the server locally during development one approach:

```powershell
# from repo root
pnpm build:server
node dist/server/node-build.mjs
```

Alternatively, run the server code directly with a TypeScript runner (not included in scripts):

```powershell
# example using tsx (if installed globally or as a devDependency)
tsx server/index.ts
```

Notes: The server includes a sample `GET /api/ping` and `GET /api/demo` route. The Netlify function wraps the same server for serverless deployments.

## Build and production

The repository has scripts set up in `package.json`:

- `pnpm build` - builds both the client and server bundles (client with Vite and server with the server-side Vite config);
- `pnpm build:client` - builds the SPA to `dist/spa` (default Vite output);
- `pnpm build:server` - builds the server bundle expected to run in Node or be wrapped by serverless.
- `pnpm start` - runs the compiled server artifact (`node dist/server/node-build.mjs`).

Deployment notes:

- The project contains a `netlify/functions/api.ts` handler that uses `serverless-http` to convert the Express app to a Netlify function handler. Deploying this repo to Netlify with functions enabled will expose the same API routes under the function endpoint.

## Routes / pages

Client routes (in `client/App.tsx`):

- `/` - Landing page (`client/pages/Index.tsx`) with navigation to register/login
- `/register` - Registration form (`client/pages/Register.tsx`) — posts to an example endpoint
- `/login` - Login form (`client/pages/Login.tsx`) — posts to an example endpoint
- `/discover` - Intro / discovery flow (`client/pages/Discover.tsx`)
- `/plan` - Simple planning screen (`client/pages/Plan.tsx`)
- `/explore` - Main explore feed with categories and cards (`client/pages/Explore.tsx`)
- `/cinnamonrolls` - Example recipe detail screen (`client/pages/CinnamonRolls.tsx`)
- `*` - 404 (`client/pages/NotFound.tsx`)

Server routes (Express in `server/index.ts`):

- `GET /api/ping` - returns a JSON ping message. Uses `process.env.PING_MESSAGE` if present.
- `GET /api/demo` - handled by `server/routes/demo.ts` (example handler)

The client pages contain example axios requests to `http://localhost:4000/register` and `http://localhost:4000/login-email` which are not implemented in the sample server — they illustrate intended integration points.

## Server & Netlify function

- `server/index.ts` exports `createServer()` which configures Express middleware (cors, json, urlencoded) and mounts example routes.
- `netlify/functions/api.ts` wraps `createServer()` with `serverless-http` and exports `handler` so the same Express app runs as a Netlify function.

This allows running the app in either a Node server or as serverless functions with minimal changes.

## Key components & utilities

- `client/components/ui/` contains many small UI primitives (Button, Input, Dialog, Toast, etc.). These are intended for re-use across pages.
- `client/hooks/use-toast.ts` and `client/components/ui/toaster.tsx` implement user notifications.
- `client/lib/utils.ts` exposes a `cn()` helper (clsx + tailwind-merge) used to merge and dedupe Tailwind class strings.
- `shared/api.ts` contains shared types (e.g., `DemoResponse`) to share between client and server.

## Tests

- The repo has a small test file `client/lib/utils.spec.ts`. Unit tests run with `vitest` and the script `pnpm test` is configured.

## Notes & next steps

- The client contains example axios calls to local endpoints that are not implemented by the demo server. If you plan to wire authentication or persistence, implement the corresponding server endpoints (e.g., `POST /register`, `POST /login-email`) or adapt the client to use a mocked API during development.
- The project includes many UI primitives ready for reuse; if you extract a design system or component library, consider documenting the API for those components.
- Environment variables: the server reads `PING_MESSAGE` for `GET /api/ping`.

## Where to look next (quick pointers)

- App entry: `client/App.tsx`
- Landing page: `client/pages/Index.tsx`
- Server entry: `server/index.ts`
- Netlify wrapper: `netlify/functions/api.ts`
- UI components: `client/components/ui/`
- Shared types: `shared/api.ts`
