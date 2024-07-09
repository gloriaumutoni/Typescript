// Dom 
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