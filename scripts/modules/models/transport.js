import ItemWithId from "./item-with-id.js";

export default class Transport extends ItemWithId {

    constructor(model, producedYear, capacity, averageSpeed) {
        super();
        this.model = model;
        this.producedYear = producedYear;
        this.capacity = capacity;
        this.averageSpeed = averageSpeed;
    }

    showAverageSpeed() {
        return this.averageSpeed;
    }

    showCapacityInPounds() {
        return this.capacity * 2.20462262;
    }

}