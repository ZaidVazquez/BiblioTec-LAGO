import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index-routes';
import LibrosRoutes from './routes/LibrosRouters';
import ConsultasRouters from './routes/ConsultasRouters';
import AlumnosRouters from './routes/AlumnosRouters';
import UsuariosRouters from './routes/UsuariosRouters';
import MultasRouters from './routes/MultasRouters';
import PrestamosRouters from './routes/PrestamosRouters';
import CarrerasRouters from './routes/CarrerasRouters';
import EditorialesRouters from './routes/EditorialesRouters';


class Server{
    public app:Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());   //acepta formato json
        this.app.use(express.urlencoded({extended:false})); //acepta formularios html
    }
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/alumnos',AlumnosRouters);
        this.app.use('/libros',LibrosRoutes);
        this.app.use('/consultas',ConsultasRouters);
        this.app.use('/Usuarios',UsuariosRouters);
        this.app.use('/Multas',MultasRouters);
        this.app.use('/Prestamos',PrestamosRouters);
        this.app.use('/carreras',CarrerasRouters);
        this.app.use('/editoriales',EditorialesRouters)
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port ',this.app.get('port'));
        });
    }
}
const server= new Server();
server.start();

