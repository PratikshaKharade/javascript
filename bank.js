// function addition() {

//     let x = 10
//     let y = 15
//     console.log(x + y)
//     //console.log(a+b)
//     function additionB() {
//         let a = 30
//         let b = 15
//         //console.log(d+e)
//         console.log(x + y + a + b)
//         function additionC() {
//             let d = 10
//             let e = 70
//             console.log(a + b + e + d + x + y)
//         }
//         additionC()
//     }

//     additionB()

// }
// addition()

// // program 2

// function Sub(x, y) {
//     console.log(x - y)
//     return x - y
//     console.log('hello')
// }
// let q1 = Sub(10, 5)
// console.log(q1)


// program 3

// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     if (type == "deposit") {
//         let deposit = function (amount) {
//             bal = bal + amount
//         }
//         deposit(amount)
//     }
//     else {
//         let withdrawl = function (amount) {
//             if (bal > amount) {
//                 bal = bal - amount
//             }
//         }
//         withdrawl(amount)
//     }

//     let rate = function(){
//         return bal * 0.6
//     }

//     //return bal

//     return [bal,name,rate]
// }

// basic
// let q11 = Bank(1000,"deposit") // 1000
// q11 = Bank(1500,"deposit")// 2500
// q11 = Bank(1500,"withdrawl") // 1000
// console.log(q11)


// let q11 = Bank(1000,"deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]

// let r22 =  function(){
//     return bal * 0.6
// }

// let tt = r22()
// console.log(tt)


/Copy - 2/



// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     let deposit = function (amount) {
//         bal = bal + amount
//     }
//     let withdrawl = function (amount) {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate = function () {
//         return bal * 0.6
//     }
//     type == "deposit" ? deposit(amount) : withdrawl(amount)
//     return [bal, name, rate]
// }

// let q11 = Bank(1000, "deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]
// let tt = r22()
// console.log(tt)


// Copy -3

// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     let deposit =  (amount) => bal = bal + amount
//     let withdrawl =  (amount) => {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate = ()=> bal * 0.6
//     type == "deposit" ? deposit(amount) : withdrawl(amount)
//     return [bal, name, rate]
// }

// let q11 = Bank(1000, "deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]
// let tt = r22()
// console.log(tt)