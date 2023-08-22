import {Router} from 'express';
import { editorialesController } from '../controllers/EditorialesController';

class EditorialesRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',editorialesController.getEditorial);
        //Consultar un registro
        this.router.get('/:id',editorialesController.getByIdEditorial);
        //Insertar un registro
        this.router.post('/',editorialesController.createEditorial);
        //Actualizar un registro
        this.router.put('/:id',editorialesController.updateEditorial);
        //Eliminar un registro
        this.router.delete('/:id',editorialesController.deleteeditorial);
    }
}
const editorialesRouters= new EditorialesRouters();
export default editorialesRouters.router;