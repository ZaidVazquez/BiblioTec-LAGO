"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MultasController_1 = require("../controllers/MultasController");
class MultasRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar Multas
        this.router.get('/', MultasController_1.multasController.getMultas);
        //Consultar una multa
        this.router.get('/:id', MultasController_1.multasController.getByIdMulta);
        //Insertar una multa
        this.router.post('/', MultasController_1.multasController.createMulta);
        //Actualizar una multa
        this.router.put('/:id', MultasController_1.multasController.updateMulta);
        //Eliminar una multa
        this.router.delete('/:id', MultasController_1.multasController.deleteMulta);
    }
}
const multasRouters = new MultasRouters();
exports.default = multasRouters.router;
