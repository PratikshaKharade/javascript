// // //  Math

// // // Object ====> property and method


// // console.log(Math.floor(12.4))
// // console.log(Math.ceil(12.4))
// // console.log(Math.floor(-12.4))
// // console.log(Math.ceil(-12.4))
// // console.log(Math.round(12.4))
// // console.log(Math.round(12.6))
// // console.log(Math.round(12.5))
// // console.log(Math.abs(-22))
// // console.log(Math.abs(22))

// // console.log(Math.random())  // 0 - 1
// // console.log(Math.random()*6) // 0 - 6
// // console.log(Math.floor(Math.random()*6)+1)


let randomNumber = Math.floor(Math.random()*6)+1 
console.log(randomNumber)
let userInput = prompt('Please enter any value between 1 to 6') 
console.log(userInput)
if(randomNumber == userInput ){
    console.log('you guess is correct')
}
else {
    console.log('your guess is incorrect')
}
// randomNumber == userInput?console.log('you guess is correct'):console.log('your guess is incorrect')

// // allow user to guess 5 tyms 


// let randomNumber = Math.floor(Math.random()*6)+1 
// console.log(randomNumber)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('Please enter any value between 1 to 6') 
//     if(randomNumber == userInput){
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('you guess incorrect')
//     }
// }

// while 


// let randomNumber = Math.floor(Math.random()*6)+1  // 5
// console.log(randomNumber)
// let userInput  // undefined
// //console.log(userInput)

// while(randomNumber != userInput){
//     userInput = prompt('Please enter any value between 1 to 6')  // '5'
//     if(randomNumber == userInput){
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }

// }



// let randomNumber = Math.floor(Math.random()*6)+1  // 6
// console.log(randomNumber)
// let userInput  =prompt('Please enter any value between 1 to 6')  // 6
// //console.log(userInput)
// while(randomNumber != userInput){
//     userInput = prompt('Please enter any value between 1 to 6')  
//     if(randomNumber == userInput){
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }

// }


// let randomNumber = Math.floor(Math.random() * 6) + 1  // 6
// let userInput
// do {
//     userInput = prompt('Please enter any value between 1 to 6') 
//     if (randomNumber == userInput) {
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         //6
//         console.log('your guess is incorrect')
//     }

// } while (randomNumber != userInput)





















//console.log(typeof userInput)













// let x = 10
// console.log(typeof x)

// let y = true
// console.log(typeof y)

// let g = "chinmay"
// console.log(typeof g)