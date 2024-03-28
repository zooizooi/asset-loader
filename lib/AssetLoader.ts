import FileLoader from './FileLoader';
import ListLoader from './ListLoader';
import Logger from './Logger';

import GltfLoader from './loaders/GltfLoader';
import ImageLoader from './loaders/ImageLoader';
import TextureLoader from './loaders/TextureLoader';

export const STATUS_NOT_LOADED = 'NOT_LOADED';
export const STATUS_LOADING = 'LOADING';
export const STATUS_LOADED = 'LOADED';

type Loader = new () => any;

export const loaders: { [type: string]: Loader } = {};

export interface Asset {
    name: string,
    path: string
    type: string
    status?: typeof STATUS_NOT_LOADED | typeof STATUS_LOADING | typeof STATUS_LOADED
    data?: unknown
}

export default class AssetLoader {
    public lists: ListLoader[] = [];
    public assets: Map<string, Asset> = new Map();
    public logger = Logger;

    public static addLoader(type: string, loader: Loader) {
        loaders[type] = loader;
        return loaders;
    }

    public loadList(assets: Asset[]) {
        const list = new ListLoader(assets);
        this.lists.push(list);
        return new Promise((resolve) => {
            list.load().then((assets: Asset[]) => {
                assets.forEach(asset => this.addAsset(asset));
                resolve(assets);
            });
        });
    }

    public load(asset: Asset) {
        const fileLoader = new FileLoader();
        const copy = Object.assign({}, asset);
        return new Promise((resolve) => {
            fileLoader.load(copy).then((asset: Asset) => {
                this.addAsset(asset);
                resolve(asset);
            });
        });
    }

    public get(name: string) {
        return this.assets.get(name);
    }

    private addAsset(asset: Asset) {
        if (this.assets.has(asset.name)) {
            console.warn(`Asset with name '${asset.name}' already exists, it will overwrite the previous value. `);
        }
        this.assets.set(asset.name, asset);
    }
}

export { GltfLoader, ImageLoader, TextureLoader };