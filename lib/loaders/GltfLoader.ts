import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Loader } from './Loader';
import { DRACOLoader } from 'three/examples/jsm/Addons.js';
import { LoaderProperties } from '../AssetLoader';

export default class GltfLoader implements Loader {
    public static decoderPath = '';

    private loader = new GLTFLoader();
    private dracoLoader = new DRACOLoader();

    constructor(properties: LoaderProperties) {
        this.dracoLoader.setDecoderPath(properties?.decoderPath);
        this.loader.setDRACOLoader(this.dracoLoader);
    }

    public load(path: string) {
        return new Promise((resolve) => {
            this.loader.load(path, gltf => {
                resolve(gltf);
            });
        });
    }
}