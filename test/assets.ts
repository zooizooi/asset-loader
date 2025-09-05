import { Asset } from '../lib/AssetLoader';

const models: Asset[] = [
    {
        name: 'player2',
        path: './player.gltf',
        type: 'gltf',
    },
    {
        name: 'human',
        path: './human.glb',
        type: 'gltf',
    },
];

const textures: Asset[] = [
    {
        name: 'image',
        path: './texture.png',
        type: 'image',
    },
];

const json: Asset[] = [
    {
        name: 'json',
        path: './test-data.json',
        type: 'json',
    },
];

const audio: Asset[] = [
];

const assets = [
    ...models,
    ...textures,
    ...json,
    ...audio,
];

export default assets;