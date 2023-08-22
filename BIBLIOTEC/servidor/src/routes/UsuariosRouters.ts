import {Router} from 'express';
import { usuariosController } from '../controllers/UsuariosController';

class UsuariosRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        //Insertar un registro
        this.router.post('/',usuariosController.createUsuario);
        //Consultar todos los registros
        this.router.get('/',usuariosController.getUsuario);
        //Obtener por id
        this.router.get('/:id',usuariosController.getByIdUsuario);
        //Actualizar un registro
        this.router.put('/:id',usuariosController.updateUsuario);
        //Eliminar un registro
        this.router.delete('/:id',usuariosController.deleteUsuario);
    }
}
const usuariosRouters= new UsuariosRouters();
export default usuariosRouters.router;