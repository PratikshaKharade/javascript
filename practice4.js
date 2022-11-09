let d = 10
if(d>=10 && d<5){
    console.log('hello')
}
else{
    console.log('bye')
}
//
//switch
let city ='lucknow'
switch(city){
    case 'pune':console.log('MH')
    break
    case 'indore':console.log('MP')
    break
    case 'kanpur':
    case 'lucknow' :   
    console.log('UP')
    break
    default : console.log('incorrect cityname')

}

// ternary 
let a=100
let b=55
// if(a > b){
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }

a>b ? console.log("a is greater"):console.log("b is greater")

let age = 15 
let a1 = age > 18 ? 'can drive':'cannot drive'
console.log(a1)









