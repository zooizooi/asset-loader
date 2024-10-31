import { Asset } from './AssetLoader';
import FileLoader from './FileLoader';

export const STATUS_NOT_LOADED = 'NOT_LOADED';
export const STATUS_LOADING = 'LOADING';
export const STATUS_LOADED = 'LOADED';

const MAX_CONCURRENT = 1;

type Callback = (assets: Asset[]) => void;

export default class ListLoader {
    public assets: Asset[];

    private status: typeof STATUS_NOT_LOADED | typeof STATUS_LOADING | typeof STATUS_LOADED = STATUS_NOT_LOADED;
    private completeCallback?: Callback = undefined;

    constructor(assets: Asset[]) {
        this.assets = this.copyAssets(assets);
    }

    private copyAssets(assets: Asset[]) {
        const items: Asset[] = [];
        assets.forEach((asset) => {
            const copy = Object.assign({}, asset);
            copy.status = STATUS_NOT_LOADED;
            items.push(copy);
        });
        return items;
    }

    public load() {
        this.status = STATUS_LOADING;
        const promise = new Promise((resolve: Callback) => this.completeCallback = resolve);
        if (this.assets.length > 0) {
            const firstChunck = this.assets.slice(0, MAX_CONCURRENT);
            firstChunck.forEach((asset: Asset) => this.loadFile(asset));
        } else {
            if (this.completeCallback) this.completeCallback([]);
        }
        return promise;
    }

    private loadFile(asset: Asset) {
        const fileLoader = new FileLoader();
        fileLoader.load(asset).then(() => {
            this.checkStatus();
        });
    }

    private checkStatus() {
        const notLoadedCount = this.assets.filter(item => item.status === STATUS_NOT_LOADED).length;
        const loadingCount = this.assets.filter(item => item.status === STATUS_LOADING).length;

        if (notLoadedCount === 0) {
            this.status = STATUS_LOADED;
            if (this.completeCallback) this.completeCallback(this.assets);
        } else if (loadingCount < MAX_CONCURRENT) {
            const delta = MAX_CONCURRENT - loadingCount;
            const unloaded = this.assets.filter(item => item.status === STATUS_NOT_LOADED);
            const chunck = unloaded.slice(0, delta);
            chunck.forEach((asset: Asset) => this.loadFile(asset));
        }
    }
}