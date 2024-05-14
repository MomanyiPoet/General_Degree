#!/usr/bin/node
exports.esrever = function (list){
    let element = [];
    for ( let i = 0; i < list.length; i++){
        element = element.unshift(list[i]);
    }
    return element;
};

