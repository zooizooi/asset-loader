import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

export default [
    {
        input: 'lib/AssetLoader.ts',
        output: [
            {
                name: 'AssetLoader',
                file: 'dist/AssetLoader.js',
                format: 'es',
            },
        ],
        external: ['three'],
        plugins: [typescript()],
    },
    {
        input: 'lib/AssetLoader.ts',
        output: [{
            file: 'dist/AssetLoader.d.ts',
            format: 'es',
        }],
        plugins: [dts()],
    },
];