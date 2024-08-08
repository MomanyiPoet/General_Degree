#!/usr/bin/node
let challenge = '30 Days Of JavaScript';

console.log(challenge.split(' '));
console.log(Math.ceil(parseFloat('9.8')) === 10)

let string = 'You cannot end a sentence with because because because is a conjunction'
let pattern = /because/gi
console.log(string.match(pattern))

const now = new Date()
console.log(now)


let base = 10
let height = 20

console.log(`The area of the triangle is ${0.5 * base * height}`)

let a = 4
let b = 3

let message = (a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(message);

let numb = 12
let num = ( numb % 2 === 0) ? `${numb} is an even number` : `${numb} is an odd number`;
console.log(num);

let score = 77
switch (true) {
    case score >= 90 && score <= 100:
        console.log('A');
        break;
    case score >= 70 && score <= 89:
        console.log('B');
        break;
    case score >= 60 && score <= 69:
        console.log('C');
        break;
    case score >= 50 && score <= 59:
        console.log('D');
        break;
    case score >= 0 && score <= 49:
        console.log('F');
        break;
    default:
        console.log('Entered value was not a score');
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const month = 2; // Example: February (0-indexed)
const year = 2024;

const daysInMonth = getDaysInMonth(month, year);
console.log(`Number of days in the month: ${daysInMonth}`);

const countries = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node']
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i].toLowerCase());
}
console.log(countries[Math.ceil((countries.length - 1) / 2)])
console.log(countries.join(' '))
console.log(countries.slice(countries.length - 3, countries.length))

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log("Sorted Ages:", ages.sort());
console.log("Min Age:", ages[0]);
console.log("Max Age:", ages[ages.length - 1]);

// Find the median age(one middle item or two middle items divided by two)
let middle = Math.floor(ages.length / 2)
console.log(`Middle number is: ${middle}, `);

if (ages.length % 1 === 0){
    console.log(`Median of two is: ${(ages[middle - 1] + ages[middle]) / 2}`)
} else {
    console.log(`Median is: ${ages[middle - 1]}`)
}

// Find the average age(all items divided by number of items)
let sum = 0
for (let i = 0; i < ages.length; i++ ) {
    sum += ages[i];
}
console.log(`Average is: ${sum / ages.length}`)

// Find the range of the ages(max minus min)
console.log(`Range is: ${ages[ages.length - 1] - ages[0]}`)