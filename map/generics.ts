function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 };
}
let results = merge({ name: "john" }, { age: 23 });
// console.log(results)

// generic interfaces

interface trial<U> {
  add(o: U): void;
  remove(o: U): void;
}
let newobj: trial<string> = {
  add(name: string) {
    console.log("your name is", name);
  },
  remove(fname: string) {
    console.log("the family name is", fname);
  },
};
// console.log(newobj.add('Doe'))

interface Options<t> {
  [name: string]: t;
}
let optionObj: Options<boolean> = {
  option1: true,
  option2: true,
  option3: false,
  4: true,
};
console.log(optionObj);

let numbers: number[] = [1, 2, 3, 4, 5];

// Contextual typing infers that n is of type number
numbers.forEach((n: number) => console.log(n));

// Overload signatures
function adds(num1: number): number;
function adds(num1: number, num2: number): boolean;

// Implementation
function adds(num1: number, num2?: number): number | boolean {
  if (num2 === undefined) {
    return num1;
  }
  return num1 === num2;
}

// Using the function
console.log(adds(7)); // Output: 7
console.log(adds(7, 7)); // Output: true
console.log(adds(7, 8)); // Output: false


let n:string | number='4'
let c=n as string 

let ben:[number]


let str:number=2
let kn=(str as unknown as string).length
console.log(kn)

interface Animal {
    name: string;
  }
  
  interface  Animal {
    hasFur: boolean;
  }
let objectAnimal:Animal={
    name: 'lion',
    hasFur: true,
   
}  
let tuple:[number,string]=[2,'d']
tuple.push('3')

