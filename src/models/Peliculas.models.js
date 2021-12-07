const mongoose = require('mongoose')
const {Schema}= mongoose


const peliculasSchema = new Schema({
    nombrePelicula:{type:String},
    tipoPelicula:{type:String},
    duracion:{type:String},
    resumenPelicula:{type:String},
    estado:{type:String},
    date:{type:Date,default:Date.now}
})

// convertir modelo
    module.exports = mongoose.model('Peliculas',peliculasSchema)