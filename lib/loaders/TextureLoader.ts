import { TextureLoader as ThreeTextureLoader } from 'three';
import { Loader } from './Loader';

export default class TextureLoader implements Loader {
    private loader = new ThreeTextureLoader();

    public load(path: string) {
        return new Promise((resolve) => {
            this.loader.load(path, texture => {
                resolve(texture);
            });
        });
    }
}