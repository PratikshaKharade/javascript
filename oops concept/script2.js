// //object literals
// let pratiksha = {
//     FirstName: "pratiksha",
//     LastName: "kharade",
//     RollNo: 33,
//     Age: 23,
//     display: function () {
//         console.log(this.FirstName + " " + this.LastName)
//     }
// }
// pratiksha.display()
// console.log(pratiksha)

// //function cunsrtuctor
// let Person = function (fn, ln, rn, ag) {
//     this.FirstName = fn,
//         this.LastName = ln,
//         this.RollNo = rn,
//         this.Age = ag,
//         this.display = function () {
//             console.log(this.FirstName + " " + this.LastName)
//         }
// }

// let prajakta = new Person("prajakta", "Kharade", 44, 22)
// console.log(prajakta)
// prajakta.display()

// //Es6 class

// class Person2 {
//     constructor(fn, ln, rn, ag) {
//         this.FirstName = fn,
//             this.LastName = ln,
//             this.RollNo = rn,
//             this.Age = ag,
//             this.display = function () {
//                 console.log(this.FirstName + " " + this.LastName)

//             }
//     }
// }
// let monika = new Person2('monika', 'gosavi', 22, 33)
// console.log(monika)
// monika.display()

// //create object

// let obj = {
//     init: function (fn, ln, rn, ag) {
//         this.FirstName = fn,
//             this.LastName = ln,
//             this.RollNo = rn,
//             this.Age = ag,
//             this.display = function () {
//                 console.log(this.FirstName + " " + this.LastName)

//             }
//     }

// }
// let shital = Object.create(obj)
// shital.init('shital','ghule',33,66)
// console.log(shital)
// shital.display()



class Person2 {
        constructor(fn, ln, rn, ag) {
            this.FirstName = fn,
                this.LastName = ln,
                this.RollNo = rn,
                this.Age = ag,
                this.display = function () {
                    console.log(this.FirstName + " " + this.LastName)
    
                }
        }
    }
    Person2.prototype.display = function () {
        console.log(this.FirstName + " " + this.LastName)

    }
    let rutuja = new Person2('rutuja','jadhav',12,23)
    console.log(rutuja.__proto__)
    console.log(rutuja.__proto__ === Person2.prototype)
    console.log(Person2.prototype)
    rutuja.display()

    Array.prototype.language = 'hindi'
    let names = ['pooja','priti','rupali','sonal']
    console.log(names)
console.log(names.__proto__)
console.log(Array.prototype)
//console.log(Array.names)


//

let student = function(name,age){
    this.name = name,
    this.age  = age
}
student.prototype.city='sangamner'
let aishwarya = new student('aishwarya','dherange')
console.log(aishwarya)
console.log(aishwarya)
console.log(aishwarya.city)
console.log(aishwarya.hasOwnProperty('name'))
console.log(aishwarya.hasOwnProperty('city'))
//aishwarya.__proto__.city = "mumbai"
console.log(aishwarya)