import {Request,Response}  from 'express';
import pool from '../database';

class CarrerasController{
    async getCarrera(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_carreras');
        res.json(result[0]);
    }

    async getByIdCarrera(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_carreras WHERE id_carrera= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    async createCarrera(req:Request,res:Response){
        await pool.query('INSERT INTO tb_carreras set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateCarrera(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_carreras set ? WHERE id_carreras= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteCarrera(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_alumnos WHERE id_alumno= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const carerrasController= new CarrerasController();