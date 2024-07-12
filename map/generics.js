"use strict";
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let results = merge({ name: "john" }, { age: 23 });
let newobj = {
    add(name) {
        console.log("your name is", name);
    },
    remove(fname) {
        console.log("the family name is", fname);
    },
};
let optionObj = {
    option1: true,
    option2: true,
    option3: false,
    4: true,
};
console.log(optionObj);
let numbers = [1, 2, 3, 4, 5];
// Contextual typing infers that n is of type number
numbers.forEach((n) => console.log(n));
// Implementation
function adds(num1, num2) {
    if (num2 === undefined) {
        return num1;
    }
    return num1 === num2;
}
// Using the function
console.log(adds(7)); // Output: 7
console.log(adds(7, 7)); // Output: true
console.log(adds(7, 8)); // Output: false
let n = '4';
let c = n;
let ben;
let str = 2;
let kn = str.length;
console.log(kn);
let objectAnimal = {
    name: 'lion',
    hasFur: true,
};
let tuple = [2, 'd'];
tuple.push('3');
