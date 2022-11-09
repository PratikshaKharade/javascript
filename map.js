
// // let a = [11,22,33,44,55]
// // let res= a.map(function(el,index,arr){
// //     //console.log(el,index,arr)
// //     return el + 2
// // })
// // console.log(res)

// let num = [11,22,33,55,33]

// num.map(function(el,index,arr){
// console.log(arr)

// })

// //
// let year = [1989,1991,1994,1997,1998]
// let aa = year.map(function(el,index,arr){
//    return 2022 - el
//     //console.log(el,index,arr)
    
// })
// console.log(aa)

//filter
let nums = [12,2,34,12,34]
let aa = nums.filter(function(el){
    return el > 10

})
console.log(aa)

nums.map(function(el){
    if(el > 10){
        console.log(el)
    }

})

//let nums = [12,2,34,12,34]
let aaa = nums.reduce(function(el,acc){

return acc + el
},0)
 console.log(aaa)

 //every()
// let number = [5,11,10,17,19,20]
// let n1 = number.every(function(el){
//     return el > 9
// })
// console.log(n1)

let number = [5,11,10,17,19,20]
let n1 = number.some(function(el){
    return el > 9
})
console.log(n1)

