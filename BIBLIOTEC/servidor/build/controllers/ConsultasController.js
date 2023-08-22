"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultasController = void 0;
const database_1 = __importDefault(require("../database"));
class ConsultasController {
    getByTituloLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_libros WHERE titulo=?', [titulo]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
    getByAutoresLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { autores } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_libros WHERE autores=?', [autores]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
    getByClasificacionLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clasificacion } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_libros WHERE clasificacion=?', [clasificacion]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
}
exports.consultasController = new ConsultasController();
