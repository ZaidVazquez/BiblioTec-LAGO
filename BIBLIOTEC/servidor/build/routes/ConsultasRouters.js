"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultasController_1 = require("../controllers/ConsultasController");
class ConsultasRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar un registro por titulo
        this.router.get('/titulo/:titulo', ConsultasController_1.consultasController.getByTituloLibro);
        //Consultar un registro por autor
        this.router.get('/autor/:autores', ConsultasController_1.consultasController.getByAutoresLibro);
        //Consultar un registro por autor
        this.router.get('/clasificacion/:clasificacion', ConsultasController_1.consultasController.getByClasificacionLibro);
    }
}
const consultasRouters = new ConsultasRouters();
exports.default = consultasRouters.router;
