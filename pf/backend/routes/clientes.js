const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Modelobd = require('../model/model')

router.use(bodyParser.json())

let ID = []

/* GET users listing. */
router.get('/', (req, res)  => {
  Modelobd.find({}, (err, docs) => {
    res.send(docs)
  })
})

/* POST users listing. */
router.post('/', (req, res) => {
  console.log(req.body)

  let ClienteNuevo = new Modelobd(req.body)
  ClienteNuevo.save()
  res.send(ClienteNuevo)
})

/* DELETE users listing. */
router.delete('/:ID', (req, res) => { //envio el ID del cliente que quiero eliminar a http://localhost:3000/ID/<Cliente que quiero eliminar>
  Modelobd.findOneAndDelete({ID: req.params.ID} , (err) => {
    console.log(req.params.ID)
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Cliente successfully deleted",
        id: req.params.ID
    }
    return res.status(200).send(response);
  })
})


/* UPDATE users listing. */
router.put('/:ID', (req, res) => {
  let ModCliente = new Modelobd(req.body)
  Modelobd.findOneAndUpdate({ID: req.params.ID}, {Empresa: ModCliente.Empresa},
  (err) => {
    res.send(ModCliente)
  })
})

module.exports = router