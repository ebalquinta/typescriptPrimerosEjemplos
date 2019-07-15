"use strict";
/*Ejercicio 2 (Partir de cero)
• Definir funciones (con todos los tipos necesarios) para
hacer lo siguiente:
• Cargar un listado de palabras (por esta vez, usar el arreglo
como variable global)
• Insertar/eliminar/buscar/actualizar una palabra del listado
• Ejercicio 3 (Adicional)
• Agregar que la lista de palabras esté ordenada
permanentemente (ayudarse con filminas de
ordenamiento)*/
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
var palabras = new Array();
//palabras = ["esta", "es", "una", "lista", "de", "palabras"];
function cargarPalabras() {
    var texto;
    texto = readlineSync.question("ingrese una palabra(enter para cortar): ");
    var indice = 0;
    while (texto != "") {
        palabras[indice] = texto;
        texto = readlineSync.question("ingrese una palabra(enter para cortar): ");
        indice++;
    }
}
function cargarPalabrasOrdenadas() {
    var texto;
    texto = readlineSync.question("ingrese una palabra(enter para cortar): ");
    //let indice: number = 0;
    while (texto != "") {
        palabras.push(texto); //palabras[indice] = texto;
        texto = readlineSync.question("ingrese una palabra(enter para cortar): ");
        //indice++;
    }
    palabras.sort();
}
function actualizarPalabra(texto) {
    if (palabras.indexOf(texto) != -1) {
        console.log("palabra ", texto, " encontrada");
        var palabraNueva = readlineSync.question("ingrese palabra nueva: ");
        palabras[palabras.indexOf(texto)] = palabraNueva;
    }
    else
        console.log("palabra ", texto, " no encontrada");
}
function eliminarPalabra(texto) {
    var indice = palabras.indexOf(texto);
    if (indice !== -1) {
        palabras.splice(indice, 1);
        console.log("palabra ", texto, " eliminada");
    }
    else
        console.log("palabra ", texto, " no encontrada");
}
function insertarPalabra(texto, indice) {
    for (var indiceArray = palabras.length; (indice - 1) < indiceArray; indiceArray--) {
        palabras[indiceArray] = palabras[indiceArray - 1];
    }
    palabras[indice - 1] = texto;
}
function insertarPalabraOrdenada(texto) {
    var indiceArray;
    for (indiceArray = 0; indiceArray < palabras.length; indiceArray++) {
        if (texto > palabras[indiceArray])
            break;
    }
    insertarPalabra(texto, indiceArray + 1);
}
// cargarPalabras();
cargarPalabrasOrdenadas();
console.log(palabras);
insertarPalabra("ezequiel", 3);
console.log(palabras);
var palabraBuscada = readlineSync.question("palabra a buscar: ");
if (palabras.indexOf(palabraBuscada) != -1)
    console.log("palabra " + palabraBuscada + " encontrada en posicion " + (palabras.indexOf(palabraBuscada) + 1));
else
    console.log("palabra " + palabraBuscada + " no encontrada");
actualizarPalabra("jer");
console.log(palabras);
eliminarPalabra("carlos");
console.log(palabras);
