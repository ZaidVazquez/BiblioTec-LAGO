import { Request, Response } from "express";
import pool from "../database";

class PrestamosController{
    async getPrestamos(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_prestamos');
        res.json(result[0]);
    }
    async getByIdPrestamo(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_prestamos WHERE id_prestamo= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    async createPrestamo(req:Request,res:Response){
        await pool.query('INSERT INTO tb_prestamos set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Prestamo almacenado!'});
    }
    async updatePrestamo(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_prestamos set ? WHERE id_prestamo= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Prestamo actualizado!"});
    }
    
    
    async deletePrestamo(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_prestamos WHERE id_prestamo= ?',[id]);
        //res.json(result);
        res.json({text:'Prestamo eliminado'});
    }


}
export const prestamosController= new PrestamosController();