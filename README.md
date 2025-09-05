# AssetLoader
`@zooizooi`'s Asset loader

### Install
```bash
ni @zooizooi/asset-loader
```
### Import
```js
import AssetLoader, { GltfLoader } from '@zooizooi/asset-loader';
```

### Available Loader Types

#### GLTF Loader
```js
AssetLoader.addLoader('gltf', GltfLoader, { decoderPath: '/draco/' });
```

#### Image Loader
```js
AssetLoader.addLoader('image', ImageLoader);
```

#### Texture Loader
```js
AssetLoader.addLoader('texture', TextureLoader);
```

#### JSON Loader
```js
AssetLoader.addLoader('json', JsonLoader);
```

### Initialize
```js
const assetLoader = new AssetLoader();
```



#### Load file
```js
assetLoader.load({
    name: 'player',
    path: './player.gltf',
    type: 'gltf',
});
```

#### Load list
```js
const assets = [
    {
        name: 'player',
        path: './player.gltf',
        type: 'gltf',
    },
];

assetLoader.loadList(assets).then(() => {
    console.log('List loaded!');
});
```

#### Logger
```js
assetLoader.logger.listen((log) => {
    console.log('🚚' + log);
});
```