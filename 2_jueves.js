// Crear funcion Calculadora
// Recibe 3 parametros, (n1, n2, operacion)
// La calculadora debe poder SUMAR RESTAR, MULTIPLICAR, DIVIDIR
// Ejecutarlo con 1 ejemplo de cada operacion


let calculadora = (n1, n2, operacion) => {
    if(operacion == '+'){
        console.log(`La SUMA de ${(n1)} + ${(n2)} es igual a: ${(n1+n2)}`);
    }
    if(operacion == '-'){
        console.log(`La RESTA de ${(n1)} - ${(n2)} es igual a: ${(n1-n2)}`);
    }
    if(operacion == '*'){
        console.log(`La MULTIPLICACION de ${(n1)} x ${(n2)} es igual a: ${(n1*n2)}`);
    }
    if(operacion == '/'){
        console.log(`La DIVISION de ${(n1)} % ${(n2)} es igual a: ${(n1/n2)}`);
    }
}

calculadora(10, 2, '/')