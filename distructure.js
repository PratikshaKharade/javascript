//program 1
let names = ['monika', 'shital', 'pratiksha', 'rutuja', 'snehal']
let [a0, a1, a2, a3, a4] = names
console.log(a0)
console.log(a4 + ' ' + a3)

//program 2
let numbers = [[11, 22, 33, 44], [55, 66, 77, 88]]
let [b, c] = numbers
let [[b0, b1, b2, b3], [c0, c1, c2, c3]] = numbers
console.log(b)
console.log(c)
console.log(b + c)
console.log(b0)  // 11
console.log(c2)    // 77 
console.log(b2 + c0)  // 88
console.log(a0 + b1)

//program 3
let student = {
    fullName: "kunal padwal",
    age: 25,
    city: "sangamner"
}
let { fullName, age, city } = student
let { fullName: f1, age: ag, city: ct } = student
console.log(fullName)
console.log(age)
console.log(city)
console.log(f1)
console.log(ag)
console.log(ct)

//program 4
let studebt1 = {
    pratiksha: {
        firstName: 'pratiksha',
        lastName: 'Kharade',
        age: 24
    },
    monika: {
        firstName: 'monika',
        lastName: 'gosavi',
        age: 23
    }
}
let { pratiksha, monika } = studebt1
let { pratiksha: { firstName: ff, lastName: ln, age: aa1 }, monika: { firstName: ff1, lastName: ln2, age: aa2 } } = studebt1
console.log(pratiksha)
console.log(monika)
console.log(ff)
console.log(ff1)

//program 5
let person = {
    fullName1: 'pratiksha kharade',
    skill: ['sql', 'python', 'javascript'],
    age1: 24
}
let { fullName1, skill, age1 } = person
let { fullName1: fln, skill: [d1, d2, d3], age1: ag2 } = person
console.log(fullName1)
console.log(skill)
console.log(age1)
console.log(fln)
console.log(d1)
console.log(ag2)
console.log(fln + " " + d2)

//program 6
let studebt3 = [
    patu = {
      firstName2 : "pratiksha",
      lastName2 : "kharade",
      age3 : 25

    },
    mona = {
      firstName2 : "monika",
      lastName2 : "gosavi",
      age3 : 25

    }
]
let [g1,g2]=studebt3
let [{firstName2:fn2,lastName2:ln3,age3:ag4},{firstName2:fnn2,lastName2:ln4,age3:ag5}]=studebt3
console.log(g1)
console.log(g2)
console.log(fn2)
console.log(ln3)
console.log(ag4)
console.log(fnn2)
console.log(ln4)
console.log(ag5)
