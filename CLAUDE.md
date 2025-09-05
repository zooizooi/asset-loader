# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript asset loader library. The library provides a flexible system for loading and managing various types of assets (GLTF models, images, textures) with built-in logging and status tracking.

## Development Commands

- `npm run dev` - Start Vite development server
- `npm run build` - Build the library using Rollup

## Architecture

### Core Components

- **AssetLoader** (`lib/AssetLoader.ts`): Main entry point and orchestrator
  - Manages asset registry via `Map<string, Asset>`
  - Provides static `addLoader()` method for registering new loader types
  - Exports built-in loaders: `GltfLoader`, `ImageLoader`, `TextureLoader`

- **FileLoader** (`lib/FileLoader.ts`): Handles individual asset loading
  - Uses the loader registry to instantiate appropriate loaders
  - Manages asset status transitions: `NOT_LOADED` → `LOADING` → `LOADED`

- **ListLoader** (`lib/ListLoader.ts`): Batch loading functionality
  - Processes arrays of assets concurrently

- **Logger** (`lib/Logger.ts`): Event logging system
  - Tracks loading states with listener pattern

### Loader System

The library uses a plugin-based loader architecture:

1. Loaders must implement the `Loader` interface (`lib/loaders/Loader.ts`)
2. Register loaders via `AssetLoader.addLoader(type, LoaderClass, properties)`
3. Built-in loaders are in `lib/loaders/` directory

### Asset Interface

```typescript
interface Asset {
    name: string,
    path: string,
    type: string,
    status?: 'NOT_LOADED' | 'LOADING' | 'LOADED',
    data?: unknown
}
```

## Build Configuration

- **Entry Point**: `lib/AssetLoader.ts`
- **Output**: ES modules in `dist/` directory
- **External Dependencies**: Three.js (peer dependency)
- **TypeScript Config**: Modern ES2020 target with strict mode enabled

The build process creates both JavaScript (`dist/AssetLoader.js`) and TypeScript declarations (`dist/AssetLoader.d.ts`) using Rollup with TypeScript and DTS plugins.