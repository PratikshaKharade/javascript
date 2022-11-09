// //exact difference between arrow function and expression
// var firstName = "monika"
// var lastName = "gosavi"
// let info = {
// // firstName:"pratiksha",
// // lastName : "kharade",
// // age : 23,
// // display: function(){
// //     console.log(this.firstName + this.lastName)
// //     let display2 = function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// //     display2()
// // }

// // } 
// // console.log(info.display)
// // info.display()

// // let person = {
// //     firstName: "rutuja",
// //     lastName:"jadhav",
// //     age : 23,
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //         let display2 = ()=>{
// //             console.log(this.firstName + =this.lastName)
// //         }
// //         display2()
// //     }
// // }
// // person.display()

// let amol={
//     firstName:"amol",
//     lastName:"rao",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.display()

// let chinmay ={
//     firstName : "chinmay",
//     lastName: "deshpande"
// }
// let fn = amol.display
// fn()
// let fn2 = fn.bind(chinmay)
// fn2()

//bind()
// let shital = {
//     firstName:"shital",
//     lastName:"ghule",
//     display: function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// shital.display()

// let pratiksha = {
//     firstName:"pratiksha",
//     lastName:"kharade"
// }
// let fn = shital.display
// fn()
// let fn2 = fn.bind(pratiksha)
// fn2()

//
let rutuja = {
    firstName:"rutuja",
    lastName:"jadhav"
}
let monika = {
    firstName:"monika",
    lastName:"gosavi"
}
let rupali = {
    firstName:"rupali",
    lastName:"shelke"
}
let display = function(){
    console.log(this.firstName + this.lastName)
}
console.log("bind")
display.bind(rutuja)()
display.bind(monika)()
display.bind(rupali)()

//apply
console.log("apply")
display.apply(rutuja)
display.apply(monika)
display.apply(rupali)

//call 
console.log("call")
display.call(rutuja)
display.call(monika)
display.call(rupali)

