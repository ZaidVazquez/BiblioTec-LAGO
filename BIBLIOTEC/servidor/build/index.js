"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const LibrosRouters_1 = __importDefault(require("./routes/LibrosRouters"));
const ConsultasRouters_1 = __importDefault(require("./routes/ConsultasRouters"));
const AlumnosRouters_1 = __importDefault(require("./routes/AlumnosRouters"));
const UsuariosRouters_1 = __importDefault(require("./routes/UsuariosRouters"));
const MultasRouters_1 = __importDefault(require("./routes/MultasRouters"));
const PrestamosRouters_1 = __importDefault(require("./routes/PrestamosRouters"));
const CarrerasRouters_1 = __importDefault(require("./routes/CarrerasRouters"));
const EditorialesRouters_1 = __importDefault(require("./routes/EditorialesRouters"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //acepta formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //acepta formularios html
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/alumnos', AlumnosRouters_1.default);
        this.app.use('/libros', LibrosRouters_1.default);
        this.app.use('/consultas', ConsultasRouters_1.default);
        this.app.use('/Usuarios', UsuariosRouters_1.default);
        this.app.use('/Multas', MultasRouters_1.default);
        this.app.use('/Prestamos', PrestamosRouters_1.default);
        this.app.use('/carreras', CarrerasRouters_1.default);
        this.app.use('/editoriales', EditorialesRouters_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
