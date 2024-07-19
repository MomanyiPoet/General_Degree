let number1 = 3
let number2 = -3.5

let string1 = 'I hope you are enjoying the first day'
let string2 = `We can also create a string using a backtick`

console.log(number1, number2, string1, string2)
console.log('5' - 3);
console.log('5' + 3);

let randNum = Math.floor((Math.random() * 100) + 1);
let equality = randNum === 80
console.log(`The random number is ${randNum} and equality to 80 is ${equality}`);

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)

let fullName = "Brian Momanyi Nyabuti"
let lastLetter = fullName.length - 1
console.log(`Name is ${fullName} and length is ${fullName.length - 2} last letter is ${fullName[lastLetter]}`)