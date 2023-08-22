import {Router} from 'express';
import { carerrasController } from '../controllers/CarrerasController';

class CarrerasRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',carerrasController.getCarrera);
        //Consultar un registro
        this.router.get('/:id',carerrasController.getByIdCarrera);
        //Insertar un registro
        this.router.post('/',carerrasController.createCarrera);
        //Actualizar un registro
        this.router.put('/:id',carerrasController.updateCarrera);
        //Eliminar un registro
        this.router.delete('/:id',carerrasController.deleteCarrera);
    }
}
const carrerasRouters= new CarrerasRouters();
export default carrerasRouters.router;