import AssetLoader, { GltfLoader, ImageLoader } from '../lib/AssetLoader';

import assets from './assets';

AssetLoader.addLoader('gltf', GltfLoader, { decoderPath: '/draco/' });
AssetLoader.addLoader('image', ImageLoader);

const assetLoader = new AssetLoader();
assetLoader.logger.listen((log) => {
    console.log('🚚' + log);
});

const file = {
    name: 'player',
    path: './player.gltf',
    type: 'gltf',
};

assetLoader.load(file);

assetLoader.loadList(assets).then(() => {
    const asset = assetLoader.getAsset('image');
    const image = assetLoader.get('image');
    console.log(asset, image);
});