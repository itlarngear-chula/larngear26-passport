# larngear26-passport

Passport application for Larngear 26. Built with Next.js, TypeScript, Tailwind CSS v4, pnpm.

## Setup

```sh
pnpm install
git config core.hooksPath .githooks   # one-time: enables the pre-commit hook
```

## Scripts

| Command             | Description             |
| ------------------- | ----------------------- |
| `pnpm dev`          | Start dev server        |
| `pnpm build`        | Production build        |
| `pnpm start`        | Start production server |
| `pnpm lint`         | ESLint                  |
| `pnpm format`       | Prettier write          |
| `pnpm format:check` | Prettier check          |
| `pnpm typecheck`    | TypeScript check        |

## Conventions

Mirrors [Larngear26-WebPromote](https://github.com/puz91/Larngear26-WebPromote) tooling: ESLint 9 flat config, Prettier with `prettier-plugin-tailwindcss`, strict TypeScript, Tailwind v4 CSS-first config, `@/*` path alias to `src/*`.
