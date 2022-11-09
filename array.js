//array
let num = [1,2,3,4,5,6,7]
console.log(num)
console.log(num.length) // lenght is the property of array
let i = num.length
console.log(i)

// method
// push
let b = ["pratiksha","prajakta","pranita","sangita",]
//let b1 = num.push('ayush')
console.log(b)
let b1 = b.push('ayush')
console.log(b1)
console.log(b)

//unshift
let  c = b.unshift('durva')
console.log(c)
console.log(b)

//pop
let d = b.pop()
console.log(d)
console.log(b)

//shift
let m = b.shift()
console.log(m)
console.log(b)

//includes
let t = b.includes('pratiksha')
console.log(t)
let f = b.includes('Sangita')
console.log(f)

//reverse
let n = b.reverse()
console.log(n)

//concat
let a1 = [11,22,33,44]
let a2 = [55,66,77,88]
let a3 = a1.concat(a2)
console.log(a3)
let a4 = a2.concat(a1)
console.log(a4)

//flat
let nums = [[11,22,33],[44,55,66],[77,88,99]]
console.log(nums[0][0])
console.log(nums[2][1])
console.log(nums[2][2])
// // [11,22,33,44,55,66,77,88,99]

let ii = nums.flat()
console.log(ii)

//join
let info = ["prayiksha","kharade", 885758136]
console.log(info)
let info1 = info.join('-')
let info2 = info.join('@')
let info3 = info.join(' ')
console.log(info1)
console.log(info2)
console.log(info3)

//slice
//              0       1       2      3       4     5
let names = ["mona","shital","rutu","patu","sneha","rupa"]
//             -6      =5     -4     -3     -2       -1
console.log(names.slice(0,5))
console.log(names.slice(-6,5))
console.log(names.slice(0,-2))

