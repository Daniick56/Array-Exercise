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

//crando un array combinando dos arrays existentes utilizando el operador spread ( ... )
let array1 = ["lunes", "martes", "miercoles"];
let array2 = [...array1, "jueves", "viernes"];

//Creando un array con valores únicos utilizando el método Set() y el operador spread ( ... )
let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];

let arraySinDuplicados = new Set(arrayConDuplicados);

let arrayUnico = [...arraySinDuplicados];

//Creando un array con una función que genere valores dinámicamente
function generarArray(n) {
    let resultado = [];
  
    for (let i = 0; i < n; i++) {
      // generando valores de 2 en 2
      let nuevoValor = i * 2;
      resultado.push(nuevoValor);
    }
  
    return resultado;
  }
  
    // Llamar a la función para generar un array con 5 valores de 2 en 2
let arrayGenerado = generarArray(5);

//para saber la longitud de un array
let numbers = [1, 2, 3, 4, 5];
let longitud = numbers.length;

//agregar elementos al final de un array con .push();
let letters = ["a", "b", "c"];
let newLetter = "d";
letters.push(newLetter);

//eliminando elementos al final con pop();
let colores = ["rojo", "verde", "amarillo", "rosado"];
colores.pop();

//Agregar elementos al principio del array usando unshift();
let pares = [4, 6, 8, 10];
pares.unshift(2);

//Eliminar el primer elemento del array usando shift();
let impares = [2, 3, 5, 7, 9];
impares.shift(2);

//Obtener una porción del array usando slice
let numArrays = [1, 2, 3, 4, 5];
let sliceArray = numArrays.slice(0, 3);

//Convertir un array en un string usando join
let nameArray = ["Mi", "nombre", "es", "Daniel"];
let stringArray = nameArray.join(", ");

//creando una copia con slice dnadole como parametro un indice negativo
let nmbrs = [1, 2, 3, 4, 5, 6];
let copiaNmbrs = nmbrs.slice(-3);

//Eliminar una porción del array sin modificar el original usando slice
let arreglo = [1, 2, 3, 4, 5];
  //si quisieramos eliminar el 2 y el 3 de la lista:
let ArrayModificado = [...arreglo.slice(0, 1), ...arreglo.slice(-2)];


