// Destructuring 

const obj = { x: 3.6, y: 7.8 };

//ES5 

function makeCalculation(obj) {
    const x = obj.x;
    const y = obj.y;
    const z = obj.z === undefined ? 10 : obj.z;

    return Math.floor((x + y + z) / 3); 
}

console.log(makeCalculation(obj));

//ES6

function makeCalculationWithDestructuring(obj) {
    const { x, y: d, z = 0 } = obj; 

    return Math.floor((x + d + z) / 3);
}

function makeCalculationWithDestructuringParam({ x, y: d, z = 4}) {
    return Math.floor((x + d + z) / 3);
}