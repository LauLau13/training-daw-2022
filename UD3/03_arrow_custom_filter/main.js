//ENUNCIADO: Iterar elememto a elemento el array y llamar a la función condition para si devuelve true o false

const assert = require('assert').strict;

//Función que crea el array resultado según la condición a la que llama
//Mediante funciones callback
function select(array, conditionCallback) {
    let result = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (conditionCallback(element)){
            result.push(element)
        }
        
    }
}

//función que analiza si cada elemento es par
function pairs (value){
    return value % 2 === 0
}

//función que analiza si cada elemento es mayor que 15
function gt15 (value){
    return value > 15
}

//función que analiza si cada elemento es menor que 10
function lt10 (value){
    return value < 10
}

//función que analiza si cada elemento es impar y menor que 10
function impairLt10 (value){
    return !pairs(value)&& lt10(value)
}


//COMPROBACIONES 
let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])

//fuencion que devuelva impares menores de 10
assert.deepStrictEqual(select(values, impairLt10), [1, 2, 3, 5, 7, 17, 23])