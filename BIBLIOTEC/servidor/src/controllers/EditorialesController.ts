import {Request,Response}  from 'express';
import pool from '../database';

class EditorialesController{
    async getEditorial(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_editoriales');
        res.json(result[0]);
    }

    async getByIdEditorial(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_editoriales WHERE id_editorial= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    async createEditorial(req:Request,res:Response){
        await pool.query('INSERT INTO tb_editorial set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateEditorial(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_editoriales set ? WHERE id_editorial= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteeditorial(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_editoriales WHERE id_editorial= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const editorialesController= new EditorialesController();