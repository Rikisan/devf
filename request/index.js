const request = require('request')

const llamada = (cadenaABuscar) => {
    return new Promise((resolve, reject) => {
        let url = 'https://icanhazdadjoke.com/search?term=' + cadenaABuscar

        let options = {
            url : url,
            headers: {
                'Accept': 'application/json'
            }
        };

        request(options, (error, response, body) => {
            body = JSON.parse(body)
            if(body.results.length === 0){
                return reject('No Dad jokes found')
            }
            return resolve(body.results[6].joke)
        })
    })
}

llamada('cat')
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log(`FALLO ${e}`))