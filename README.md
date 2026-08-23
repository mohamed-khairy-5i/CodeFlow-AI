# CodeFlow AI

An Arabic, right-to-left landing page for a fictional AI-guided service helping founders and small businesses turn product ideas into useful digital tools. The website is built as a static React and Vite project with an intentionally lightweight, no-backend architecture.

## Local development

The project uses the package manager pinned in `package.json`.

```bash
pnpm install
pnpm dev
```

Open the local address printed by Vite, normally `http://localhost:3000`.

## Quality commands

```bash
pnpm check
pnpm build
```

The build command generates the deployable static files in `dist/public`. For environments that use npm, the equivalent command is `npm run build` after installing dependencies with npm.

## Netlify deployment

`netlify.toml` is included for deployment. On Netlify, use the following values if the configuration is entered manually:

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Node version | `22` |

Connect the repository, leave the included configuration intact, and trigger a deploy. This is a static site; no environment variables, API keys, or backend services are required.

## Project structure

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Arabic RTL landing-page content and semantic sections. |
| `client/src/index.css` | Responsive visual system, motion, high-contrast states, and mobile layouts. |
| `client/index.html` | Arabic document settings, SEO metadata, Open Graph tags, and favicon reference. |
| `client/public/favicon.svg` | Lightweight CodeFlow-inspired favicon. |
| `netlify.toml` | Netlify build, publish, and response-header configuration. |
| `ideas.md` | Chosen visual direction and brand system. |

## Notes

The landing page includes compressed WebP visual assets in `client/public/assets/` for the hero, dashboard showcase, supporting texture, and brand symbol. These are emitted directly in `dist/public/assets/`, so they load correctly from static hosts such as Netlify without relying on development-only storage routes. There are no stock photos, third-party app logos, secrets, or runtime API requests in the source.
