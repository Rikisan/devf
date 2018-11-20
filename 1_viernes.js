//Clase sobre objetos

class Persona {

    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    comer (comida){
        console.log(`Soy ${this.nombre} y estoy comiendo ${comida}`)
    }
    //atributos: nombre, edad
    //metodos: comer, programar
}

class Empleado extends Persona{
    constructor(name, edad, sueldo){
        super(name, edad)
        this.sueldo = sueldo
    }
    cobrar(){
        console.log(`Pagueme mis ${this.sueldo} pesos, por favor`);
    }
}

//creando nuevas instancias a partir del objeto
let RicardoLabarca = new Persona('Ricardo',31);
let ArturoGarcia = new Persona('Arturo',26);
console.log(RicardoLabarca)
console.log(ArturoGarcia)

//usando los metodos
RicardoLabarca.comer('pizza')
ArturoGarcia.comer('pastel')

//herencia

let RicardoLabarcaEmpleado = new Empleado('Ricardo', 31, 2)
console.log(RicardoLabarcaEmpleado);

RicardoLabarcaEmpleado.cobrar()
RicardoLabarcaEmpleado.comer('Chocolate')


//Ejercicios

// 1-Crear un objeto de tipo triangulo rectangulo con atributos base y altura y tener el metodo  area y perimetro.

class triangulo{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    area(base,altura){
        console.log(`El area del triangulo es: ${(this.base*this.altura)/2}`);
    }
    perimetro(base,altura){
        console.log(`El perimetro del triangulo es: ${(this.base+this.altura+Math.hypot(this.base,this.altura))}`);
    }
}

let ba_triangulo = new triangulo(10,5)
ba_triangulo.area()
ba_triangulo.perimetro()


// 2-Crear un objeto tipo cuadrado y obtener el perimetro y area.

class cuadrado{
    constructor(base){
        this.base = base
    }
    area(){
        console.log(`El area del cuadrado es: ${(this.base**2)}`);
    }
    perimetro(){
        console.log(`El perimetro del cuadrado es: ${(this.base*4)}`);
    }
}

let lado_cuadrado = new cuadrado(15)
lado_cuadrado.area()
lado_cuadrado.perimetro()

// 3-Crear un objeto tipo rectangulo y obtener el perimetro y area.

class rectangulo extends cuadrado{
    constructor(base, altura){
        super(base)
        this.altura = altura 
    }
    areaR(base, altura){
        console.log(`El area del rectangulo es: ${(this.base*this.altura)}`);
    }
    perimetroR(base, altura){
        console.log(`El perimetro del rectangulo es: ${(this.base*this.altura)*2}`);
    }
}

let altura_rectangulo = new rectangulo(15,5)
altura_rectangulo.areaR()
altura_rectangulo.perimetroR()

// 4-Haz una clase llamada Ciudadano que siga las siguientes condiciones:
// Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// calcularIMC()
// esMayorDeEdad()
// El constructor pide nombre, edad,sexo,peso y altura
// Generar el RFC a partir de el nombre, edad y sexo

class Ciudadano extends Persona{
    constructor (nombre, apellido, edad, sexo, peso, altura, dia, mes){
        super(nombre, edad)
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.apellido = apellido
        this.dia = dia
        this.mes = mes
    }
    calcularIMC(){
        console.log(`El ciudadano ${(this.nombre)} tiene un IMC: ${Number((this.peso/this.altura**2).toFixed(2))}`);
    }
    esMayorDeEdad(){
        ((this.edad >= 18) ? console.log(`El ciudadano ${(this.nombre)} es mayor de edad`) : console.log(`El ciudadano ${(this.nombre)} NO es mayor de edad`));
    }
}

let nuevoCiudadano = new Ciudadano('Ricardo Enrique', 'Labarca Toledo', 31, 'Masculino', 69, 1.69, 30, 10)
nuevoCiudadano.calcularIMC();
nuevoCiudadano.esMayorDeEdad();

let calRFC = (ciudadano) => {
pos = ciudadano.nombre.indexOf(" ");
apellido2 = ciudadano.apellido.substr(0,2);
apellido1 = ciudadano.apellido.substr(pos+1,1);
nombre1 = ciudadano.nombre.substr(0,1);

 fecha = new Date();
 ano = fecha.getFullYear() - ciudadano.edad - 1900;

 RFC = apellido2+apellido1+nombre1+ano+ciudadano.mes+ciudadano.dia;
 console.log(`El RFC del ciudadano es : ${(RFC.toUpperCase())}`);
}
calRFC(nuevoCiudadano);