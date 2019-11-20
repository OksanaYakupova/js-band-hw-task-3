import Transport from "./transport.js";

export default class Truck extends Transport {
    constructor(model, licensePlate, producedYear, capacity, averageSpeed, typeOfGas) {
        super(model, producedYear, capacity, averageSpeed);
        this.licensePlate = licensePlate;
        this.typeOfGas = typeOfGas;
    }

    showAverageSpeed() {
        return this.averageSpeed + "km";
    }
}