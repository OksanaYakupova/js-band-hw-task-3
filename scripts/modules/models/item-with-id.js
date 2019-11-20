export default class ItemWithId {
    id;

    constructor() {
        this.setRandomId();
    }

    setRandomId() {
        function randomString(length) {
            let result = '';
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        this.id = randomString(5) + "-" + randomString(5) + "-" + randomString(5);
    }

}