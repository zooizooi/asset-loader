import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    publicDir: false,
    build: {
        lib: {
            entry: [
                resolve(__dirname, 'lib/AssetLoader.ts'),
                resolve(__dirname, 'lib/loaders/GltfLoader.ts'),
                resolve(__dirname, 'lib/loaders/ImageLoader.ts')
            ],
            name: 'AssetLoader',
            formats: ['es']
        },
        rollupOptions: {
            plugins: [
                dts({ rollupTypes: true }),
            ],
            external: ['three']
        },
    }
});