function escalones (n, memory){ //n es nuestro numero de escalones
    if(n==1) return memory[1]
    if(n==2) return memory[2]

    if(memory[n]!= undefined) return memory[n]
    memory[n] = escalones(n-1, memory) + escalones(n-2, memory)
    return memory[n]
}

function calculaPosibilidades(n){
    let memory = new Array(n);
    memory[1] = 1
    memory[2] = 2

    return escalones(n, memory)
}
let ti = new Date().getTime()
console.log(calculaPosibilidades(5000))
let tf = new Date().getTime()
console.log('tiempo en ms =', (tf-ti));

//CallBacks

setTimeout( () => {
    console.log('Hola, estoy adentro de un setTimeOut :D');
}, 3000 )
