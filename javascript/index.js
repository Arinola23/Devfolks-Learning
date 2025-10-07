//     // object leterals
// const items = [
//     {
//         id : 1,
//          food: "meat",
//          amount: "$20",
//          bought: true  
//     },
//     {
//         id : 2,
//         food: "fish",
//         amount: "$15",
//         bought: false
//     },
//     {
//         id : 3,
//         food: "milk",
//         amount: "$10",
//         bought: true
//     },
// ]

// // const itemsJSON= JSON.stringify(items) //how data is being sent to the server using JSON.stringify
// // console.log(items[1].food)
// // console.log(itemsJSON)

// items.forEach((item) => {
//     console.log(item.food)
// })
//  const filterItems = items.filter((item) => {
//    return item.bought != false
//  }).map((item)=> {return item.bought})

//  console.log(filterItems)

let i = 0

// while(i <= 10) {
//     console.log(`${i}`)
//      i++
// }

//OOP object oriented programming
// constructor function Constructor functions are used to create multiple similar objects quickly, instead of manually writing each object.

// function Person(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     // this.getBirthYear = () => {
//     //     return this.dob.getFullYear()
//     // }
//     // this.getfullName = () => {
//     //     // return `${firstname} ${lastname}`
//     //     return `${this.firstname} ${this.lastname}`
//     // }
//     Person.prototype.getBirthYear = () => {
//         return this.dob.getFullYear()
//     }

//     Person.prototype.getfullName = () => {
//         // return `${firstname} ${lastname}`
//         return `${this.firstname} ${this.lastname}`

//     }

// }

//or class

class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getfullName() {
        return `${this.firstname} ${this.lastname}`
    }
}
const person = new Person("maryam", "dunni", "3-20-2000")
console.log(person.getfullName())