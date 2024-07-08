const character='mario'
const age=32
const BlackBelt=false

const circ=(diameter:number)=>diameter*Math.PI
console.log(circ(3))

let arr=['first',2,'third']
arr.push('four')
arr[0]=1
console.log(arr)

let obj={
  name:'jay',
  belt:'red',
  age:34
}
obj.name='amanda'
obj["fav"]='1'

 obj={
  name:'yoshin',
  belt:'black',
  age:23
 }
 console.log(obj)


 // Explicit types
let firstName:string
let ages:number
let isLogIn:boolean

//using boolean constructor
let isDone: Boolean = new Boolean(false);
console.log(isDone)

// array
let newarr:string[]=[]

// mixed types
let ninja:(string|number|boolean)[]=[]
ninja.push('first')
ninja.push(3)
ninja.push(false)
console.log(ninja)
let uid: string|number

console.log(ninja)


//tuple
let user: [number, string, boolean];
user = [1, "John", true];
user[2]=false
console.log(user)


//enum
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
};
console.log(Month)


function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
      case Month.Jun:
      case Month.Jul:
      case Month.Aug:
          isSummer = true;
          break;
      default:
          isSummer = false;
          break;
  }
  return isSummer;
}
console.log(isItSummer(7))


enum approvalStatus{
    draft,
    submitted,
    approved,
    rejected

}
function trial(){
  let application={
    id:1,
    status:approvalStatus.approved,
    description:'application submitted'
  }
  if(application.status===approvalStatus.approved){
    console.log('submitted');
  }
}
trial()

enum Color {
  Red,
  Green,
  Blue
}

let bgColor: Color = Color.Green;
console.log(bgColor)// 1

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;
console.log(move)//Up


// // Initial enum declaration
// enum Status {
//   Pending,
//   Approved,
//   Rejected
// }

// // Extending the enum
// enum Status {
//   InReview,
//   OnHold
// }

// let currentStatus: Status = Status.InReview;
// console.log(currentStatus); // Output: 3


let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
// result = false; // a boolean value, not OK


//function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10,2))

function applyDiscount(price: number, discount: number=0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95


