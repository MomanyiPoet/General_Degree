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
