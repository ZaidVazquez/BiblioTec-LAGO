import {Router} from 'express';
import { librosController } from '../controllers/LibrosController';

class LibrosRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',librosController.getLibros);
        //Consultar un registro
        this.router.get('/:id',librosController.getByIdLibro);
        //Insertar un registro
        this.router.post('/',librosController.createLibro);
        //Actualizar un registro
        this.router.put('/:id',librosController.updateLibro);
        //Eliminar un registro
        this.router.delete('/:id',librosController.deleteLibro);
    }
}
const librosRouters= new LibrosRouters();
export default librosRouters.router;