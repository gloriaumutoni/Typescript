// Generics

let gen =<T extends {name:string}>(obj:T)=>{
    let uid=Math.floor(Math.random()*100)
    return {...obj,uid}
}
let od=gen({name:'yoshi',age:31})
console.log(od.age)