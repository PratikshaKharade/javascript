let fruit = "pineapple"
let l = fruit.length
console.log(l)
console.log(typeof l)

// toUpperCase()
let u = fruit.toUpperCase()
console.log(u)
console.log(typeof u)

// toLoweCase()
let lo = fruit.toLowerCase()
console.log(lo)
console.log(typeof lo)

// Indexof()
let i = fruit.indexOf('l')
console.log(i)
console.log(typeof i)
let i1 = fruit.indexOf('m')
console.log(i1)
console.log(typeof i1)

// includes()
let f = fruit.includes('n')
console.log(f)
console.log(typeof f)
let f1 = fruit.includes('k')
console.log(f1)
console.log(typeof f1)


// trim() , trimSratr(), trimEnd()
 
//trimStart()
let name1 = " pratiksha"
let ts = name1.trimStart()
console.log(name1.length)
console.log(ts)
console.log(ts.length)

//trimEnd()
let name2 = " pratiksha "
let te = name2.trimEnd()
console.log(name2.length)
console.log(te)
console.log(te.length)

//trim()
let tt = name2.trim()
console.log(tt)
console.log(tt.length)

//endswith()
let name3 = "pratiksha"
let sw = name3.endsWith('sha')
console.log(sw) 
let sw1 = name3.endsWith('pr')
console.log(sw1)

//startwith()
let ew = name3.startsWith('pra')
console.log(ew)
let ew1 = name3.startsWith('ra')
console.log(ew1)

//slice()
//  0   1  2  3  4  5  6  7  8  9
//  c   h  a  n  d  r  a  p  u  r
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
let city = "chandrapur"
console.log(city.slice(1))
console.log(city.slice(1,6))
console.log(city.slice(2,-3))
console.log(city.slice(5,8))
console.log(city.slice(-10,7))
console.log(city.slice(-1,6))

//charAt()
console.log(city.charAt(3))
console.log(city.charAt(5))


