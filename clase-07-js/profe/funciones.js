console.log('Hola Funciones');

//funciones: son pequeños bloques de código que realizan una tarea determinada
//palabra reservada         nombre     paréntesis  {{{}}}
/**
 * The function "dameNombre" logs the string "Mi nombre es Pepe" to the console.
 */
//(): son espacios para los parámetros/argumentos/info para que la función realice la tarea
function dameNombre() {
    console.log('Mi nombre es Pepe');
}

//dameNombre();

console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');

dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre(); 
dameNombre();

let numUno = 5;
let numDos = 10;

let resultado = numUno + numDos;

console.log(resultado);

numUno = 200;
numUno = 1000;

resultado = numUno + numDos;
console.log(resultado);



//Funciones con infos
function sumar(numeroUno, numeroDos) {

    let suma = numeroUno + numeroDos;

    console.log(`el resultado de la suma es ${suma}`);

    console.log('el resultado de la suma es: ' + suma);
    
}

sumar(1500, 5000);
sumar(numUno, numDos);

//funcion
function resta(a, b) {
    let resultado = a - b;
    console.log(`el resultado de la resta es : ${resultado}`);
    //suma(a, b);
}

resta(numUno, numDos);
function multiplicar(x, y) {
    let resultado = x * y;
    console.log(`el resultado de la multiplicacion es ${resultado}`); //el resultado de la multiplicacion es 1000

}
minombre('pepe')

console.log('============================================================================');
console.log('============================================================================');

function minombre(nombre) {
    console.log(`mi nombre es ${nombre}`); //mi nombre es pepe
    
}

const division = (nombre) =>{
    console.log('hola soy funcion ' + nombre);

}

division('flecha')