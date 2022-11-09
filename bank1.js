
//
// let bal = 0
// function bank(amount,type){
//     //let name = 'ICICI'
//     if(type=="deposit"){
//     let deposit = function(amount){
//         bal = bal + amount
//     }
//     deposit(amount)
//     }

//     else{
//         withdraw = function(amount){
//             if (bal>amount){
//                 bal = bal - amount
//             }
//         }
//         withdraw(amount)
//         //return bal
//     }

//     let rate = function(){
//          return bal * 0.06
//     }
//     return [bal,rate]

//}
// let aa = bank(1000, "deposit")
// let aa1 = bank(1000,"withdraw")
// aa = bank(1000,"deposit")
// console.log(aa)
// console.log(aa1)

// let q11 = bank(1000,"deposit")
// console.log(q11[0])
// //console.log(q11[1])
// let rr2 = q11[1]
// console.log(rr2)
// let tt = rr2()
// console.log(tt)

//copy 1

// let bal = 0
// function bank(amount, type){
// let deposit = function (amount) {
//     bal = bal + amount
// }
// withdraw = function (amount) {
//     if (bal > amount) {
//         bal = bal - amount
//     }
// }
// let rate = function () {
//     return bal * 0.06
// }
// type == "deposit" ? deposit(amount) : withdraw(amount)
// return [bal, rate]
// }

// let q11 = bank(1000,"deposit")
// q11 = bank(1500,"deposit")
// q11 = bank (1000,"withdraw")
// console.log(q11[0])
// let rr1 = q11[1]
// let tt = rr1()
// console.log(tt)

//copy 3
// let bal = 0
// function bank(amount, type){
//     let name = "ICICI"
//     let deposit =  (amount) =>bal = bal + amount
//     let withdraw = (amount) => {
//     if (bal > amount){
//         bal = bal - amount
//     }
    
// }
// let rate = () => bal * 0.06
// type == "deposit" ? deposit(amount) : withdraw(amount)
// return [bal,name,rate]

// }
// let q11 = bank(1000,"deposit")
// q11 = bank(1500,"deposit")
// q11 = bank (1000,"withdraw")
// console.log(q11[0])
// console.log(q11[1])
// let rr1 = q11[2]
// let tt = rr1()
// console.log(tt)

//

//exact difference between arrow function and expression
// var firstName = "monika"
// var lastName = "gosavi"
// let info = {
// firstName:"pratiksha",
// lastName : "kharade",
// age : 23,
// display: function(){
//     console.log(this.firstName + this.lastName)
//     let display2 = function(){
//         console.log(this.firstName + this.lastName)
//     }
//     display2()
// }

// } 
// console.log(info.display)
// info.display()

// let person = {
//     firstName: "rutuja",
//     lastName:"jadhav",
//     age : 23,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             console.log(this.firstName + =this.lastName)
//         }
//         display2()
//     }
// }
// person.display()

let amol={
    firstName:"amol",
    lastName:"rao",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
amol.display()

let chinmay ={
    firstName : "chinmay",
    lastName: "deshpande"
}
let fn = amol.display
fn()
let fn2 = fn.bind(chinmay)
fn2()
