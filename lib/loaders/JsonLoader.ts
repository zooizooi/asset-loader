import { Loader } from './Loader';

export default class JsonLoader implements Loader {
    public load(path: string) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load JSON: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
}