//creando un array sin elementos
let emptyArray = [];

// creando un array con elementos
let frutas = ["banano", "manzana", "papaya"];

// creando un array con variedad de datos
let variety = ["Daniel", 20, "alto", 10];

//creando un array con el constructor Array();
let colors = Array("red", "green", "purple");

//creando una secuencia numerica con el metodo array.from();
let secuency = "123456789";
let secuencyArray = Array.from(secuency);


// Crear un array repitiendo un valor utilizando fill
const valorRepetido = 5;
const longitudArray = 8;

const miArray = [Array(longitudArray).fill(valorRepetido)];

//Crear un array a partir de una cadena de texto usando el método String.split()
let cadena = "uno,dos,tres,cuatro,cinco";
let cadenaSplitted = cadena.split(",");

