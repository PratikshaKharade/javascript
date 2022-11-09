// // Object --- property and method 
// // method --- action and return type

// //             0            1       2
// let names  = ["chinmay","shirish","ram"]

// console.log(names[0]) // chinmay


// // property 
// let a = names.length
// console.log(a)


// // method 

// names  = ["chinmay","shirish","ram"]

// let bb  =names.push('sarika')
// console.log(bb)
// console.log(names)

// let cc  =names.unshift('poorva')
// console.log(cc)
// console.log(names)


// let dd  =names.pop()
// console.log(dd)
// console.log(names)


// let ee  =names.shift()
// console.log(ee)
// console.log(names)

// let ff  =names.includes("chinmay")
// console.log(ff)

// let gg  =names.indexOf("ram")
// let hh = names.indexOf('Ram')
// console.log(gg)
// console.log(hh)


// //------------------------------------------------>

// //             0          1       2       3
// let fruits = ["apple","mango","banana","chikoo"]

// console.log(fruits[0])
// console.log(fruits[fruits.length-1])

// length - 1 is always index which will give you last element

for(let i = 0 ; i < 4; i++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 // 1 // 2 // 3
}

for(let i = 1 ; i < 4 ; i++){  //1 //2 //3 // 4
    console.log(i) // 1 // 2 // 3
}

///                0         1         2        3
let vegetable = ["potato","tomato","brinjal","cabbage"]

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    console.log(vegetable[i])
   // console.log('hello')
    // i - 0
    // i - 1
    // i - 2
    // i - 3
}




// program 1

//            0     1    2    3
let years = [1989,1990,1991,1992]
let ages = [] 
// [33,32,31,30]

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(years[i])
    //console.log(2022 - years[i])
    let ag = 2022 - years[i]
    ages.push(ag)

}
console.log(ages)

// program2 
//             0   1  2  3  4   5
let numbers = [44,55,11,22,33,10]
let above30 = []
//[44,55,33]

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    if(numbers[i] > 30){
        above30.push(numbers[i])
    }
}
console.log(above30)

// program 3
//            0  1   2
let marks  = [11,22,33]  // 66
let sum = 0

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
   // console.log(marks[i])

   sum = sum + marks[i]
   //    0   +    11    ====> 11
   //    11  +     22   =====> 33
   //     33  +    33   =====>  66
}

console.log(sum)

