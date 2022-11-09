//
let info = {
    firstName : "pratiksha",
    Lastname : "kharade",
    age : 20
}

// let {firstName,Lastname,age} = info
// console.log(age)
let {firstName:fn,Lastname:ln,age:ag} = info
console.log(fn,ln,ag)

//

let names = ['monika', 'shital', 'pratiksha', 'rutuja', 'snehal']
let [a0,a1,a2,a3,a4] = names
console.log(a0)
console.log(a0,a4)

//set 
let names1 = new Set()
console.log(names1)
console.log(names1.size)
names1.add('pooja')
names1.add('aishwarya')
names1.add('nisha')
console.log(names1.has('pooja'))
console.log(names1.delete('pooja'))
console.log(names1)
names1.clear()
console.log(names1)

