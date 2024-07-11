"use strict";
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let results = merge({ name: 'john' }, { age: 23 });
let newobj = {
    add(name) {
        console.log('your name is', name);
    },
    remove(fname) {
        console.log('the family name is', fname);
    }
};
let optionObj = {
    option1: true,
    option2: true,
    option3: false,
    4: true
};
console.log(optionObj);
