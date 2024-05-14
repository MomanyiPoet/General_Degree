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