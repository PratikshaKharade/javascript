// //
// function addA() {
//     console.log('a')
// }
// function addB() {
//     console.log('b')
// }
// addB()
// addA()

// //
// function addition() {
//     setTimeout(function () {
//         console.log('first')
//     }, 1000)

// }
// function additionA(){
//     console.log('second')
// }

// addition()
// additionA()

//



// // 

// function numA() {
//     setTimeout(function () {
//         console.log('first')
//     }, 3000)
// }
// function numB() {
//     setTimeout(function () {
//         console.log('second')
//     }, 2000)
// }
// function numC() {
//     setTimeout(function () {
//         console.log('third')
//     }, 1000)
// }

// numA()
// numB()
// numC()



//call back hell

// function num() {
//     setTimeout(function () {
//         console.log('first')
//         setTimeout(function () {
//             console.log('second')
//             setTimeout(function () {
//                 console.log('third')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// num()


//promose

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (b !== b) {
//         resolve('equal')
//     }
//     else {
//         reject('not equal')
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

//with catch and finally

//let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 111
//     if (a == b) {
//         resolve('equal')
//     }
//     else {
//         reject('not equal')
//     }
// })
// pro.then(function (a) {
//     console.log(a)
// })
//     .catch(function (b) {
//         console.log(b)
//     })
//     .finally(function(){
//         console.log('finally')
    // })

    //
    let pro = new Promise (function(resolve,reject){
        a = 10
        b = 111

        if(a==b){
            resolve('equal')
        }
        else {
            reject('not equal')
        }
    })
    pro.then(function(str){
        console.log(str)

    },function(str){
        console.log(str)
    })

    //
    let pro1 = new Promise(function(resolve,reject){
        m = 30
        p = 30

        if(m == p){
            resolve('equal')
        }
        else {
            reject('not equal')
        }
    })
    .then(function(a){
        console.log(a)
    })
    .catch(function(b){
        console.log(b)
    })
    .finally(function(){
        console.log('finally')
    })
