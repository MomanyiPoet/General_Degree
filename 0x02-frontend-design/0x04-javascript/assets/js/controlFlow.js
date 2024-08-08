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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let stack of mernStack){
    console.log(stack)
}

let sum = 0
let sum2 = 0
let sums = []
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        sum += i
    }
    if (i % 2 === 1){
        sum2 += i
    }
}
sums.push(sum)
sums.push(sum2)
console.log(sums);

let number = 5; 
let string = '';
for(let i = 1; i <= number; i++){
  for(let j = 1; j <= i; j++){
    string += '*';
  }
  string += "\n";
}
console.log(string);

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const characters2 = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters2.length;
for (let i = 0; i < 6; i++) {
    result += characters2.charAt(Math.floor(Math.random() * charactersLength));
}
const hex = 
console.log('#' + result);

let uniqueNumbers = [];
for (let i = 0; uniqueNumbers.length < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100

    if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
    }
}

console.log(uniqueNumbers);