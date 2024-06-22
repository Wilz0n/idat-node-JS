// ejemplo mostrada en clase

// Se define un array llamado dogs que contiene objetos representando diferentes razas de perros.

const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent', 'Active', 'Alert', 'Faithful', 'Trainable', 'Instinctual',],
    },
    {   id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {   id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Agile', 'Outgoing', 'Trusting', 'Gentle'],
    },
];

console.log(dogs);

// FIND(Busca un elemento)

const bernice = dogs.find((dog) => dog.name === 'Bernese Mountain Dog');

// SOME(Busca si al menos uno cumple y devuelve en boolean)

console.log(dogs.some((dog) => dog.temperament.includes('Trusting')));

// EVERY(todos deben cumplir y devuelve boolean)

console.log(dogs.every((dog) => dog.temperament.includes('Faithful')));

// MAP(Muta la data)

console.log(dogs.map(dog => dog.name)); 

// FILTER

console.log(dogs.filter((dog) => dog.temperament.includes('Faithful'))); 

// ELIMINAR ELEMENTOS

const idDogDelete = 'dog-2';

console.log(dogs.filter(dog => dog.id !== idDogDelete));