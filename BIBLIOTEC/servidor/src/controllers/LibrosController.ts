import {Request,Response}  from 'express';
import pool from '../database';

class LibrosController{
    async getLibros(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_libros INNER JOIN tb_editoriales ON tb_libros.id_editorial = tb_editoriales.id_editorial');
        res.json(result[0]);
    }
    async getByIdLibro(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_libros INNER JOIN tb_editoriales ON tb_libros.id_editorial = tb_editoriales.id_editorial WHERE id_libro= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    
    async createLibro(req:Request,res:Response){
        await pool.query('INSERT INTO tb_libros set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateLibro(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_libros set ? WHERE id_libro= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteLibro(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_libros WHERE id_libro= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const librosController= new LibrosController();