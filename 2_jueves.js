// // Crear funcion Calculadora
// // Recibe 3 parametros, (n1, n2, operacion)
// // La calculadora debe poder SUMAR RESTAR, MULTIPLICAR, DIVIDIR
// // Ejecutarlo con 1 ejemplo de cada operacion


// let calculadora = (n1, n2, operacion) => {
//     if(operacion == '+'){
//         console.log(`La SUMA de ${(n1)} + ${(n2)} es igual a: ${(n1+n2)}`);
//     }
//     if(operacion == '-'){
//         console.log(`La RESTA de ${(n1)} - ${(n2)} es igual a: ${(n1-n2)}`);
//     }
//     if(operacion == '*'){
//         console.log(`La MULTIPLICACION de ${(n1)} x ${(n2)} es igual a: ${(n1*n2)}`);
//     }
//     if(operacion == '/'){
//         console.log(`La DIVISION de ${(n1)} % ${(n2)} es igual a: ${(n1/n2)}`);
//     }
// }

// calculadora(10, 2, '/')

//PROMESAS

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(
        () => number > 5
            ? resolve (number)
            : reject (new Error('Menor a 5')),
        1000
    );
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));


    //Calculadora Kachyz
    const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b


const calculadora = (operacion, n1, n2, callback) => {
  let resultado = 0;

  switch(operacion) {
    case 'suma':
        resultado = suma(n1, n2)
        break;
    case 'resta':
        resultado = resta(n1, n2)
        break;
    case 'multiplicacion':
        resultado = multiplicacion(n1, n2)
        break;
    case 'division':
        resultado = division(n1, n2)
        break;
    default:
        resultado = "funcion no soportada"
  }
  callback(resultado, operacion)
}

const imprimeResultado = (resultado, operacion) => {
  console.log(`La operacion ${operacion} da como resultado ${resultado}`)
}

const saludame = (resultado, operacion) => {
  console.log(`HOLA MUNDO!! ${operacion}`)
}

calculadora ('suma', 5, 6, imprimeResultado)
calculadora ('suma', 5, 6, saludame)
