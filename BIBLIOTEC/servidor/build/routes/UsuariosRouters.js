"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosController_1 = require("../controllers/UsuariosController");
class UsuariosRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Insertar un registro
        this.router.post('/', UsuariosController_1.usuariosController.createUsuario);
        //Consultar todos los registros
        this.router.get('/', UsuariosController_1.usuariosController.getUsuario);
        //Obtener por id
        this.router.get('/:id', UsuariosController_1.usuariosController.getByIdUsuario);
        //Actualizar un registro
        this.router.put('/:id', UsuariosController_1.usuariosController.updateUsuario);
        //Eliminar un registro
        this.router.delete('/:id', UsuariosController_1.usuariosController.deleteUsuario);
    }
}
const usuariosRouters = new UsuariosRouters();
exports.default = usuariosRouters.router;
