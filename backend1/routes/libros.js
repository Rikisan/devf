const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const LibroModel = require('../models/LibroModel')

router.use(bodyParser.json())

let libros = []

/*
{
    "titulo": "String",
    "descripcion":  "String",
    "anio" : "Number"
}
*/

router.get('/', (req, res) => {
    let libroNuevo = new LibroModel({
        titulo: "HP 70",
        descripcion: "mas libros",
        anio: 3000
    })

    libroNuevo.save()

    res.send(libros)
})

router.post('/', (req, res) => {
    console.log(req.body)
    libros.push(req.body)
    res.send(req.body)
})

router.delete('/:libros', (req, res) => { //envio el libro que quiero eliminar a http://localhost:3000/libros/<libro que quiero eliminar>
    let index = -1;
    let miLibro = req.params.libros       //guardo el libro recibido en una variable
    for(let i=0; i < libros.length; i++) {
        if(libros[i].titulo == miLibro) index = i;
    }
    if (index < 0)
        res.status(400).send('Book not found')
    else {
        libros.splice(index, 1)
        res.status(200).send(libros)
    }
  })

  router.put('/', (req, res) => {
    let index = -1;
    for(let i=0; i < libros.length; i++) {
        if(libros[i].titulo == req.body.titulo) index = i;
    }
    if (index < 0)
        res.status(400).send('Book not found')
    else {
        libros[index] = req.body
        res.status(200).send(libros)
    }
  })

module.exports = router