import {Request,Response}  from 'express';
import pool from '../database';

class ConsultasController{
    
    async getByTituloLibro(req:Request,res:Response){
        const {titulo}= req.params;
        const result= await pool.query('SELECT * FROM tb_libros WHERE titulo=?',[titulo]);
        if(result.length>0){
            res.json(result[0]);
        }
        
    }
    async getByAutoresLibro(req:Request,res:Response){
        const {autores}= req.params;
        const result= await pool.query('SELECT * FROM tb_libros WHERE autores=?',[autores]);
        if(result.length>0){
            res.json(result[0]);
        }
   
        }
        async getByClasificacionLibro(req:Request,res:Response){
            const {clasificacion}= req.params;
            const result= await pool.query('SELECT * FROM tb_libros WHERE clasificacion=?',[clasificacion]);
            if(result.length>0){
                res.json(result[0]);
            }
       
            }
}
export const consultasController= new ConsultasController(); 