// interfaces with classes
let person = {
    name: 'shaun',
    age: 12,
    speak(a) {
        console.log('he said', a);
    },
    spend(amount) {
        console.log('he spent', amount);
        return amount;
    }
};
function great(people) {
    console.log(person.age);
}
great(person);
// Classes
import { Invoice } from './invoice.js';
let Invoice1 = new Invoice('mario', 'pay', 390);
let Invoice2 = new Invoice('luigi', 'pay', 190);
// console.log(Invoice1.format(),Invoice2)
// only to receive invoice type
let inv = [];
inv.push(Invoice1);
inv.push(Invoice2);
inv.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(inv);
// DOM 
// let anchor=document.querySelector('a')!
// console.log(anchor.href)
// let form=document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form)
// interacting with the form
let type = document.querySelector('#type');
let tofrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
let button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
