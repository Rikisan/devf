//Condicionales

let x = 10;
let y = 8;

if(x == y){
    console.log("Son iguales")
}else if(x > y){
    console.log(`Son diferentes y ${x} es mayor a ${y}`)
}else {
    console.log(`${y} es menor que ${x}`)
}

//Ciclos

for(let contador = 0; contador < 10; contador++){
    console.log("Contador:", contador)
}

//Escribir una funcion 'Area rectangulo' que reciba dos parametros (b,h) y regrese el area
let areaRectangulo2 = (b,h) => { console.log(`Area Rectangulo: ${b*h}`) }
areaRectangulo2(5,5)

//Funcion 'division' que haga la division de 2 numeros
//Evaluar si los parametros son adecuados para una division

let division = (a,b) => {
    (b == 0) ? console.log("Los parametros no son adecuados") : console.log(`Division: ${a/b}`) 
    }   
    division(10,2)

//funcion que se llame primos, imprimir N cantidad de numeros primos
//ejecutarlo con 3 ejemplo

let p=2, i=0, numerosPrimos=[];

let GuardarPrimo = (a) => {
    for(p=2; p <= a; p++){
        if (determinarPrimo(p)){
            numerosPrimos.push(p);
        }
    }
}
let determinarPrimo = (numero) => {
  for(let i = 2; i < numero; i++){
      if (numero % i === 0){
          return false;
        }
    }return numero !== 1;
}
GuardarPrimo(50);
console.log(numerosPrimos); 

// Funcion esPar regresa true|false de acuerdo al numero dado
//esPar con ternario => ?
let esPar2 = (numero2) => {
    numero2 = ((numero2 % 2 === 0) ? console.log(`El numero ${numero2} es Par`) : console.log(`El numero ${numero2} no es Par`));
    }
esPar2(99);
