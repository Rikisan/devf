const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrosSchema = new Schema({
    titulo: String,
    descripcion: String,
    anio: Number
})


module.exports = mongoose.model('book', LibrosSchema)