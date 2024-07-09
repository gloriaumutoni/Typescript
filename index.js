// Classes
var Invoice = /** @class */ (function () {
    function Invoice(a, b, c) {
        this.client = a;
        this.detail = b;
        this.amount = c;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " will ").concat(this.detail, " $").concat(this.amount);
    };
    return Invoice;
}());
var Invoice1 = new Invoice('mario', 'pay', 390);
var Invoice2 = new Invoice('luigi', 'pay', 190);
// console.log(Invoice1.format(),Invoice2)
// only to receive invoice type
var inv = [];
inv.push(Invoice1);
inv.push(Invoice2);
console.log(inv);
// DOM 
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
