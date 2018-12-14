const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GeneralesSchema = new Schema({
    Registro: {type: Number, required: true},
    ID: Number,
    Empresa: String,
    Contacto: String,
    "Puesto Contacto": String,
    Tel1: Number,
    Tel2: Number,
    Tel3: Number,
    "Minicipio y Estado": String,
    Direccion: String,
    "Direccion Google": String,
    CP: Number,
    Email: String,
    Web: String,
    Categoria: String,
    Clase: String,
    Etapa: String,
    CGS: String,
    COS: String,
    "Ultima Actualizacion": String,
    E2: String,
    E3: String,
    E4: String,
    "Interes del Cliente": String,
    "Cel Contacto": String    
})

module.exports = mongoose.model('generales', GeneralesSchema)
