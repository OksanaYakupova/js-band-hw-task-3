import ItemRenderer from "./item-renderer.js";

export default class CostRenderer extends ItemRenderer {
    constructor(cost) {
        super();
        this.cost = cost;
    }

    render() {
        const element = document.createElement('ul');
        element.className = "list";

        element.appendChild(this.getLi("Transport Model", this.cost.model));
        element.appendChild(this.getLi("Cost (cargo)", this.cost.cargoCost));
        element.appendChild(this.getLi("Cost (distance)", this.cost.distanceCost));

        const costListView = document.querySelector(".js-add-cost-form");
        costListView.append(element);

        return element;
    }

}