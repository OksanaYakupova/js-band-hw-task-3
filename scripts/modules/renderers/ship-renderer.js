import ItemRenderer from "./item-renderer.js";

export default class ShipRenderer extends ItemRenderer {
    constructor(ship) {
        super();
        this.ship = ship;
    }

    render() {
        const element = document.createElement('ul');
        element.className = "list";

        element.appendChild(this.getLi("Model", this.ship.model));
        element.appendChild(this.getLi("Serial number/Name", this.ship.name));
        element.appendChild(this.getLi("Produced year", this.ship.producedYear));
        element.appendChild(this.getLi("Capacity (in pounds)", this.ship.showCapacityInPounds().toFixed(2)));
        element.appendChild(this.getLi("Average speed (in nm)", this.ship.showAverageSpeed()));
        element.appendChild(this.getLi("Count of team", this.ship.countOfTeam));

        const shipListView = document.querySelector(".js-ship-list");
        shipListView.append(element);

        return element;
    }
}