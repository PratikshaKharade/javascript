//
//program 1
let student1 = {
    firstName: "pratiskha",
    LastName: "kharade",
    Age: 24,
    Skills: ["python", "HTML", "CSS"],
    display: function () {
        console.log(this.firstName + " " + this.LastName)
    }
}

student1.display()
console.log(student1)

//program 2
function Person(fn, ln, ag, skill) {
    this.firstName = fn,
        this.LastName = ln,
        this.age = ag,
        this.skill = skill,
        this.display = function () {
            console.log(this.firstName + " " + this.LastName)
        }
}

let stud1 = new Person("patu", "Kharade", 23, ["html", "css"])
let stud2 = new Person("mona", "gosavi", 22, ["html5", "css3"])
console.log(stud1, stud2)
stud1.display()
stud2.display()


//
function vahicle(type, color, modelNo) {
    this.type = type,
        this.color = color,
        this.modelNo = modelNo,
        this.start = function () {
            console.log('start driving....')
        },
        this.stop = function () {
            console.log('stop driving.....')
        }
}

let audi = new vahicle("sedane", "red", 222)
let BMW = new vahicle("SUV", "black", 333)
console.log(audi)
audi.start()
console.log(BMW)
BMW.stop()


// Es6 class

let students = class {
    constructor(firstName, LastName, age, skill) {
        this.firstName = firstName,
            this.LastName = LastName,
            this.age = age,
            this.skill = skill
        this.display = function () {
            console.log(this.firstName + " " + LastName)
        }
    }
}

let prajakta = new students("praju", "kharade", 25, ['php', 'java'])
console.log(prajakta)
prajakta.display()

//
class names {
    constructor(firstName, LastName, age, skill) {
        this.firstName = firstName,
            this.LastName = LastName,
            this.age = age,
            this.skill = skill
        this.display = function () {
            console.log(this.firstName + " " + LastName)
        }
    }
}

let rutuja = new names("rutuja", "jadhav", 22, ["html", "php"])
console.log(rutuja)
rutuja.display()

let nm = [
    new names("shital", "ghule", 23, ['pythom', "jawa"]),
    new names("rupa", "shelke", 22, ['html', "css"]),
    new names("aishwarya", "dherange", 24, ['pythom', "js"]),
    new names("vaishvavi", "lonkar", 23, ['js', "jawa"])
]

//console.log(nm)
nm.forEach(function (el) {
    for (let key in el) {
        console.log(key, el[key])
    }
})


//

let nm1 = {
    n1: new names("shital", "ghule", 23, ['pythom', "jawa"]),
    n2: new names("rupa", "shelke", 22, ['html', "css"]),
    n3: new names("aishwarya", "dherange", 24, ['pythom', "js"]),
    n4: new names("vaishvavi", "lonkar", 23, ['js', "jawa"])
}
// for(let values of Object.values(nm1)){
//     for(let key in values){
//         console.log(key , values[key])
//     }
// }

//

// for(let key in nm1){
//         //console.log(key,vehiclesC[key])
//         for(let key in nm1[key]){
//             console.log(key, nm1[key][key])
//         }
//     }