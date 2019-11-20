import Data from "./modules/models/data.js";
import ShipRenderer from "./modules/renderers/ship-renderer.js";
import TruckRenderer from "./modules/renderers/truck-renderer.js";
import Cost from "./modules/models/cost.js";
import CostRenderer from "./modules/renderers/cost-renderer.js";
import transportFactory from "./modules/factories/transport-factory.js";


function addShip(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const ship = transportFactory.createShip(
        formData.get('model'),
        formData.get('name'),
        formData.get('producedYear'),
        formData.get('capacity'),
        formData.get('averageSpeed'),
        formData.get('countOfTeam'),
    );
    data.shipList.push(ship);
    data.save();
    new ShipRenderer(ship).render();
    clearShipForm();
}

function addTruck(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const truck = transportFactory.createTruck(
        formData.get('model'),
        formData.get('licensePlate'),
        formData.get('producedYear'),
        formData.get('capacity'),
        formData.get('averageSpeed'),
        formData.get('typeOfGas'),
    );
    data.truckList.push(truck);
    data.save();
    new TruckRenderer(truck).render();
    clearTruckForm();
}

function addCost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const cost = new Cost(
        formData.get('model'),
        formData.get('cargoCost'),
        formData.get('distanceCost'),
    );
    data.costList.push(cost);
    data.save();
    new CostRenderer(cost).render();
    clearCostForm();
}

function renderShipList() {
    data.shipList.forEach((ship) => {
        new ShipRenderer(ship).render();
    });
}

function renderTruckList() {
    data.truckList.forEach((truck) => {
        new TruckRenderer(truck).render();
    });
}

function renderCostList() {
    data.costList.forEach((cost) => {
        new CostRenderer(cost).render();
    });
}

function clearFormInputs(form) {
    form.querySelectorAll("input").forEach((input) => {
        input.value = ""
    });
}

function clearShipForm() {
    clearFormInputs(document.querySelector(".js-add-ship-form"));
}


function clearTruckForm() {
    clearFormInputs(document.querySelector(".js-add-truck-form"));
}

function clearCostForm() {
    clearFormInputs(document.querySelector(".js-add-cost-form"));
}

const data = new Data();
data.restore();

renderShipList();
renderTruckList();
renderCostList();

document.querySelector(".js-add-ship-form").addEventListener("submit", addShip);
document.querySelector(".js-clear-ship-form").addEventListener("click", clearShipForm);

document.querySelector(".js-add-truck-form").addEventListener("submit", addTruck);
document.querySelector(".js-clear-truck-form").addEventListener("click", clearTruckForm);

document.querySelector(".js-add-cost-form").addEventListener("submit", addCost);
document.querySelector(".js-clear-cost-form").addEventListener("click", clearCostForm);