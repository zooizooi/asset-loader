import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class GltfLoader {
    private loader = new GLTFLoader();

    public load(path: string) {
        return new Promise((resolve) => {
            this.loader.load(path, gltf => {
                resolve(gltf);
            });
        });
    }
}