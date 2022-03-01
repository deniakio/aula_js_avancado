// rest operator ...


//spread operator ... - e utilizado para transformar strings, arrays, objetos literais ou iteraveis em parametros ou arrays

/*
const str = 'Deni Akio Onaya';

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);


//forma normal de desestruturar um array
var arr = ['apple', 'banana', 'orange', ['tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomato]] = ['apple', 'banana', 'orange', ['tomato']];

console.log(tomato);
*/

var arr = [{ name: 'Apple', type: 'fruit' }];
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var fruit1 = arr[0].name;

let [{ name: fruitName }] = arr;

function sum({ a, b }) {
    return a + b;
}
console.log(sum({ a: 5, b: 5 }));