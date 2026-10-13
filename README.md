# Praveen M — AI & Data Science Portfolio

A resume-backed single-page portfolio built with React, TypeScript, TanStack Start and Tailwind CSS v4. No database, API keys or backend services are needed for the portfolio's interactions.

## Development

```sh
bun install
bun run dev
```

The development server reports its URL in the terminal (the Lovable workspace uses port 8080).

## Validation

```sh
bun run test
```

Resume data lives in `src/data/portfolio.ts`. Theme tokens and responsive material treatments live in `src/styles.css`. Presentation is divided into focused components in `src/components/portfolio`.

## Production

```sh
bun run build
```

The existing Lovable configuration uses TanStack Start with Nitro's Cloudflare target. Publish through the Lovable editor for the supported deployment path. For independent hosting, use the Cloudflare-compatible server and public asset artifacts emitted by this configuration; inspect the build's reported output paths rather than assuming a plain Vite `dist` folder.

Firebase Hosting alone is not a drop-in target for this existing SSR configuration: uploading only public assets will not serve the initial page. A Firebase static deployment would first require an intentionally configured prerender/static-export build and verification of its HTML output. No Firebase settings have been created or overwritten.

## Interaction checks

- Light is the initial theme; the toggle stores the selection locally when storage is available.
- Section navigation uses in-page anchors; mobile navigation closes after selection.
- Both project detail dialogs are keyboard-operable, close with Escape and restore focus.
- Email and phone use `mailto:` and `tel:`; social links use the documented resume URLs.
- Copy email uses the clipboard with visible success/failure feedback.
- Pointer tilt and scroll reveal respect reduced-motion preferences.
- Generated AI artwork and project concept illustrations are not product screenshots or a personal portrait.
