import { Invoice } from "./invoice";
import { Payment } from "./interface/payment";
// //interfaces
// interface Isperson{
//     name:string,
//     age:number,
//     speak(a:string):void
//     spend(b:number):number
// }
// let person: Isperson={
//     name:'shaun',
//     age:12,
//     speak(a:string){
//         console.log('he said', a)
//     },
//     spend(amount:number){
//         console.log('he spent',amount)
//         return amount
//     }
// }
// function great(people:Isperson){
// console.log(person.age)
// } 
// great(person)
// // Classes
// import {Invoice} from './invoice.js'
// let Invoice1=new Invoice('mario','pay',390)
// let Invoice2=new Invoice('luigi','pay',190)
// // console.log(Invoice1.format(),Invoice2)
// // only to receive invoice type
// let inv:Invoice[]=[]
// inv.push(Invoice1)
// inv.push(Invoice2)
//  inv.forEach((inv)=>{
// console.log(inv.client,inv.amount,inv.format())
//  })
// console.log(inv)
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
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice('mario', 'pay', 390);
    }
    else {
        doc = new Payment('mario', 'pay', 390);
    }
    console.log();
});
