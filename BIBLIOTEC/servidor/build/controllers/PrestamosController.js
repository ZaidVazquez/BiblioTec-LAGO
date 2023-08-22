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
exports.prestamosController = void 0;
const database_1 = __importDefault(require("../database"));
class PrestamosController {
    getPrestamos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tb_prestamos');
            res.json(result[0]);
        });
    }
    getByIdPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_prestamos WHERE id_prestamo= ?', [id]);
            if (result.length > 0) {
                res.json(result[0]);
            }
        });
    }
    createPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_prestamos set ?', [req.body]);
            //res.json(result);
            //console.log(req.body);
            res.json({ message: 'Prestamo almacenado!' });
        });
    }
    updatePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tb_prestamos set ? WHERE id_prestamo= ?', [req.body, id]);
            //res.json(result);
            res.json({ text: "Prestamo actualizado!" });
        });
    }
    deletePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_prestamos WHERE id_prestamo= ?', [id]);
            //res.json(result);
            res.json({ text: 'Prestamo eliminado' });
        });
    }
}
exports.prestamosController = new PrestamosController();
