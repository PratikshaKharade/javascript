// AND &&

// True  True  ===> True
// False True  ===> False
// True  False ===> False
// False False ===> False

console.log(6 === 6 && 6 !== 6)
//          true        false = false

console.log(12>10 && 10>9)
//          true     true = true

console.log(12 >= 14 && 20 <= 22)
//          false       true  = false    

console.log(100 !== '200' && 100 !== 200)
//              true         true = true

console.log(200 != 200 && 300 != 300)
//              false       false = false


// OR ||

// True  True  ===> True
// False True  ===> True
// True  False ===> True
// False False ===> False
console.log(6 === 6 || 6 !== 6)
//          true        false = true

console.log(12>10 || 10>9)
//          true     true = true

console.log(12 >= 14 || 20 <= 22)
//          false       true  = true    

console.log(100 !== '200' || 100 !== 200)
//              true         true = true

console.log(200 != 200 || 300 !== 300)
//              false       false = false



// NOT !

// True ==> False
// False ==> True

console.log(!(20>10))
console.log(!(20<10))
console.log(30>10 != 20>10)
//           true     true = false 
console.log(!(30>=20))
console.log(!(30<=20))
console.log(300 <= 100 && 100 >= 90)


