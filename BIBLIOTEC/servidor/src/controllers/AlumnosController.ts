import {Request,Response}  from 'express';
import pool from '../database';

class AlumnosController{
    async getAlumnos(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_alumnos');
        res.json(result[0]);
    }

    async getByIdAlumno(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_alumnos WHERE id_alumno= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    
    async createAlumno(req:Request,res:Response){
        await pool.query('INSERT INTO tb_alumnos set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateAlumno(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_alumnos set ? WHERE id_alumno= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteAlumno(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_alumnos WHERE id_alumno= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const alumnosController= new AlumnosController();