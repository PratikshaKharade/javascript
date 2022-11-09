let year = [1989,1991,1994,1997,1998]
let aa = year.map(function(el,index,arr){
    if (index == 2){
        return 2022-el
    }
    //console.log(el,index,arr)
    
})
console.log(aa)


let num = [11,22,33,44,55,66]
let n = num.filter(function(el,index,arr){
    if (index > 2){
        return el >10
    }
})
console.log(n)

// let names = ['monika','pratiskha','pooja','rutu','shital']
// let na = names.filter(function(el,index,arr){
//     return el.length>5
// })
// console.log(na)

// //
// let fruits = ['apple','banana','chicoo','pineapple','grapes']
//  let f = fruits.filter(function(el,index,arr){
// //console.log(el,index,arr)
// return el.length>=5

// })
// console.log(f)
// //
// //
let nn = [11,22,33,44]
let n1 = nn.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(n1)

// let num2 = [1,2,3,4,5,6,7,8,9,10]
// let n2 = num2.map(function(el,index,arr){
//     return el * 2
// })
// console.log(n2)

// //

    
