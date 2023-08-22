import {Router} from 'express';
import { alumnosController } from '../controllers/AlumnosController';

class AlumnosRouters{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',alumnosController.getAlumnos);
        //Consultar un registro
        this.router.get('/:id',alumnosController.getByIdAlumno);
        //Insertar un registro
        this.router.post('/',alumnosController.createAlumno);
        //Actualizar un registro
        this.router.put('/:id',alumnosController.updateAlumno);
        //Eliminar un registro
        this.router.delete('/:id',alumnosController.deleteAlumno);
    }
}
const alumnosRouters= new AlumnosRouters();
export default alumnosRouters.router;