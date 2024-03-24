export default class ImageLoader {
    public load(path: string) {
        const image = new Image();
        return new Promise((resolve) => {
            image.src = path;
            image.onload = resolve;
        });
    }
}