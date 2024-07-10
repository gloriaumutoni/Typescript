// Generics

let gen =<T extends {name:string}>(obj:T)=>{
    let uid=Math.floor(Math.random()*100)
    return {...obj,uid}
}
let od=gen({name:'yoshi',age:31})
console.log(od.age)

// Generics with interfaces

interface Resource<T>{
    name:string,
    age:number,
    data:T
}
 
const docThree:Resource<string[]>={
    name:'yoshi',
    age:32,
    data:['middle aged man','with skills']
}

const docOne:Resource<string>={
    name:'luigi',
    age:10,
    data:'car racer'
}