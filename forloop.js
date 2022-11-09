// //
// // for(i = 2; i<20; i=i+2)
// // console.log(i)
// //
// for(let i = 20; i>=0; i--)
// console.log(i)

// for(let i = 3; i>=0; i--)
// console.log(i)

// //
// for(let i=0; i<=10; i++)
// console.log(i)

// //
// if (20>10 || 20<10){
//     console.log('hello')
// }
// else{
//     console.log('bye')
// }

// //
// for(let i=0; i<4; i++){
//     console.log(i)
//     if(i==2){
//         break
//     }
//     //console.log(i)
// }

// //
// let num = [12,33,54,77,55,87,33]
// // let n = num.filter(function(el){
// //     return el>30
// // })
// // console.log(n)
// for(let i = 0; i<num.length; i++){
//     console.log(i)
// }


let x=[10,20,30,30,84,30,30,38,30]
let count = 0
// for(i=0; i<x.length;i++){
//     if(x[i]==30){
//         count = count+1
//     }
// }
// console.log(count)

let count1 = x.filter(function(el){
    return el==30
})
console.log(count1)

let count3= x.map(function(el){
    if(el==30){
        return el
        //count = count+1
    }
    
    
})
console.log(count3)
