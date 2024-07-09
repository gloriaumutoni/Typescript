// Classes
var Invoice = /** @class */ (function () {
    // readonly client:string
    // private detail:string
    //  public amount:number
    // constructor(a:string,b:string,c:number){
    //     this.client=a
    //     this.detail=b
    //     this.amount=c
    // }
    // a shorter way to do it
    function Invoice(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
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
inv.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
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
