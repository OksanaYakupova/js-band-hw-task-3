import Transport from "./transport.js";

export default class Ship extends Transport {
    constructor(model, name, producedYear, capacity, averageSpeed, countOfTeam) {
        super(model, producedYear, capacity, averageSpeed);
        this.name = name;
        this.countOfTeam = countOfTeam;
    }

    showAverageSpeed() {
        return this.averageSpeed + "nm";
    }
}
