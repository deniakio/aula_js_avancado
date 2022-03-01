// Arrow functions

/*
var sum = (a, b) => {
    var x = 10

    if (a > b) {

    }
    a + b;
}
console.log(sum(5 + 6));


var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms');

        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();


// Default Function Arguments - capacidade do ES6 de poder atribuir valores-padrao a variaveis e parametros

function multiply(a, b = a) {
    return a * b;
}

console.log(multiply(5));



// Lazy evaluation

function randomNumber() {
    return Math.random() * 10;

}

*/

// Enhanced Object Literals
var obj1 = {
    sum(a+ b) {
        return a + b;
    }
};
console.log(obj1.sum(1, 5));

var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'

};

console.log(obj);