"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EditorialesController_1 = require("../controllers/EditorialesController");
class EditorialesRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', EditorialesController_1.editorialesController.getEditorial);
        //Consultar un registro
        this.router.get('/:id', EditorialesController_1.editorialesController.getByIdEditorial);
        //Insertar un registro
        this.router.post('/', EditorialesController_1.editorialesController.createEditorial);
        //Actualizar un registro
        this.router.put('/:id', EditorialesController_1.editorialesController.updateEditorial);
        //Eliminar un registro
        this.router.delete('/:id', EditorialesController_1.editorialesController.deleteeditorial);
    }
}
const editorialesRouters = new EditorialesRouters();
exports.default = editorialesRouters.router;
