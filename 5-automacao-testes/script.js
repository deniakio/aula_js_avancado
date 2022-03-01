// promises

const doSomethingPromise = () =>
    new Promise((resolver, reject) => {
        setTimeout(function () {
            //did something
            resolve('First Data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolver, reject) => {
        setTimeout(function () {
            //did other thing
            resolve('Second Data');
        }, 1000);
    });

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', erro));