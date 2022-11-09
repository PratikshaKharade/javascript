
// let name = "pratiksha"
// console.log(name)
// console.log(typeof name)

// //
// let firstName = new String("Monika")
// console.log(firstName)
// console.log(typeof firstName)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.indexOf('o'))

// //
// let name1 = ['monika','rupali','rutuja']
// let n1=name1.push('shital')
// console.log(n1)
// console.log(name1)
// console.log(name1.pop())

// let name3 = new Array('ram',3)
// let a1 = name3.push('patu')
// let a2 = name3.push('monu')
// let a3 = name3.push('shitu')
// console.log(a1)
// console.log(a2)
// console.log(a3)
//  console.log(name3)
// console.log(name3.push('sita'))
// console.log(name3)


// //
// let setA = new Set('abcdefhh')
// //setA.add('pooja')
// console.log(setA)
// console.log(setA.size)

// // add() ,has() , clear(),delete(), forEach(), size
// // how to loop

// //add()
// let setB = new Set()
// let s1= setB.add('pooja')
// let s2=setB.add('aishwarya')
// let s3=setB.add('vaishnavi')
// console.log(setB)
// //has()
// console.log(setB.has('pooja'))
// console.log(setB.has('Pooja'))
// //delete()
// console.log(setB.delete('pooja'))
// console.log(setB)
// //forEach()
// let ss = setB.forEach(function(val){
//     console.log(val)
// })
// //clear()
//  setB.clear()
// console.log(setB)
// //
// //for loop with string
// let abc = "sangita"
// for(let i=0; i<abc.length; i++){
//     //console.log(i)
//     console.log(abc[i])
// }

// //for loop with array
// let fruits =  ['mango','apple','banana']
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
//     console.log(i)
// }

// //for loop with object
// let info = {
//     firstName:"vaishnavi",
//     lastName:"lonkar",
//     age:23
// }

// for(let key in info){
// console.log(key,info[key])
// }

// //for loop with set

// let setD = new Set(["pooja","priya","poonam","pratiksha"])
// console.log(setD)

// for(let vl of setD){
//     console.log(vl)
// }

//map
// map -- set() ,get(), has() , size

// let mapA = new Map()
// console.log(mapA)

// mapA.set("firstName","pratiksha")
// mapA.set("lastName","kharade")
// mapA.set("age",24)

// console.log(mapA)
// console.log(mapA.size)
// console.log(mapA.get("firstName"))
// console.log(mapA.has("firstname"))
// console.log(mapA.has("firsName"))
// mapA.clear()
// console.log(mapA)

// map and set
// stores the unique value 
// does not stores value by index
// to set object we can pass iterable

// method: - add(),delete(),has(),clear()
// property - size

//set
// let setA = new Set()
// console.log(setA)
// setA.add('apple')
// setA.add('banana')
// setA.add('grapes')
// setA.add('banana')
// console.log(setA)
// console.log(setA.size)
// let q1= setA.has('apple')
// console.log(q1)
// let q2= setA.has('Apple')
// console.log(q2)

// let q3= setA.delete('grapes')
// console.log(q3)
// console.log(setA)
// setA.clear()
// console.log(setA)

// let city = new Set(['sangamner','pune','nashik','kolkata'])
// for(let vl of city){
//     console.log(vl)

// }

//map
// Map 

// basic object only stores string as key 
// map stores other data type as let 

// let mapA = new Map()
// console.log(mapA)
// mapA.set('firstN','pratiksha')
// mapA.set('lastN','kharade')
// mapA.set(1,'num')
// mapA.set(true,'unmarried')
// console.log(mapA)
// console.log(mapA.size)
// console.log(mapA.entries())
// console.log(mapA.keys())
// console.log(mapA.values())
// console.log(mapA.has('lastN'))
// let aa = mapA.delete('firstN')
// console.log(aa)
// console.log(mapA)
// let a1 = mapA.get(true)
// console.log(a1)

// let a2= mapA.forEach(function(val,key){
//     console.log(val,key)
// })
// // mapA.clear()
// // console.log(mapA)

// for(let key of mapA.keys()){
//     console.log(key)
// }

// for(let value of mapA.values()){
//     console.log(value)
// }

// for(let [val,key] of mapA.entries()){
//     console.log(val,key)
// }

//
// let fruits = new Array(3)
// console.log(fruits)
// fruits.push(fruits[0])
// fruits.push(fruits[1])
// fruits.push(fruits[2])
// fruits[0]='banana'
// fruits[1]='mango'
// fruits[2]='apple'
//fruits[3]='grapes'
// fruits.push('blackberry')

// console.log(fruits)

// let cities = new Array()
// cities.push('pune')
// cities.push('sangamner')
// console.log(cities)


// let fruits = new Array(3)
// console.log(fruits)
// fruits[0]='grapes'
// fruits[1]='pineapple'
// fruits[2]='chicoo'
// fruits.push('banana')
// fruits.push('apple')
// fruits.push('mango')
// console.log(fruits)
// console.log(fruits[0])

//let a = [11,22,33]








