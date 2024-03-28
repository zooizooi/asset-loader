import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    publicDir: false,
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/AssetLoader.ts'),
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