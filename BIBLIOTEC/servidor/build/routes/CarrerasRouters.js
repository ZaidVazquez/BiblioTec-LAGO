"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarrerasController_1 = require("../controllers/CarrerasController");
class CarrerasRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', CarrerasController_1.carerrasController.getCarrera);
        //Consultar un registro
        this.router.get('/:id', CarrerasController_1.carerrasController.getByIdCarrera);
        //Insertar un registro
        this.router.post('/', CarrerasController_1.carerrasController.createCarrera);
        //Actualizar un registro
        this.router.put('/:id', CarrerasController_1.carerrasController.updateCarrera);
        //Eliminar un registro
        this.router.delete('/:id', CarrerasController_1.carerrasController.deleteCarrera);
    }
}
const carrerasRouters = new CarrerasRouters();
exports.default = carrerasRouters.router;
