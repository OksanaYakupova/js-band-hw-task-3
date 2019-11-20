import ItemRenderer from "./item-renderer.js";

export default class TruckRenderer extends ItemRenderer {
    constructor(truck) {
        super();
        this.truck = truck;
    }

    render() {
        const element = document.createElement('ul');
        element.className = "list";

        element.appendChild(this.getLi("Model", this.truck.model));
        element.appendChild(this.getLi("License plate", this.truck.licensePlate));
        element.appendChild(this.getLi("Produced year", this.truck.producedYear));
        element.appendChild(this.getLi("Capacity (in pounds)", this.truck.showCapacityInPounds().toFixed(2)));
        element.appendChild(this.getLi("Average speed (in km)", this.truck.showAverageSpeed()));
        element.appendChild(this.getLi("Type of gas", this.truck.typeOfGas));

        const truckListView = document.querySelector(".js-add-truck-form");
        truckListView.append(element);

        return element;
    }
}