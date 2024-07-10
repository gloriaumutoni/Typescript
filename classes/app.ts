// Generics

let gen =<T extends {name:string}>(obj:T)=>{
    let uid=Math.floor(Math.random()*100)
    return {...obj,uid}
}
let od=gen({name:'yoshi',age:31})
console.log(od.age)


// enums
enum ResourceType{ Book, Author, Publisher, Film, Director, Company}


// Generics with interfaces

interface Resource<T>{
    name:string,
    resoursetype:ResourceType,
    data:T
}
 
const docThree:Resource<string[]>={
    name:'yoshi',
    resoursetype:ResourceType.Book,
    data:['middle aged man','with skills']
}

const docOne:Resource<string>={
    name:'luigi',
    resoursetype:ResourceType.Director,
    data:'car racer'
}
console.log(docOne,docThree)


// function overloading

function sayHello(name: string): string;
function sayHello(name: string[]): string[];
function sayHello(name: unknown): unknown {
    if (typeof name === 'string') {
        return `Hello there, ${name}!`
    }else if (Array.isArray(name)) {
        return name.map(name => `Hello, ${name}!`);
    }
   throw new Error('Something went wrong');
};
