//Condicionales

let x = 10;
let y = 8;

if(x == y){
    console.log("Son iguales")
}else if(x > y){
    console.log("Son diferentes y X es mayor a Y")
}else {
    console.log("Y es menor que X")
}

//Ciclos

for(let contador = 0; contador < 10; contador++){
    console.log("Contador:", contador)
    //console.log(`Contador: ${contador}`)
    //console.log("Contador: " + contador)
}

//Escribir una funcion 'Area rectangulo' que reciba dos parametros (b,h) y regrese el area
function areaRectangulo(b,h){
    console.log(`Area Rectangulo Arrow: ${b*h}`)    
}
areaRectangulo(5,5)

let areaRectangulo2 = (b,h) => { console.log(`Area Rectangulo: ${b*h}`) }
areaRectangulo2(5,5)

//Funcion 'division' que haga la division de 2 numeros
//Evaluar si los parametros son adecuados para una division
function division(a,b){
    if(a > b){
    console.log(`Division: ${a/b}`)    
    }else{
        console.log("Los parametros no son adecuados")
    }
}
division(5,10)

let division2 = (a,b) => {
    if(a > b){
        console.log(`Division Arrow: ${a/b}`)    
        }else{
            console.log("Los parametros no son adecuados")
        }
    }   
    division2(10,2)

//funcion que se llame primos, imprimir N cantidad de numeros primos
//ejecutarlo con 3 ejemplo

let b=2, i=0, numerosPrimos=[];

let GuardarPrimo = (a) => {
    for(b=2; b <= a; b++){
        if (determinarPrimo(b)){
            numerosPrimos.push(b);
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

let esPar = (numero) => {
    if(numero % 2 === 0)
    console.log(`El numero ${numero} es Par`)
    else
    console.log(`El numero ${numero} no es Par`)
}
esPar(49);