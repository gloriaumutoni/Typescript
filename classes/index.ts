// interfaces with classes



//interfaces
interface Isperson{
    name:string,
    age:number,
    speak(a:string):void
    spend(b:number):number
}
let person:Isperson={
    name:'shaun',
    age:12,
    speak(a:string){
        console.log('he said', a)
    },
    spend(amount:number){
        console.log('he spent',amount)
        return amount
    }
}

function great(people:Isperson){
console.log(person.age)
} 
great(person)
// Classes
import {Invoice} from './invoice.js'

let Invoice1=new Invoice('mario','pay',390)
let Invoice2=new Invoice('luigi','pay',190)

// console.log(Invoice1.format(),Invoice2)

// only to receive invoice type
let inv:Invoice[]=[]
inv.push(Invoice1)
inv.push(Invoice2)
 inv.forEach((inv)=>{
console.log(inv.client,inv.amount,inv.format())
 })
console.log(inv)

// DOM 
// let anchor=document.querySelector('a')!
// console.log(anchor.href)

// let form=document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form)


// interacting with the form
let type=document.querySelector('#type') as HTMLSelectElement
let tofrom=document.querySelector('#tofrom') as HTMLInputElement
let details=document.querySelector('#details') as HTMLInputElement
let amount=document.querySelector('#amount') as HTMLInputElement

let button=document.querySelector('button') as HTMLButtonElement
button.addEventListener('click',(e:Event)=>{
    e.preventDefault()
    console.log(type.value,tofrom.value,details.value,amount.valueAsNumber)
})