"use strict";
// Generics
let gen = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let od = gen({ name: 'yoshi', age: 31 });
console.log(od.age);
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Publisher"] = 2] = "Publisher";
    ResourceType[ResourceType["Film"] = 3] = "Film";
    ResourceType[ResourceType["Director"] = 4] = "Director";
    ResourceType[ResourceType["Company"] = 5] = "Company";
})(ResourceType || (ResourceType = {}));
const docThree = {
    name: 'yoshi',
    resoursetype: ResourceType.Book,
    data: ['middle aged man', 'with skills']
};
const docOne = {
    name: 'luigi',
    resoursetype: ResourceType.Director,
    data: 'car racer'
};
console.log(docOne, docThree);
function sayHello(name) {
    if (typeof name === 'string') {
        return `Hello there, ${name}!`;
    }
    else if (Array.isArray(name)) {
        return name.map(name => `Hello, ${name}!`);
    }
    throw new Error('Something went wrong');
}
;
// classes
class Person {
    constructor(cridentials, firstName, lastName) {
        this.cridentials = cridentials;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `my name is ${this.firstName} ${this.lastName} and my cridentials are ${this.cridentials}`;
    }
}
let newb = new Person('fjklsd', 'aime', 'gg');
console.log(newb.getFullName());
class newStudent extends Person {
    getDetails() {
        return `my name is ${this.firstName} ${this.lastName} am new here`;
    }
}
let news = new newStudent('fjklsd', 'tt', 'dd');
console.log(news.getDetails());
