// Dom 
// let anchor=document.querySelector('a')!
// console.log(anchor.href)
// let form=document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form)
// interacting with the form
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var button = document.querySelector('button');
button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
