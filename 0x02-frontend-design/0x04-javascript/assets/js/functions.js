#!/usr/bin/node

function factorial(a){
    if ( a === NaN ){
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= a; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(Number(process.argv[2])));

// Arrow functions

const fullNames = (name) => name;
console.log(fullNames("Momanyi"));

const bill = (products, taxApplied) => {
    let totalBill = 0;
    for ( let i = 0; i < products.length; i++){
        totalBill += products[i] + ( products[i] * taxApplied );
    }
    return totalBill;
};
console.log(bill([10, 20, 30], 0.2));

// Callback functions

const names = ['luigi', 'salvator', 'max', 'pimp', 'jackson', 'maria'];

const logName = ( person, index ) => {
    index += 1;
    console.log(`Index no ${index} is ${person} `);
};

names.forEach(logName);


const addNumbers = ( numb1, numb2) => numb1 + numb2
console.log(addNumbers(30, 40))

console.log(Math.max(0, 10, 5))

const findMax = (...arguments) => {
    let maxi = arguments.sort((x, y) => x - y)
    return maxi[maxi.length - 1]
}
console.log(findMax(0, 10, 5, 67, 89, 63))


const printArray = (arr) => {
    for (let arrr of arr){
        console.log(arrr)
    }
}
const arrString = ['luigi', 'salvator', 'max', 'pimp', 'jackson', 'maria'];
printArray(arrString)

function evensAndOdds(numb) {
    let evens = 0;
    let odds = 0;

    for (let i = 0; i <= numb; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    console.log(`Number of evens: ${evens}`);
    console.log(`Number of odds: ${odds}`);
}
evensAndOdds(100);

function sameDataType(dataType) {
    for (let item of dataType) {
        if (typeof dataType[0] !== typeof item) {
            console.log('Different Data Type');
            return
        }
    }
    console.log('Same Data Type');
}
const arrString2 = ['luigi', 'salvator', 'max', 'pimp', 'jackson', 'maria'];
sameDataType(arrString2);