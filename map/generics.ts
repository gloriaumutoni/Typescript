function merge<U extends object,V extends object>(obj1:U,obj2:V){
    return {...obj1,...obj2}
}
let results=merge(
    {name:'john'},
    {age:23}
)
// console.log(results)


// generic interfaces

interface trial<U>{
    add(o:U):void,
    remove(o:U):void
}
let newobj:trial<string>={
    add(name:string){
        console.log('your name is',name)
    },
    remove(fname:string){
        console.log('the family name is',fname)
    }
}
// console.log(newobj.add('Doe'))


interface Options<t>{
    [name:string]:t
}
let optionObj:Options<boolean>={
option1:true,
option2:true,
option3:false,
4:true
}
console.log(optionObj)


let numbers: number[] = [1, 2, 3, 4, 5];

// Contextual typing infers that n is of type number
numbers.forEach((n:number) => console.log(n));


