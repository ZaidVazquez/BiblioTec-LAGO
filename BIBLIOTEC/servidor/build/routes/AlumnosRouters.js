"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlumnosController_1 = require("../controllers/AlumnosController");
class AlumnosRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', AlumnosController_1.alumnosController.getAlumnos);
        //Consultar un registro
        this.router.get('/:id', AlumnosController_1.alumnosController.getByIdAlumno);
        //Insertar un registro
        this.router.post('/', AlumnosController_1.alumnosController.createAlumno);
        //Actualizar un registro
        this.router.put('/:id', AlumnosController_1.alumnosController.updateAlumno);
        //Eliminar un registro
        this.router.delete('/:id', AlumnosController_1.alumnosController.deleteAlumno);
    }
}
const alumnosRouters = new AlumnosRouters();
exports.default = alumnosRouters.router;
