# Kuroi Kyu: The Website

Just a place to hold my thoughts and share them with the world wide web.

![OG image for the site](/public/kuroikyu-og.png)

## Uses

- Next.js
- TailwindCSS
- Remark (markdown)
- pnpm

## Requirements

- Node.js 24 or newer
- pnpm 12.21.0 (`npm install --global pnpm@12.21.0`)

## How to run

```sh
# Install dependencies
$ pnpm install

# Start a localhost server, by default uses port 3000
$ pnpm dev

# Build the project and start it right away
$ pnpm build && pnpm start
```

## Checks

```sh
pnpm lint
pnpm type-check
pnpm build
pnpm format:check
```

TypeScript stays on 6.0 because the Next.js ESLint tooling requires TypeScript below 6.1.
ESLint stays on 9 because its React plugin does not yet support ESLint 10.
