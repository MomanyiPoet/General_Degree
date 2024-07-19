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