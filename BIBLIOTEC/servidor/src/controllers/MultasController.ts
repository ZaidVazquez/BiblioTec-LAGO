import { Request,Response } from "express";
import pool from "../database";

class MultasController{
    async getMultas(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_multas');
        res.json(result[0]);
    }
    async getByIdMulta(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_multas WHERE id_multa= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    async createMulta(req:Request,res:Response){
        await pool.query('INSERT INTO tb_multas set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Ups!! Multa acumulada'});
    }
    async updateMulta(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_multas set ? WHERE id_multa= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Multa actualizada!"});
    }
    
    
    async deleteMulta(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_multas WHERE id_multa= ?',[id]);
        //res.json(result);
        res.json({text:'Multa eliminada'});
    }
}
export const multasController= new MultasController();