let semana = ['lunes', 'martes', 'miercoles']
let dia1 = "lunes"

for (let index = 0; index < semana.length; index++) {
    console.log(semana[index]);    
}
console.log(semana[10]);

semana.push('jueves')
console.log(semana);

semana[2]= "miercolez";

let x = semana.pop()
console.log(semana);
console.log(x);

//crear un arreglo con los numeros del 1 al 10 revueltos y una funcion que los acomode
//de manera descendente

let arreglo = [2, 10, 7, 5, 4, 1, 3, 6, 8, 9];

let descendente = (arreglo) => {arreglo.sort(function(a,b){return b-a})}

console.log(`arreglo desordenado         : ${arreglo}`);
descendente(arreglo);
console.log(`arreglo ordenado            : ${arreglo}`);

//crear arreglo planeta completa y magicamente matar a marte
//crear un nuevo planeta despues de venus que se llama 'planeta Kachyz'

let planeta = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno'];

let anarquia = (planeta) => {
    planeta.splice((planeta.indexOf("Venus"))+1, 0, 'Kachyz');
    planeta.splice(planeta.indexOf("Marte"),1);
}

console.log(`Planetas normales   : ${planeta}`);
anarquia(planeta);
console.log(`Planetas Arnarquicos: ${planeta}`);


//tomar el mismo arreglo del primer ejercicio, crear una funcion que te regrese un arreglo
//del mismo tamaño donde cada numero es el cubo del numero original

let arreglo2 = [2, 10, 7, 5, 4, 1, 3, 6, 8, 9];
let alcubo =  arreglo2.map((numero) => Math.pow(numero, 3));

console.log(`Arreglo, El cubo de cada elemento: ${alcubo}`);