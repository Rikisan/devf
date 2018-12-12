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

    LibroModel.find({}, (err, docs) => {
        res.send(docs)
    })
})

//con conexion a mongodb
router.post('/', (req, res) => {
    console.log(req.body)

// let libroNuevo = new LibroModel(req.body) by Kachyz   
    let libroNuevo = new LibroModel({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        anio: req.body.anio
    })

    libroNuevo.save()
    res.status(200).send(req.body) //o send(libroNuevo)
//<<<<<<< HEAD
//=======
})

/*router.post('/', (req, res) => {
    console.log(req.body)
    libros.push(req.body)
    res.send(req.body)
>>>>>>> a707e8e9d0fbd3274f09ed6c6e22020af9d13f4e
})
*/

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
    
    LibroModel.findOneAndUpdate({titulo: "HP 5000"}, {titulo: "HP 22"},
    (err, libro) => {
        console.log(libro)
        if(libro == null) return res.status(500).send('Book not found')
        return res.status(200).send('updated' + libro)
    })
})

//update con arreglos temporales
//   router.put('/', (req, res) => {
//     let index = -1;
//     for(let i=0; i < libros.length; i++) {
//         if(libros[i].titulo == req.body.titulo) index = i;
//     }
//     if (index < 0)
//         res.status(400).send('Book not found')
//     else {
//         libros[index] = req.body
//         res.status(200).send(libros)
//     }
//   })

module.exports = router
