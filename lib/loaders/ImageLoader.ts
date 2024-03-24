import { Loader } from './Loader';

export default class ImageLoader implements Loader {
    public load(path: string) {
        const image = new Image();
        return new Promise((resolve) => {
            image.src = path;
            image.onload = resolve;
        });
    }
}