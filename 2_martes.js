// DE MANERA RECURSIVA
// Tenemos una escalera de N cantidad de escalones
// Solo podemos subir 1 o 2 escalones a la vez
// Regresen el numero de posibilidades que tenemos para alcanzar el escalon N

function escalones (n){
    if(n==1) return 1;
    if(n==2) return 2;
    return escalones(n-1) + escalones(n-2);
}

console.log(escalones(4));
