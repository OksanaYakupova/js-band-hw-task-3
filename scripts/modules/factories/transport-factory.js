import Truck from "../models/truck.js";
import Ship from "../models/ship.js";

class TransportFactory {
    constructor() {
    }

    createTruck (model, licensePlate, producedYear, capacity, averageSpeed, typeOfGas) {
        return new Truck(model, licensePlate, producedYear, capacity, averageSpeed, typeOfGas);
    }

    createShip (model, name, producedYear, capacity, averageSpeed, countOfTeam) {
        return new Ship(model, name, producedYear, capacity, averageSpeed, countOfTeam);
    }

}

const transportFactory = new TransportFactory();
Object.freeze(transportFactory);

export default transportFactory;