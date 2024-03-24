import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Loader } from './Loader';

export default class GltfLoader implements Loader {
    private loader = new GLTFLoader();

    public load(path: string) {
        return new Promise((resolve) => {
            this.loader.load(path, gltf => {
                resolve(gltf);
            });
        });
    }
}