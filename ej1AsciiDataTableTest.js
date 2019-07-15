"use strict";
/*Ejercicio 1 (Partir de los ejercicios de NPM)
• Adaptar la forma de importar librerías a TS
• Agregar tipos a las variables y funciones*/
exports.__esModule = true;
var asciiTable = require("./node_modules/ascii-data-table");
// let AsciiTable = require('ascii-data-table').default;
// or if installed by cloning git repo, use the correct path
//var AsciiTable = require('lib/ascii-data-table').default
var argumentos = process.argv.slice(2);
var items;
items = [
    [argumentos[0], argumentos[1]],
    [argumentos[2], argumentos[3]],
    [argumentos[4], argumentos[5]]
];
var res = asciiTable["default"].table(items);
console.log(res);
