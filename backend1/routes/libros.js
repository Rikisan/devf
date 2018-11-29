const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

let libros = []

/*
{
    titulo: String,
    descripcion:  String,
    anio : Number


}
*/


router.get('/', (req, res) => {
    res.send(libros)
})

router.post('/', (req, res) => {
    console.log(req.body)
    libros.push(req.body)
    res.send(req.body)
})

router.delete('/', (req, res) => {
    let index = -1;
    for(let i=0; i < libros.length; i++) {
        if(libros[i].titulo == req.body.titulo) index = i;
    }
    if (index < 0)
        res.status(400).send('Book not found')
    else {
        libros.splice(index, 1)
        res.status(200).send(libros)
    }
  })

module.exports = router
