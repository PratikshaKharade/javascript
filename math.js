//math
// console.log(Math.floor(12.4))
// console.log(Math.floor(-12.4))
// console.log(Math.floor(-12.14))
// console.log(Math.ceil(12.4))
// console.log(Math.ceil(-12.4))
// console.log(Math.ceil(-3.4))
// console.log(Math.ceil(-13.5))
// console.log(Math.round(12.4))
// console.log(Math.round(12.5))
// console.log(Math.round(-12.4))
// console.log(Math.round(-12.6))
// console.log(Math.abs(12.4))
// console.log(Math.abs(-12.4))
// console.log(Math.abs(-22))
// console.log(Math.sqrt(16))
// console.log(Math.random())
//

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt('please enter any value between 1 to 6')
// console.log(userInput)
// if(randomNumber==userInput){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guess is incorrect')
// }

//program 2
let randomNumber = Math.floor(Math.random()*6)+1
console.log(randomNumber)
for(let i=0; i<5; i++){
    let userInput = prompt('please enter any value between 1 to 6')
    console.log(userInput)
    if(userInput==randomNumber){
        console.log('your guess is correct')

    }
    else{
        console.log('your guess is incorrect')
    }
}

