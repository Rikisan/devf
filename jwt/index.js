const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const bodyParser = require('body-parser')

app.get('/hola', (req, res) => { // home page
    res.send("Estoy en Hola")
} )

app.use(bodyParser.json()) //nuestro midleware

app.post('/login', (req, res) => { //login
    //console.log(req);
    const user = req.body
    console.log(user)

    const token = jwt.sign({user}, 'devf')
    console.log(token)
    res.json({token})
} )

app.get('/check', revisartoken,  (req, res) => { //solo puedes entrar si tienes el jwt
    //console.log(req.token)

    jwt.verify(req.token, 'devf', (err, data) => {
        if(err){
            res.send('error de token')
        }
        else{
            res.json({
                text: 'token descifrado',
                data
            })
        }
    })

    //res.send('entramos al CHECK')
} )

function revisartoken (req, res, next){
    const handler = req.headers["authorization"]

    if(typeof handler !== 'undefined'){
        // si tiene algo podemos continuar
        const datos = handler.split(' ') //donde vea un espacio lo va a dividir
        const tokenRecibido = datos[1]
        req.token = tokenRecibido
        next()
    } else{
        // no tiene nada el handler
        res.send('you shall not pass!')
    }
}


app.listen(7000, () => {
    console.log('Estoy corriendo en el puerto 7000')
} )