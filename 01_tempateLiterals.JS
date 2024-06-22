// Concatenacion en ES5 y ES6

const nombre = 'Javier';
const apellido = 'Bernal';

// ES5 

console.log('Bienvenido' + ' ' + nombre + ' ' + apellido);

// ES6


console.log(`Hola ${nombre} ${apellido}`);

// REACT

function Button({ className, ...props }) {
    // Uso de las props y la clase adicional para personalizar el componente
    return <div className={`button ${className}`} { ...props} />;
}