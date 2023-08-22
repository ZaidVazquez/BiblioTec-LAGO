"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrestamosController_1 = require("../controllers/PrestamosController");
class PrestamosRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', PrestamosController_1.prestamosController.getPrestamos);
        //Consultar un registro
        this.router.get('/:id', PrestamosController_1.prestamosController.getByIdPrestamo);
        //Insertar un registro
        this.router.post('/', PrestamosController_1.prestamosController.createPrestamo);
        //Actualizar un registro
        this.router.put('/:id', PrestamosController_1.prestamosController.updatePrestamo);
        //Eliminar un registro
        this.router.delete('/:id', PrestamosController_1.prestamosController.deletePrestamo);
    }
}
const prestamosRouters = new PrestamosRouters();
exports.default = prestamosRouters.router;
