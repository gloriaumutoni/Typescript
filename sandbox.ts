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

// array
let newarr:string[]=[]

// mixed types
let ninja:(string|number|boolean)[]=[]
ninja.push('first')
ninja.push(3)
ninja.push(false)
console.log(ninja)
let uid: string|number
// object
