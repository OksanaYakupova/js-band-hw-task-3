class LocalStorageService {
    _prefix = 'JS-Band-';

    constructor() {
    }

    set(key, value) {
        localStorage.setItem(this._prefix + key, value);
    }

    get(key) {
        return localStorage.getItem(this._prefix + key);
    }
}

const localStorageService = new LocalStorageService();
Object.freeze(localStorageService);

export default localStorageService;