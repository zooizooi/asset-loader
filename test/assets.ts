import { Asset } from './asset-loader/AssetLoader';

const models: Asset[] = [
    {
        name: 'player2',
        path: './player.gltf',
        type: 'gltf'
    },
];

const textures: Asset[] = [
    {
        name: 'texture',
        path: './texture.png',
        type: 'image'
    },
];

const audio: Asset[] = [
];

const assets = [
    ...models,
    ...textures,
    ...audio
];

export default assets;