// function practice

//percentage 1
function mark1(p,q,r,s,t,u){
    return p+q+r+s+t+u
}
let pratiksha = mark1(77,55,66,88,99,44)
console.log(pratiksha/600*100)


//percentage 2
function mark(a,b,c,d,e,f){
    let sum1 = a+b+c+d+e+f
    return sum1/600*100
}
let m = mark(66,77,55,88,99,99)
console.log(m)

//square
function num(k){
    return k*k
}
let k1 = num(12)
console.log(k1)

//cube
function cube(c){
    return c*c*c
}
let c1 = cube(9)
console.log(c1)

// array
let names = ["ram","lakshman","shaym","rohit","rohan"]
console.log(names)
console.log(names.length)
//
let p = names.push('priya')
console.log(p)
console.log(names)
console.log(typeof(p))
//
let p2 = names.pop()
console.log(p2)
console.log(names)
//
let sh = names.shift()
console.log(sh)
console.log(names)
//
let sh2 = names.unshift('prajkta')
console.log(sh2)
console.log(names)
//
let n = names.includes('rohan')
console.log(n)
let n2 = names.includes('pratiksha')
console.log(n2)
//
let n3 = names.indexOf('rohan')
console.log(n3)
let n4 = names.indexOf('Rohan')
console.log(n4)
//
let n5 = names.reverse()
console.log(n5)

//
let aa = [11,22,33,44]
let bb = [88,44,55,66]
let cc = aa.concat(bb)
console.log(cc)
console.log(bb.concat(aa))
//

let data = ["priti","bhosale",998877665]
let data1 = data.join('-')
let data2 = data.join('@')
let data3 = data.join('_')
let data4 = data.join(' ')
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)

//               0        1         2           3          4         6       7 
let fruits = ['apple','banana','pineapple','strawberry','chicoo','grapes','orange']
//              -7      -6          -5           -4         -3      -2       -1
console.log(fruits.slice(0))
console.log(fruits.slice(0,-4))
console.log(fruits.slice(-1,4))
