import AssetLoader from '../lib/AssetLoader';
import GltfLoader from '../lib/loaders/GltfLoader';
import ImageLoader from '../lib/loaders/ImageLoader';

import assets from './assets';

AssetLoader.addLoader('gltf', GltfLoader);
AssetLoader.addLoader('image', ImageLoader);

const assetLoader = new AssetLoader();
assetLoader.logger.listen((log) => {
    console.log('🚚' + log);
});

const file = {
    name: 'player',
    path: './player.gltf',
    type: 'gltf'
};

assetLoader.load(file);

assetLoader.loadList(assets).then((list) => {
    // console.log('list loaded', list);
    console.log(assetLoader.assets);
});