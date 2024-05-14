#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    contents: ['luigi', 'salvator', 'max', 'pimp', 'jackson', 'maria'],
    login(){
        console.log("Unable to LOGIN");
    },
    logContents(){
        this.contents.forEach( content => console.log(content) );
    }
};

console.log(myObject);
myObject.logContents();
myObject.value = 89;
console.log(this);