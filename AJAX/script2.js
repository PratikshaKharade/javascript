// sync ---- block in nature

// function additionA(){
//     console.log('first')
// }
// function additionB(){
//     console.log('second')
// }

// additionA()
// additionB()


// async --non blocking in nature

// function addA(){
//     setTimeout(function(){
//         console.log('A')
//     },2000)
// }
// function addB(){
//     console.log('B')
// }
// addA()
// addB()


// function addA(){
//     setTimeout(function(){
//         console.log('A')
//     },3000)
// }
// function addB(){
//     setTimeout(function(){
//         console.log('B')
//     },2000)
// }
// function addC(){
//     setTimeout(function(){
//         console.log('C')
//     },1000)
// }
// addA()
// addB()
// addC()

//// call back hell

// function GetInfo() {
//     setTimeout(function () {
//         console.log('user create')
//         setTimeout(function () {
//             console.log('Get Id')
//             setTimeout(function () {
//                 console.log('Get Info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }


// GetInfo()

// promises

// let pro = new Promise(function (resolve, reject) {

//     let a = 10
//     let b = 10
//     if (a == b) {
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
//     return [1,2,3]
// })
// .then(function(aa){
//     console.log(aa)
//     return aa[1]
// })
// .then(function(a){
//     console.log(a)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('finally')
// })


//
// function GetInfo() {
//     setTimeout(function () {
//         console.log('user create')
//         setTimeout(function () {
//             console.log('Get Id')
//             setTimeout(function () {
//                 console.log('Get Info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }

function CreateUser() {
    return new Promise(function () {
        setTimeout(function () {
            console.log('create user')
        },3000)
    })
}

function GetId() {
    return new Promise(function () {
        setTimeout(function () {
            console.log('Get Id')
        },2000)
    })
}

function GetInfo() {
    return new Promise(function () {
        setTimeout(function () {
            console.log('Get Info')
        },1000)
    })
}

CreateUser()
    .then(function (str) {
        console.log(str)
        return GetId()
    })
    .then(function (str) {
        console.log(str)
        return GetInfo()
    })
    .then(function (str) {
        console.log(str)
    })

//

// function userCreate(){
//     return new Promise(function(){
//         setTimeout(() => {
//             console.log('user cerated')
//         }, 3000);
//     })
// }

// function GetID(){
//     return new Promise(function(){
//         setTimeout(() => {
//             console.log('GET ID')
//         }, 2000);
//     })
// }

// function GETInfo(){
//     return new Promise(function(){
//         setTimeout(() => {
//             console.log('user info')
//         }, 1000);
//     })
// }

// userCreate()
// .then(function(str){
//     console.log(str)
//    return GetID()
// })
// .then(function(str){
//     console.log(str)
//     return GETInfo()
// })
// .then(function(str){
//     console.log(str)
// })















