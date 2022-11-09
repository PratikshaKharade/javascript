//Math
// console.log(Math.floor(12.4))
// console.log(Math.floor(12.7))
// console.log(Math.ceil(12.4))
// console.log(Math.ceil(12.8))
// console.log(Math.round(12.4))
// console.log(Math.round(12.8))
// console.log(Math.abs(12.4))
// console.log(Math.abs(22))
// console.log(Math.abs(-22))
// console.log(Math.sqrt(16))
// console.log(Math.random()*8)+1

//program 1
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt('please enter any value between 1 to 6')
// console.log(userInput)
// if(randomNumber == userInput){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guess is incorrect')
// }

//program 2
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// for(let i=0; i<5; i++){
// let userInput = prompt('please enter any value between 1 to 6')
// console.log(userInput)
// if(randomNumber == userInput){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guess is incorrect')
// }
// }


//program 3
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput

//     while(randomNumber!=userInput){
//         userInput = prompt('please enter any value between 1 to 6')
//         if(userInput==randomNumber){
//             console.log('your guess is correct')
//         }
//         else{
//             console.log('your guess is incorrect')
//         }
//     } 

    //program 4

    let randomNumber = Math.floor(Math.random()*6)+1
    console.log(randomNumber)
    let userInput
    do{
        userInput = prompt('please enter any value between 1 to 6')
        if(userInput==randomNumber){
            console.log('your guess is correct')
        }
        else{
            console.log('your guess is incorrect')
        }
    }
    while(randomNumber!=userInput)
