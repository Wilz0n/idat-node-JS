const nombre = '';

let mensaje = name ? 'Existe el nombre' : 'No existe el nombre';

// ES5

if(nombre) {
    mensaje = 'Existe el nombre';
} else {
    mensaje = 'No existe el nombre'; 
}

// ES6

// El operador ternario en ES6 revisa si nombre es true o false asignando 'Existe el nombre' o 'No existe el nombre' a mensaje. se muestra el resultado de ES6 abajo

// nombre ? (message = 'Existe el nombre') : (mensaje = 'No existe el nombre');

console.log(mensaje);