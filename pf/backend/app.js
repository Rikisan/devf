const express = require('express')
const app = express()
const cors = require('cors')
const ClientesImportados = require('./routes/clientes')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ts-z10')

 /** middleware */
 app.use(cors())

 /**Test connection to db */
 mongoose.connection.once('open', () =>{
    console.log("Me pude conectar a la base de datos =D")
 }).on('error', () => {
    console.log("No me pude conectar :(")
 });

 /**Add clientes route */
 app.use('/clientes', ClientesImportados)

 /* GET users listing. */
 app.get('/', (req, res)  => {
    res.send('respond from app')
 })
  
 /* POST users listing. */
 app.post('/', (req, res) => {
  res.send('respond with a resource')
 })
  
 /* DELETE users listing. */
 app.delete('/', (req, res) => {
  res.send('respond with a resource')
 })
 
 /* UPDATE users listing. */
 app.put('/', (req, res) => {
  res.send('respond with a resource')
 })


app.listen(process.env.PORT || 3000, () => {
  console.log(`comenzamos a correr en el puerto 3000`);
})

module.exports = app;
