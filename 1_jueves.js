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

let arreglo1 = [2, 10, 7, 5, 4, 1, 3, 6, 8, 9];
let arreglo2 = [2, 10, 7, 5, 4, 1, 3, 6, 8, 9];
console.log(`arreglo desordenado         : ${arreglo1}`);
arreglo1.sort(function(a,b){return b-a});
console.log(`arreglo ordenado magicamente: ${arreglo1}`);

let descendente = (arreglo2) => {
    for(i=0; i<arreglo2.length; i++){
        for(j=0; j<arreglo2.length; j++){
            if(arreglo2[j]<arreglo2[j+1]){
                temp = arreglo2[j];
                arreglo2[j] = arreglo2[j+1];
                arreglo2[j+1] = temp
            }
        }
    }
}
descendente(arreglo2);
console.log(`arreglo ordenado            : ${arreglo2}`);

//crear arreglo planeta completa y magicamente matar a marte
//crear un nuevo planeta despues de venus que se llama 'planeta Kachyz'

let planeta = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno'];
console.log(`Planetas normales   : ${planeta}`);

let anarquia = (planeta) => {
    for(i=0; i<planeta.length; i++){
        if(planeta[i]==='Venus'){
            planeta.splice(i,0,'Kachyz');
            i++;
        }
        else if(planeta[i]==='Marte'){
            planeta.splice(i,1);
            i++;
        }
    }
}
anarquia(planeta);
console.log(`Planetas Arnarquicos: ${planeta}`);


//tomar el mismo arreglo del primer ejercicio, crear una funcion que te regrese un arreglo
//del mismo tamaño donde cada numero es el cubo del numero original

let arreglo3 = [2, 10, 7, 5, 4, 1, 3, 6, 8, 9];
let cubo = (arreglo3) => {
    for(i=0; i<arreglo3.length; i++){
        arreglo3[i]=(arreglo3[i]**3);
    }
}
cubo(arreglo3);
console.log(`Arreglo, El cubo de cada elemento: ${arreglo3}`);