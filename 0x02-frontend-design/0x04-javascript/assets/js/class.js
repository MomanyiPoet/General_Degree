#!/usr/bin/node
class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I am ${this.name}`);
    }

    static messageStatic(){
        console.log('Static Message');
    }
}

// Inheritace
class Hobbies extends Person {
    constructor(name, hobby) {
        super(name);
        this.hobby = hobby;
    }

    introduceSelf2() {
        console.log(`Hi! I am ${this.name} and my hobby is ${this.hobby}`);
    }
}

let Poet = new Person('Momanyi');
Poet.introduceSelf();

Person.messageStatic();

let Samuel = new Hobbies('Samuel', 'Basketball');
Samuel.introduceSelf2();