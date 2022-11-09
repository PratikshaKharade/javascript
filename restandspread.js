

//program 1
function add(...arr){
    //console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let q1 = add(11,22,33,4,5,6,78,8)
console.log(q1)

// program 2
function num(a1,...n){
    return n.filter(function(el){
        return el > a1
    })
}
let q2 = num(30,12,22,33,445,56,6,5,23.56,76,99)
console.log(q2)

// spread

let names = ['monika','pratiksha','shital','snehal','rutuja']
function nn(a,b,c){
    return a + ' ' + b + ' ' + c
}
let q4 = nn(...names)
console.log(q4)

//program 4

let a1 = [11,22,33]
let a2 = [44,55,66]
let a3 = [a1,a2]
let a4 = [...a1, ...a2]
console.log(a3)
console.log(a4)
console.log(a1.concat(a2))

//program 5
let m1 = [223,345.432]
let m2 = [111,...m1]
console.log(m2)

//program 6
let info1 = {
    firstname : 'pratiksha',
    lastname : 'kharade'
}
let info2 = {
    mother : 'sangita',
    father : 'girish'
}

let info3 = {...info1, ...info2}
console.log(info3)

//program 7
let vahicle = {
    type : 'sedane',
    color : 'red'
}
let vahicle2 = vahicle
vahicle2.color = 'blue'
console.log(vahicle)
console.log(vahicle2)

let s1 = [22,33,44]
let s2 = [...s1]
s2[0] = 100
console.log(s1)
console.log(s2)

let mm = {
    name1 : 'moona',
    name2 : 'sona'
}
let mm2 ={...mm}
mm2.name1 = 'rupa'
console.log(mm)
console.log(mm2)


















