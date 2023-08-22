import {Router} from 'express';
import { consultasController } from '../controllers/ConsultasController';

class ConsultasRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar un registro por titulo
        this.router.get('/titulo/:titulo',consultasController.getByTituloLibro);
      
        //Consultar un registro por autor
        this.router.get('/autor/:autores',consultasController.getByAutoresLibro);

         //Consultar un registro por autor
         this.router.get('/clasificacion/:clasificacion',consultasController.getByClasificacionLibro);
      
    }
}
const consultasRouters= new ConsultasRouters();
export default consultasRouters.router;