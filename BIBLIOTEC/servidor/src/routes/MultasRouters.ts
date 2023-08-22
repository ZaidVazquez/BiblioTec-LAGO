import {Router} from 'express';
import { multasController } from '../controllers/MultasController';


class MultasRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        //Consultar Multas
        this.router.get('/',multasController.getMultas);
        //Consultar una multa
        this.router.get('/:id',multasController.getByIdMulta);
        //Insertar una multa
        this.router.post('/',multasController.createMulta);
        //Actualizar una multa
        this.router.put('/:id',multasController.updateMulta);
        //Eliminar una multa
        this.router.delete('/:id',multasController.deleteMulta);
    }
}

const multasRouters= new MultasRouters();
export default multasRouters.router;