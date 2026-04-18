# elysia-monorepo

A full-stack TypeScript monorepo starter with shared types, using Bun, Elysia, Drizzle, React and better-auth

## Why elysia-monorepo?

While there are plenty of existing app building stacks out there, many of them are either bloated, outdated, or have too much of a vendor lock-in. elysia-monorepo is built with the opinion that you should be able to deploy your client or server in any environment while also keeping type safety.

## Features

- **Full-Stack TypeScript**: End-to-end type safety between client and server
- **Shared Types**: Common type definitions shared between client and server via Eden
- **Monorepo Structure**: Organized as a workspaces-based monorepo with Turbo for build orchestration
- **Modern Stack**:
  - [Bun](https://bun.sh) as the JavaScript runtime and package manager
  - [Elysia](https://elysiajs.com/) as the backend framework
  - [Vite](https://vitejs.dev) for frontend bundling
  - [React](https://react.dev) for the frontend UI
  - [Drizzle](https://orm.drizzle.team) for interacting with the database
  - [better-auth](https://better-auth.com/) for the auth provider
  - [Turbo](https://turbo.build) for monorepo build orchestration and caching

## Project Structure

```
.
├── client/               # React frontend
├── server/               # Elysia backend
├── shared/               # Shared Packages
├── package.json          # Root package.json with workspaces
└── turbo.json            # Turbo configuration for build orchestration
```

### Server

elysia-monorepo uses Elysia as a backend API for its simplicity and massive ecosystem of plugins. If you have ever used Express then it might feel familiar. Declaring routes and returning data is easy.

```
server
├── src
│   ├── database
│   ├── lib
│   └── index.ts
├── README.md
├── biome.json
├── package.json
└── tsconfig.json
```

### Client

elysia-monorepo uses Vite + React Typescript template, which means you can build your frontend just as you would with any other React app. This makes it flexible to add UI components like [shadcn/ui](https://ui.shadcn.com)

```
client
├── public
├── src
│   ├── assests
│   ├── components
│   ├── lib
│   ├── routes
│   ├── styles
│   ├── main.tsx
│   ├── routeTree.gen.ts
│   └── vite-env.d.ts
├── README.md
├── biome.json
├── components.json
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Shared

The Shared package is used for anything you want to share between the Server and Client.

## Getting Started

### Quick Start

You can start a new elysia-monorepo project by cloning this repository

```bash
git clone https://github.com/Raflord/elysia-monorepo
```

### Installation

```bash
# Install dependencies for all workspaces
bun install
```

### Development

```bash
# Run all workspaces in development mode with Turbo
bun run dev

# Or run individual workspaces directly
bun run dev:client    # Run the Vite dev server for React
bun run dev:server    # Run the Elysia backend
```

### Building

```bash
# Build all workspaces with Turbo
bun run build

# Or build individual workspaces directly
bun run build:client  # Build the React frontend
bun run build:server  # Build the Hono backend
```

### Additional Commands

```bash
# Format all workspaces
bun run format

# Lint all workspaces
bun run lint

# Type check all workspaces
bun run type-check

# Run tests across all workspaces
bun run test
```

## Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/learn)
- [Elysia Documentation](https://elysiajs.com/table-of-content.html)
- [Drizzle Documentation](https://orm.drizzle.team/docs/overview)
- [better-auth Documentation](https://better-auth.com/docs/introduction)
- [Turbo Documentation](https://turbo.build/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
