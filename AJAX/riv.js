// var m1 ='hello'
// console.log(m1)

//
let person1 = {
    fname : 'pratiksha',
    lname : 'kharade'
}
let person2 = {
    fname : 'pratiksha',
    lname : 'kharade'

}

//program 1
// if(person1 == person2){
//     console.log('true')
// }
// else{
//     console.log(false)
// }
//

//program 2
function check(obj1, obj2) {
    for (key in obj2) {
          
        if (obj1[key] == obj2[key]) {
            return false;
        }
    }
    return true
}
console.log(check(person1,person2))
