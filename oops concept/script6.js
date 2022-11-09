// //  over loading and overriding 
// // overloading --- same class class method , different signature
// // overriding ---  different class , same method name and same signture

// class addition {
//     add(a, b, c, d) {
//         if (a != undefined && b != undefined && c != undefined && d != undefined) {
//             console.log(a + b + c + d)
//         }
//         else if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         }
//         else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         }
//     }
// }
// let num = new addition()
// num.add(12, 22, 33, 44)
// num.add(12, 22, 33)
// num.add(12, 22)

// // 
// class worlBank {
//     save() {
//         console.log('I am from saving WB')
//     }
//     loan() {
//         console.log('I am from loan WB')
//     }
// }

// class SBI extends worlBank {
//     save() {
//         console.log('I am from saving SBI')
//         super.save()
//     }
//     loan() {
//         console.log('I am from loan SBI')
//         super.loan()
//     }
// }
// class PNB extends worlBank {
//     save() {
//         console.log('I am from saving PMB')
//         super.save()
//     }
//     loan() {
//         console.log('I am from loan PNB')
//         super.loan()
//     }
// }

// let pune = new SBI()
// let sangamner = new PNB()

// pune.save()
// pune.loan()
// sangamner.save()
// sangamner.loan()

// // Encapulation
// class Person {
//     constructor(fn, ln) {
//         let FirstName = fn
//         let LastName = ln
//         this.display = function () {
//             console.log(FirstName + " " + LastName)
//         }
//     }
// }

// let pratiksha = new Person('pratiksha', 'kharade')
// pratiksha.display()
// //   console.log(pratiksha.FirstName)
// //   console.log(pratiksha.LastName)

// //
// function nums (){
//     let a = 10
//     let b = 20
//     return [a,b]
// }
// let n1 = nums()
// console.log(n1[0])
// console.log(n1[1])
// console.log(n1)

// //
// class vahicle {
//     static color = 'red'
//     static displaycolor = function(){
//         console.log(vahicle.color)
//     }
// }
// vahicle.displaycolor()
// console.log(vahicle.color)




// class student {
//     static firstname = 'pratiksha'
//     static lastname = 'kharade'
//     static displayname = function(){
//         console.log(firstname+lastname)
//     }
// }
//  console.log(student)
//  student.displayname()


//count the number objects created via class


class Person2 {
    static noofobject = 0;
    constructor(fn,ln){
    
        this.firstname = fn
        this.lastname =ln
        Person2.noofobject += 1

    }
}
let pratiksha = new Person2('pratiksha','kharade')
let prajakta = new Person2('prajakta','kharade')
let pranita = new Person2('pranita','kharade')
console.log(Person2)
console.log(Person2.noofobject)