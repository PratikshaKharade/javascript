//object
// let info = ["pratiksha","kharade",12,30]
// //retrive
// console.log(info[0])
// //add
// let i = info.push('')


let info1 = {
    firstName:"pratiksha",
    lastName:"kharade",
    age:12,
    RollNo:30,
}
//retrive(dot notation and bracket notation)
console.log(info1.firstName)
console.log(info1.lastName)
console.log(info1['age'])
console.log(info1['RollNo'])

//add (dot notation and bracket notation)
info1.city = "sangamner"
info1['language'] = "marathi"
console.log(info1)

//update
info1.age = 24
info1['RollNo'] = 33
console.log(info1)

//delete (dot notation and bracket notation)
delete info1.city
delete info1['language']
console.log(info1)

//-----------------------------------------------

let mobile = {
    brand:'vivo',
    color:'black',
    Name:'Y21A'
}
//add
mobile.RAM = '8gb'
mobile['Memory'] = '128gb'
console.log(mobile)

//retrive
console.log(mobile.brand)
console.log(mobile['Name'])

//update
mobile.color = 'black'
mobile['Memory'] = '64gb'
console.log(mobile)

//delete
delete mobile.RAM
delete mobile['Memory']
console.log(mobile)