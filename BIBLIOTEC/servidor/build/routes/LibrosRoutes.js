"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibrosController_1 = require("../controllers/LibrosController");
class LibrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', LibrosController_1.librosController.getLibros);
        //Consultar un registro
        this.router.get('/:id', LibrosController_1.librosController.getByIdLibro);
        //Insertar un registro
        this.router.post('/', LibrosController_1.librosController.createLibro);
        //Actualizar un registro
        this.router.put('/:id', LibrosController_1.librosController.updateLibro);
        //Eliminar un registro
        this.router.delete('/:id', LibrosController_1.librosController.deleteLibro);
    }
}
const librosRoutes = new LibrosRoutes();
exports.default = librosRoutes.router;
