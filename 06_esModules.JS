
//ES5

function sumaAdd(a, b){
    return a + b;
}

const API = 'localhost:400';

const portNumber = 3000;

// EXPORTAR 

module.exports = { sumaAdd, API, portNumber };

// IMPORTAR

// importa o requiere el módulo ubicado en el archivo './05_parameterDefault.js' 

// const sumaAdd = require('./05_parameterDefault');

// ES6

// Exportacion de la funcion suma utilizando una arrow function

export const suma = (a, b) => a + b;

// La constante nameAPI con el valor 'localhost y la exportacion de la constante fue puesta en el port con el valor 5000

export const nameAPI = 'localhost';
export const port = 5000;

// Importación de las constantes y la función desde './05_parameterDefault'

import { suma,nameAPI,port } from './05_parameterDefault'