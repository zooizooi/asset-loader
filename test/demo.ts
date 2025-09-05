import AssetLoader, { GltfLoader, ImageLoader, JsonLoader } from '../lib/AssetLoader';

import assets from './assets';

AssetLoader.addLoader('gltf', GltfLoader, { decoderPath: '/draco/' });
AssetLoader.addLoader('image', ImageLoader);
AssetLoader.addLoader('json', JsonLoader);

const assetLoader = new AssetLoader();
assetLoader.logger.listen((log) => {
    console.log('🚚', log);
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

    const json = assetLoader.get('json');
    console.log(json);
});