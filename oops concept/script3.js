//program 1
// function Person (fn,ag){
//     this.fullName = fn
//     this.age = ag
//     this.display = ()=>{
//         console.log(this.fullName)
//     }
// }
// let pratiksha = new Person('pratiksha kharade',23)
// let prajakta = new Person('prajakta kharade',25)
// console.log(pratiksha)
// console.log(prajakta)
// pratiksha.display()

//program 2

function Person(fn, ag) {
    this.fullName = fn
    this.age = ag

}
Person.prototype.display = function () {
    console.log(this.fullName)
}
let pratiksha = new Person('pratiksha kharade', 23)
let prajakta = new Person('prajakta kharade', 25)
console.log(pratiksha)
console.log(prajakta)
pratiksha.display()


//program 3

// class vahicle  {
//     type = 'SUV'
//     color = 'red'
//     display = function(){
//         console.log(color)
//     }
// }
// let audi = new vahicle()
// let BMW = new vahicle()
// console.log(audi)
// console.log(BMW)

//program 4

class vahicle {
    constructor(type, color) {
        this.type = type
        this.color = color
        this.display = function () {
            console.log(color)
        }
    }

}
let audi = new vahicle('SUV','red')
let BMW = new vahicle('sedane','black')
console.log(audi)
console.log(BMW)
audi.display()
BMW.display()


// //
// class vahicle {
//     constructor(type, color) {
//         this.type = type
//         this.color = color
        
//     }
//     display(){
//         console.log(this.color)
//     }

// }
// let audi = new vahicle('SUV','red')
// let BMW = new vahicle('sedane','black')
// console.log(audi)
// console.log(BMW)
// audi.display()
// BMW.display()

//
//setting the value using method

class student {
    SetFullName(fn){
        this.fullName = fn
    }
    getFullName(){
        return this.fullName
    }
    SetAge(ag){
        this.Age = ag
    }
    getAge(){
        return this.Age
    }
}

let snehal = new student()
console.log(snehal)
snehal.SetFullName('snehal')
console.log(snehal)
snehal.SetAge(24)
console.log(snehal)
snehal.fullName = 'sneha'
console.log(snehal)
console.log(snehal.getAge())
console.log(snehal.getFullName())


//

class student1 {
    set fn(f){
        this.fullName = f
    }
    get fn(){
        return this.fullName
    }
    set ag(a){
        this.Age = a
    }
    get ag(){
        return this.Age
    }
}
 
let aishwarya = new student1()
console.log(aishwarya)
aishwarya.fn = 'aish'
aishwarya.ag = 23
console.log(aishwarya)
aishwarya.fn = 'aishwarya'