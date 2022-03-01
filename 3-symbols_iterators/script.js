/*

// symbols - maneira de informar um identificador unico

const uniqueId = Symbol('Hello');

// Well known symbols

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital innovation One';

const obj = {
    values [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values(i);
                }
            }
        };

const arr2 = [...obj];


// Generators

function* hello(){
    console.log('Hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('Function');
}

hello();

*/

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

