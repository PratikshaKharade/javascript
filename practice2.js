// //map()
// // let num = [100,200,300,400,500]
// // let num2 = num.map(function(el,index,arr){
// //         return el + 10
// // }) 
// // console.log(num2)

// // let num3 = num.map(function(el,index,arr){
// //     if (index > 1){
// //         return el + 10
// //     }

// // })
// // console.log(num3)

// // //filter()
// // let names = ['moni','patu','shital','snehal','rutuja']
// // let names1 = names.filter(function(el,index,arr){
// //     return el.length>4
// // })
// // console.log(names1)


// // let names2 = names.filter(function(el,index,arr){
// //     if(index>=2){
// //     return el.length>4
// //     }
// // })
// // console.log(names2)

// // //reduce()
// // let marks = [66,77,55,88,99,45]
// // let marks1 = marks.reduce(function(acc,el,index,arr){
// //         return acc + el + 1
// // },0)
// // console.log(marks1)

// //forEach()
// let city = ['sangamner','pune','mumbai','chakan']
// let city1 = city.forEach(function(el){
//     if (el.length>4)    
//     console.log('welcome '+ el)
// })
// //console.log(city1)

// // //find()
// // city2 = city.find(function(el){
// //     return el = 's'
// // })
// // console.log(city2)

// // //findIndex()
// // city3 = city.findIndex(function(el){
    
// //     return el
    
// // })
// // console.log(city3)

// // //every()
// // let number = [12,11,10,17,19,20]
// // let n1 = number.every(function(el){
// //     return el > 9
// // })
// // console.log(n1)

// // //some()
// // n2 = number.some(function(el){
// //     return el > 17
// // })
// // console.log(n2)

// // //sort()          0      1       2       3        4
// // let friends = ['moni','patu','shital','snehal','rutuja']
// // //               -5    -4       -3      -2        -1  
// // //console.log(friends.sort())

// let numbers = [1988,1998,1996,1997,1998]
// let nn = numbers.map(function(el,index,arr){
//     if(index>1){
//         return 2022 - el
//     }
// })
// console.log(nn)
// //
// let nn2 = numbers.reduce(function(acc,el,index,arr){
    
//         return acc + el
// },0)
//     console.log(nn2)
// // //slice()
// // console.log(friends.slice(0))
// // console.log(friends.slice(0,-2))
// // console.log(friends.slice(-5, 3))
// // console.log(friends.slice(-4,4))
// // console.log(friends.slice(-2,1))

let year1 = [2000,2001,2002,2003,2004]
let y = year1.map(function(el,index,arr){
    return 2022 - el
})
console.log(y)

//
let num1 = [33,44,22,33,44,55]
let num30 = num1.filter(function(el,index,arr){
    return el > 40
})
console.log(num30)

//
let num2 = [100,200,300]
let sum = num2.reduce(function(acc,el,index,arr){
    return acc = acc + el
},0)
console.log(sum)

//
let citis = ["mumbai","pune","chennai","kolkata"]
let city1 = citis.forEach(function(el,index,arr){
    console.log('hello '+el)
})
//

let num3 = [33,44,11,111,223,44,55,22]
let numf = num3.find(function(el,index,arr){
    return el > 200
})
console.log(numf)
//
let numfi = num3.findIndex(function(el,index,arr){
    return el > 200
}) 
console.log(numfi)
//
let nume = num3.every(function(el,index,arr){
    return el > 10
}) 
console.log(nume)
//
let nums = num3.some(function(el,index,arr){
    return el > 300
})
console.log(nums)
//
//               0         1         2       3          4        
let name1 = ['monika','pratiksha','aadi','rashmika','shital']
// let namesr = name1.sort()
// console.log(namesr)
// 
// let nnn = name1.splice(1,2)` 
// console.log(nnn)
// console.log(name1)

// let nnn2 = name1.splice(1,2,'snehal','rutuja')
// console.log(nnn2)
// console.log(name1)
//
let nnn3 = name1.fill('true',2)
console.log(nnn3)


