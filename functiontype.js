// // //
// // let a = 10
// // let b = 20

// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)
// // console.log(a%b)

// // // function without parameter and without return type
// // function add(){
// //     console.log(10+10)
// // }
// // add()
// // add()

// // //function with parameter and without returntype
// // function mul(a,b){
// //     console.log(a*b)
// // }
// // mul(12,3)
// // mul(10,3)

// // // function with parameter and with return type
// // function sub(s,t){
// //     return s-t
// // }
// // let tt = sub(10,5)
// // console.log(tt)
// // console.log(tt + 10)

// // //function declaration
// // function sub1(m,p){
// //     console.log(m-p)
// //     return m-p
// // }
// // let a1=sub1(10,5)
// // console.log(a1)

// // //function expression
// // let addA = function(q,r){
// //     console.log(q+r)
// //     return q + r
// // }
// // let a2 = addA(10,30)
// // console.log(a2)

// // // arrow function
// // let addB = (e,t)=>{
// //     console.log(e+t)
// //     return e+t
// // } 
// // let t1 = addB(100,100)
// // console.log(t1)

// // // string as a parameter to f function and string as a returntype
// // function greeting(greet){
// //     console.log(greet + " pratiksha"+ " !")
// //     return greet + " pratiksha"+ " !"
// // }
// // let g = greeting(" Good Morning")
// // console.log(g)

// // //



// // //array as a parameter to a function and array as a returntype from a function
// // let numbars=[11,22,33,44,55,66,77]
// // function Add(arr){
// //     let aa1=arr.reduce(function(acc,el){
// //         return acc + el
// //     },0)
// //     console.log(aa1)
// //     return arr.slice(-3)

// // }
// // let aa = Add(numbars)
// // console.log(aa)
// // //
// // let num = [12,33,43,56,75,55]
// // function Above30(arr1){
// //     let mm = arr1.filter(function(el){
// //         return el>30
// //     })
// //     console.log(mm)

// //     return arr1.fill("x",2)

// // }
// // let aa2 = Above30(num)
// // console.log(aa2)

// //
// // let names=['pratiksha','monika','rutuja','shital','snehal']
// // function addName(Add){
// //     console.log(names)
// //     Add.push('rupali')
// //     return Add.push('rupali')
// // }
// // let z3 = addName(names)
// // console.log(z3)
// // console.log(names)



// //object as a parameter to a function and object as a returntype from a function
// // let info = {
// //     firstName:'pratiksha',
// //     lastName:"kharade",
// //     City:"Nagpur"
// // }
// // function updatesity(obj){

// //     obj.city="sangamner"
// //     return obj
// // }
// // let Z = updatesity(info)
// // console.log(Z)

// // //
// // let info1 = {
// //     firstName:"monika",
// //     lastName:"gosavi",
// //     age:23
// // }
// // function AddCity(aad){
// //     aad.city="sangamner"  
// //     return aad  
// // }
// // let z1 = AddCity(info1)
// // console.log(z1)



// //function declaration
// function add(a, b) {
//     console.log(a + b)
//     return a + b
// }
// let a1 = add(10, 20)
// console.log(a1)

// //function expression
// let sub = function (x, y) {
//     console.log(x - y)
//     return x - y
// }
// let aa2 = sub(20, 10)
// console.log(aa2)

// //arrow
// let subA = (m, t) => {
//     console.log(m - t)
//     return m - t

// }
// let ss = subA(30, 10)
// console.log(ss)

// //string as a parameter to f function and string as a returntype
// function says(aaa) {
//     console.log(aaa + " monika")
//     return aaa + " monika"
// }
// let dd = says("what are you doing")
// console.log(dd)

// //number as a parameter to a function 
// function mul(s, y) {
//     return s * y
// }
// let sy = mul(12, 3)
// console.log(sy)

// //
// let number = [11, 22, 33, 44, 65, 65]
// function multi(arr){
//     let mm1 = arr.reduce(function(acc,el){
//         return acc * el
//     },1)
//     console.log(mm1)
//     return arr.slice(-3)

//     }
// let m1 = multi(number)
// console.log(m1)


// //
// let info1 ={
//     firstName:"pratiksha",
//     lastName:"kharade",
//     city:"mumbai" 
// }
// function AddAge(age1)
// {
//     age1.age = 24
//     return age1
// }
// let aa4 = AddAge(info1)
// console.log(aa4)


//function as a parameter to anotehr function
let substraction = function(x,y){
    return x-y
}
function sub(a,b,fn){
    let s1 = fn(a,b)
return s1
}
let s2 = sub(12,6,substraction)
console.log(s2)
  
// function as a returntype from another function
function additionD(){
    return function(){
        console.log('hello')
    }
}
let tty = additionD()
tty()
console.log(tty)