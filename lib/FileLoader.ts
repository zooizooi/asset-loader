import { Asset, STATUS_LOADED, STATUS_LOADING, STATUS_NOT_LOADED, loaders } from './AssetLoader';
import Logger from './Logger';

export default class FileLoader {
    public load(asset: Asset) {
        asset.status = STATUS_NOT_LOADED;
        return new Promise((resolve: (asset: Asset) => void, reject) => {
            const loader = loaders[asset.type];
            if (loader) {
                const instance = new loader();
                asset.status = STATUS_LOADING;
                Logger.add('Loading: ' + asset.name);
                instance.load(asset.path).then((data: unknown) => {
                    asset.data = data;
                    asset.status = STATUS_LOADED;
                    Logger.add('Loaded: ' + asset.name);
                    resolve(asset);
                });
            } else {
                reject(`Loader not found for type: '${asset.type}'`);
            }
        });
    }
}