import {Router} from 'express';
import { prestamosController } from '../controllers/PrestamosController';

class PrestamosRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',prestamosController.getPrestamos);
        //Consultar un registro
        this.router.get('/:id',prestamosController.getByIdPrestamo);
        //Insertar un registro
        this.router.post('/',prestamosController.createPrestamo);
        //Actualizar un registro
        this.router.put('/:id',prestamosController.updatePrestamo);
        //Eliminar un registro
        this.router.delete('/:id',prestamosController.deletePrestamo);
    }
}
const prestamosRouters= new PrestamosRouters();
export default prestamosRouters.router;