export default class ItemRenderer {
    constructor() {
    }

    render() {
    }

    getLi(name, value) {
        const li = document.createElement('li');
        li.className = "list-element";
        const label = document.createElement('label');
        label.className = "input-title";
        const code = document.createElement('code');
        code.innerText = name + ":";
        label.appendChild(code);
        li.appendChild(label);
        li.append(value);

        return li;
    }
}