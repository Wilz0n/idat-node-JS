// ES5

// function simple de suma y division

function number() {
    return 10; 
}

function numbertwo(a) { 
    return a + 10; 
}

function division(a, b) {
    return a / b; 
}

// ES6

const numberone = () => 10; 

const numberthree = (a) => a + 10; 

const divisiontwo = (a, b) => a / b;

// REACT

function Task({ task }) {
    return(
        <ul>
            {task.map((task) => (
                <li>{task}</li>
            ))}
        </ul>
    );
}