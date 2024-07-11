// // Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
// let results:string | number 
// function functionResults(a:string | number | boolean):string | number | boolean{
//     return a
// }
// functionResults(1)

// let Name: string = "hh";
// let Age: number = 2;
// console.log(Name, Age);


// //second question
//  function combine(a:number,b:boolean | number):boolean | number{
//     if(a){
//         return  a*3
//     }
//     else{
//         return b
//     }
//  }
//  combine(3,true)


//  // Third question

// interface Car{
//     make:string,
//     model:string
// }
// interface byck extends Car{
//     payloadCapacity:number
// }
// type Bus={
//     make:string,
//     model:string, 
//     payloadCapacity:number 
// }
// let bus:Bus={make:'bus',model:'ss',payloadCapacity:300}
// let car:Car={make:'car',model:'txl'}
// type Vehicle= Car | Bus
// const vehicle:Vehicle[]=[car,bus]

// //fourth question
// function CheckingArgument(a:number | string):void{
// if(typeof a === 'number'){
// console.log('the argument is a number')
// }
// else{
//     console.log('the argument is a string')
// }
// }
// CheckingArgument(2)
// CheckingArgument('hi')


// // fifth question

// function booleanReturn(a:number):boolean{
//     if(typeof a === 'number'){
//         return a%2!==0
//     }
//     else{
//         return false
//     }
// }
// booleanReturn(3)


// // sixth question
let array:(string & number)[]

interface User {
    name: string;
    age: number;
}

let users: any[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    "This is a string",
    42
];

// Extracting and asserting the type of the first element
let firstUser = users[0] as User;
console.log(firstUser.name); // Output: Alice
console.log(firstUser.age);  // Output: 25


// seventh 

let anyType:any="hhhh"
let custom = <string> anyType
console.log(typeof custom)


//eighth

   



   