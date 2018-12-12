//Ejercicios de GET y POST en express

const express = require('express')
const app = express()
const librosImportados = require('./routes/libros')
const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/libreria')
mongoose.connect('mongodb://admin:admin1234@ds023432.mlab.com:23432/testcrb5')
const cors = require('cors')

app.use(cors())

mongoose.connection.once('open', () =>{
    console.log("Me pude conectar a la base de datos =D")
}).on('error', () => {
    console.log("No me pude conectar :(")
});


app.use('/libros', librosImportados)

//declarando "libros"
let books = [2,4,6,8,10]

app.get('/', (request, response) => {
    console.log('Recibimos una peticion GET al /')
    response.send(books)
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/:pos', (request, response) => {
    console.log('Estoy en el GET /:pos')
    let miPos = request.params.pos
    console.log(`Recibimos el libro  ${books[miPos]} en la pos = ${miPos}`)
    response.status(200).send('' + books[miPos])
})

app.get('/get3', (request, response) => {
    console.log('Recibimos una peticion GET al /');
    response.send('<h3>Hola Devf, estamos obteniendo un h3</h3>')
})

app.post('/', (request, response) => {
    console.log('Enviando...')
    response.send('<h1>Mira tu consola, esto es un POST</h1>')
})

app.post('/post2', (request, response) => {
    console.log('Enviando...')
    response.send('<h1>Mira tu consola, esto es un POST2</h1>')
})

//Levanta el servidor
// app.listen(5000, () => {
//     console.log('comenzamos a correr en el puerto 5000');
// })

//configurar un puerto dinamico
app.listen(process.env.PORT || 5000, () => {
    console.log(`comenzamos a correr en el puerto ${process.env.PORT}`);
})