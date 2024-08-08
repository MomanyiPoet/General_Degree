#!/usr/bin/node

const dog = {
    name: 'Bosco' ,
    legs: 4 ,
    color: 'Brown' ,
    age: 3 ,
    bark: function() {
        return 'woof woof'
    }
}

dog.breed = 'German Sherphard'
dog.getDogInfo =function() {
    return `Dogs name is ${this.name} and age ${this.age}`
}

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.breed);
console.log(dog.bark());
console.log(dog.getDogInfo());

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// Find the person who has many skills
let maxSkillsUser = Object.keys(users).reduce((a, b) => users[a].skills.length > users[b].skills.length ? a : b);
console.log(`User with most skills: ${maxSkillsUser}`);

// Count logged in users and users with points >= 50
let loggedInCount = Object.values(users).filter(user => user.isLoggedIn).length;
let highPointsCount = Object.values(users).filter(user => user.points >= 50).length;
console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with points >= 50: ${highPointsCount}`);

// Find MERN stack developers
let mernDevelopers = Object.keys(users).filter(user => users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('React') && users[user].skills.includes('Node'));
console.log('MERN stack developers:', mernDevelopers);

// Set your name in a new object without modifying the original users object
const newUsers = { ...users, YourName: { email: 'your@email.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 25, isLoggedIn: true, points: 60 } };

// Get all keys of users object
const keys = Object.keys(users);
console.log('Keys:', keys);

// Get all values of users
  