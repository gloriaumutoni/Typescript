"use strict";
const character = "mario";
const age = 32;
const BlackBelt = false;
const circ = (diameter) => diameter * Math.PI;
console.log(circ(3));
let arr = ["first", 2, "third"];
arr.push("four");
arr[0] = 1;
console.log(arr);
let obj = {
    name: "jay",
    belt: "red",
    age: 34,
};
obj.name = "amanda";
// obj["fav"] = "1";
obj = {
    name: "yoshin",
    belt: "black",
    age: 23,
};
console.log(obj);
// Explicit types
let firstName;
let ages;
let isLogIn;
//using boolean constructor
let isDone = new Boolean(false);
console.log(isDone);
// array
let newarr = [];
// mixed types
let ninja = [];
ninja.push("first");
ninja.push(3);
ninja.push(false);
console.log(ninja);
let uid;
console.log(ninja);
//tuple
let user;
user = [1, "John", true];
user[2] = false;
console.log(user);
//enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
console.log(Month);
function isItSummer(month) {
    let isSummer;
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
console.log(isItSummer(7));
var approvalStatus;
(function (approvalStatus) {
    approvalStatus[approvalStatus["draft"] = 0] = "draft";
    approvalStatus[approvalStatus["submitted"] = 1] = "submitted";
    approvalStatus[approvalStatus["approved"] = 2] = "approved";
    approvalStatus[approvalStatus["rejected"] = 3] = "rejected";
})(approvalStatus || (approvalStatus = {}));
function trial() {
    let application = {
        id: 1,
        status: approvalStatus.approved,
        description: "application submitted",
    };
    if (application.status === approvalStatus.approved) {
        console.log("submitted");
    }
}
trial();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let bgColor = Color.Green;
console.log(bgColor); // 1
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); //Up
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
let result;
result = 10; // OK
result = "Hi"; // also OK
// result = false; // a boolean value, not OK
//function
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(10, 2));
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
// adding duplicates in tuple
let tuples;
tuples = [1, "1", true, 1];
//how can you extend enum
var EnumA;
(function (EnumA) {
    EnumA["Option1"] = "Option1";
    EnumA["Option2"] = "Option2";
})(EnumA || (EnumA = {}));
var EnumB;
(function (EnumB) {
    EnumB["Option3"] = "Option3";
    EnumB["Option4"] = "Option4";
})(EnumB || (EnumB = {}));
let example;
example = EnumA.Option1; // valid
example = EnumB.Option3; // valid
console.log(example);
let greet = (name, uid) => {
    console.log(typeof name);
};
greet("john", "2");
let trials = (user) => {
    console.log(typeof user);
};
let user1 = {
    name: 'string',
    uid: 3
};
// trials(user1);
// function and parameters type declarations
let greetings;
greetings = (name, greet) => {
    console.log(`${name} is saying ${greet}`);
};
greetings('John', 'hi');
let doc;
doc = (ninjas) => {
    console.log(`${name} is saying ${greet}`);
};
doc({ name: "Naruto", age: 20 });
