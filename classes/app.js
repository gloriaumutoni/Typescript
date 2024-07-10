"use strict";
// Generics
let gen = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let od = gen({ name: 'yoshi', age: 31 });
console.log(od.age);
const docThree = {
    name: 'yoshi',
    age: 32,
    data: ['middle aged man', 'with skills']
};
const docOne = {
    name: 'luigi',
    age: 10,
    data: 'car racer'
};
