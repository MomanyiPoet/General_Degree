## INTRODUCTION TO JAVASCRIPT

## Table of contents

- [Overview](#overview)
    - [Induction](#induction)
    - [Introduction](#introduction)
- [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
- [Data Types](#data-types)
- [Variables](#variables)
- [Conditional Statements + Control Flow](#conditional-statements--control-flow)
- [Loops](#loops)
- [Functions](#functions)
- [Scope](#scope)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Induction
- We will be creating a Weather API project. The Portfolio Project will be found at the Root Repository.

### Introduction
- JavaScript is the Scripting Language invented by Brendan Eich in 1995 for the Web and designed to update and change both HTML and CSS.

- JavaScript can be used for calculation, manipulation of content, and validating data.

## Adding JavaScript to a Web Page
- Inline script
- Internal script
- External script
- Multiple External scripts

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <!-- Inline Script -->
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>

    <!-- Internal Script -->
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>

    <!-- External JavaScript, Multiple External scripts -->
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

## Data Types

### Primitive data types
- They are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it, they include:

**Number**
- negative, zero and positive ( -3, -2, -1, 0, 1, 2, 3)
- Float-point numbers, decimal number (-3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5)

**String**
```JS
let string1 = 'I hope you are enjoying the first day'
let string2 = `We can also create a string using a backtick`
```

**Boolean**
```JS
true // if the light is on, the value is true
false // if the light is off, the value is false
```

**Undefined**
- If we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```JS
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

**Null**
- Null means an empty value.

**Symbol**

### Non-primitive data types
- They are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.

**Arrays**
- An array is a list of data values in a square bracket. Arrays can contain the same or different data types. 
- Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.
- Available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

```JS
// This the most recommended way to create an empty list
const arr = []

let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)  // [10, 2, 3]

// creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList) // To concatenate two arrays.
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// Getting index an element in array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

const numbers = [1, 2, 3, 4, 5, 3, 1, 2] //Getting last index of an element in arrays
console.log(numbers.lastIndexOf(2)) // 7

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false

// Array.isArray:To check if the data type is an array
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false

// toString:Converts array to string
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// joining array elements
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Push: adding item in the end. To add item to the end of an existing array
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

// pop: Removing item in the end.
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]

// shift: Removing one array element in the beginning of the array.
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

// unshift: Adding array element in the beginning of the array.
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

// reverse: reverse the order of an array.
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

// sort: arrange array elements in ascending order. Sort takes a call back function
const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// array of arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
```

**Object**

### Changing Data Type (Casting)
- Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

### Operators in Javascript
**Assignment Operator**
![alt text](assets/images/assignment.png)

**Arithmetic Operators**
```JS
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b
```

**Comparison (Relational) Operators**
![alt text](assets/images/comparison.png)

**Logical Operators**
- The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

**Increment Operator**
```JS
// pre-increment
let count = 0
console.log(++count) // 1
console.log(count) // 1

// Post-increment
let count = 0
console.log(count++) // 0
console.log(count) // 1

// Pre-decrement
let count = 0
console.log(--count) // -1
console.log(count)  // -1

// Post-decrement
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

**Ternary Operators**
- Another way to write conditionals is using ternary operators
```JS
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

**Bitwise Operators**

**Special Operators**


## Variables
- Variables are containers of data. Variables are used to store data in a memory location.
- Variable name should not begin with a number.
- Variable name does not allow special characters except dollar sign and underscore.
- Variable name follows a camelCase convention.
- Variable name should not have space between words.

**var**
- variable that changes at a different time

**let**

**const**
- variable data does not change at all

## Conditional Statements + Control Flow
- Conditional statements are used for make decisions based on different conditions, sequential flow of execution can be altered in two ways:
- Conditional execution: a block of one or more statements will be executed if a certain expression is true
- Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true.
- **Statements** - if, if-else, else-if, switch, ternary operators

```JS
// if statement
if (condition) {
  //this part of code runs for truthy condition
}

// If Else statement
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}

// If Else-IF Else
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}

// swith
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}

// Ternary Operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

## Loops
- Entry Controlled loops - the test condition is tested before entering the loop body. For Loop and While Loop are entry-controlled loops.
- Exit Controlled Loops: the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. The do-while loop is exit controlled loop.

```JS
// For Loop
for(initialization, condition, increment/decrement){
  // code goes here
}
for(let i = 0; i <= 5; i++){
  console.log(i) // 0 1 2 3 4 5
}

// while Loop
let i = 0
while (i <= 5) {
  console.log(i) // 0 1 2 3 4 5
  i++
}

// do while
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5) // 0 1 2 3 4 5

// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
for (const element of arr) {
  // code goes here
}
```

## Functions
- A function is a reusable block of code or programming statements designed to perform a certain task.
- Function Declaration and Function Expression, Anonymous Function, Arrow Function
- Function Call

```JS
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses

// Function without a parameter and return
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}
square() // 4

// Function returning value
function square() {
    let num = 2
    let sq = num * num
    return sq
}
console.log(square())

// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
function square(number) {
    return number * number
}
console.log(square(3))

// Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}
console.log(sumTwoNumbers(10, 20))

// Function with unlimited number of parameters
// Unlimited number of parameters in regular function
function sumAllNums() {
 console.log(arguments)
}
sumAllNums(1, 2, 3, 4)

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4))
console.log(sumAllNums(10, 20, 13, 40, 10))
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))

// Unlimited number of parameters in arrow function
// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function.
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4))

// Arrow Function
const square = n => {
  return n * n
}
console.log(square(2))

// Function with default parameters
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

## Scope
- Global Scope
```JS
// A globally declared variable can be accessed every where in the same file

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file

function letsLearnScope() {
  console.log(a, b) // JavaScript 10
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10
```

- Local Scope - block scope, function scope
```JS
// A variable declared as local can be accessed only in certain block code
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10
  let value = false
  // block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10
```

## Objects
- Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order.

```JS
// an empty object
const person = {}

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}
```

**We can access values of object using two methods:**
- using . followed by key name if the key-name is a one word
- using square bracket and a quote

```JS
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
```

**Creating object methods**
- Now, the person object above has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object.
- We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.

**Object Methods**
- There are different methods to manipulate an object.
```JS
// Object.assign: To copy an object without modifying the original object
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  }
}
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country', 'address']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// Object.values:To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))

```


- class, super, extends - ES6
- Inheritance
- Object prototypes

## User Input
- Alerts
- Confirm
- Prompt

## Useful Resources
- [30DaysOfJavascript](https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master)
- [MDN Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [https://github.com/mbeaudru/modern-js-cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Portfolio](https://portfolio-momanyi-brian.vercel.app)