function makeCalCWithDestructuringParam({ x, y: d, z = 4 }) {
    return Math.floor((x + d + z) / 3);
    }
    
    // CONVERTIR LA ULTIMA FUNCION EN ARROW FUNCTION

const makeCalCWithDestructuringParam = ({ x, y: d, z = 4 }) => // CONVERSION A ARROW FUNCTION
    Math.floor((x + d + z) / 3);


// arrayMethodos.JS

    const dogs = [
        {
            id: 'dog-1',
            name: 'Poodle',
            temperament: ['Intelligent','Active','Alert','Faithful','Trainable','Instinctual',],
        },
    {
      id: 'dog-2',
      name: 'Bernese Mountain Dog',
      temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    
      {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent','Even Tempered','Kind','Agile','Outgoing','Trusting','Gentle',],
    },
];

// consolge.log(dogs);

// FIND(Busca un elemento)

const dogBernice = dogs.find((dog) => dog.name === 'Bernanse Mountain Dog')
// console.log(dogBernice);