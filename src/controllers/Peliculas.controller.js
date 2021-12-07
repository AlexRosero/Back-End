 const peliculasCtrl = {}
 const Peliculas = require('../models/Peliculas.models.js')
 const async = require('async_hooks')
 const jwt = require('jsonwebtoken')


//  CREAR PRODUCTO

 peliculasCtrl.nuevaPelicula = async(req, res)=>{
     
     const {nombrePelicula,tipoPelicula,duracion,resumenPelicula,estado,date}= req.body
     const nuevaPelicula = new Peliculas({
         nombrePelicula,
         tipoPelicula,
         duracion,
         resumenPelicula,
         estado,
         date
     })

     const nombre = await Peliculas.findOne({nombrePelicula:nombrePelicula})
     if(nombre){
         res.json({
             mensaje: 'Esta Peliculas ya existe'
         })
     }else{

        const token = jwt.sign({_id:nuevaPelicula._id}, "secreto")
        await nuevaPelicula.save()

         res.json({
             mensaje: 'Pelicula creada',
             ID: nombrePelicula._id,
             PELICULA: nombrePelicula,
             GENERO: tipoPelicula,
             DURACION: duracion,
            RESUMEN:resumenPelicula,
            ESTADO:estado,
            DATE: date,
            token
         })
     }

 }




//    LISTAR TODOS 

  peliculasCtrl.listar = async(req,res) => {
      const respuesta = await Peliculas.find()
      res.json(respuesta)
  }


//    LISTAR ESPECIFICO POR EL ID
 
  peliculasCtrl.listarId = async(req,res) => {
      const id = req.params.id
     const respuesta = await Peliculas.findById({_id: id})
     res.json(respuesta)
 }

//   ELIMINAR 
 peliculasCtrl.eliminar = async (req,res) => {
     const id = req.params.id
     const respuesta = await Peliculas.findByIdAndRemove({_id:id})
     res.json({
         mensaje: 'Pelicula Eliminada'
     })
 }

//   ACTUALIZAR 

 peliculasCtrl.actualizar = async (req,res) => {
     const id = req.params.id
     await Peliculas.findByIdAndUpdate({_id:id}, req.body)
     res.json({
         mensaje: 'Pelicula Actualizada'
     })
 }

//   BUSCAR POR UN CRITERIO EN ESPECIFICO 

 peliculasCtrl.buscarProductoCriterio = async (req,res) =>{

     const estadoP = req.params.criterio

     try{

         const respuesta = await  Peliculas.find({Estado:estadoP})
         res.json(respuesta)

     }catch(error){

         return res.status(400).json({
             mensaje:'Ocurrio un Error',
             error
         })

     }

 }



  module.exports = peliculasCtrl;