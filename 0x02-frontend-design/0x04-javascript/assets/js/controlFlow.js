// LOOPS ITERATIONS
// for loop
const names = ['luigi', 'salvator', 'max', 'pimp', 'jackson', 'maria'];

for ( let i = 0; i < names.length; i++){
    console.log('Name ', i + 1, names[i]);

    if (names[i] === 'salvator') {
        console.log('Leader of the Salvatore family');
        continue;
    }
}
console.log('End for loop', '\n');

// while loop
let j = 0;
while ( j < names.length ){
    console.log('Name ', j + 1, names[j]);
    j++;
}
console.log('End while loop', '\n');

// CONDITIONAL STATEMENTS
// if statement
if (  names.length === 3 ){
    console.log('Maximum number reached');
} else if ( names.length < 3 ) {
    console.log('Minimum number');
} else {
    console.log('Excess number');
}
console.log('Optimum number = 3, End if else if loop', '\n');