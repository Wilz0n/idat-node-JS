// ES5

function add(a, b) {
    b = b === undefined ? 0 : b; 
    a = a === undefined ? 0 : a; 

    return a + b;
}

// Aquí se llama a la función 'add' con los argumentos 10 y 20.

console.log(add(10, 20));

// ES6

// Se define una función addWithPD utilizando la sintaxis de parámetros por de ES6.

function addWithPD(a = 0, b = 0) {
    return a + b;
}

const addWithPD = (a = 0, b = 0) => a + b;
console.log(addWithPD()); 