// Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
let results:string | number 
function functionResults(a:string | number | boolean):string | number | boolean{
    return a
}
functionResults(1)

let Name: string = "hh";
let Age: number = 2;
console.log(Name, Age);
