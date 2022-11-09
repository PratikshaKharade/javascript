//program 1
let prajkta = {
    fullName: 'prajkta kharade',
    age: 25,
    skill: ['html', 'js', 'css'],
    city: 'sangamner'
}
let pooja = {
    fullName: 'pooja raut ',
    age: 23,
    skill: ['html', 'js',],
    city: 'pune'
}
console.log(prajkta)
console.log(pooja)

//program 2
class person {
    fullName = undefined
    age = undefined
    skill = []
    RollNO = undefined
    city = undefined
}
let monika = new person()
let shital = new person()
shital.skill.push('html')
console.log(monika)
console.log(shital)

// monika.fullName = 'monika gosavi'
// monika.age = 23
// monika.skill = ['js','html']
// monika.city = 'sangamner'
// monika.RollNO = 34
// console.log(monika)

// shital.fullName = 'shital ghule'
// shital.age = 26
// shital.skill = ['js','c++']
// shital.city = 'pune'
// shital.RollNO = 45
// shital['status']="unmarried"
// console.log(shital)


// //program 3
// class person2 {
//     constructor (fn,ag,sk,rn,cy){
//             this.fullName = fn
//             this.age = ag
//             this.skill = sk
//             this.RollNO = rn
//             this.city = cy
//         }
//     }
//     let priyanka = new person2('priyanka jadhav',24,['html','c++'],45,'mumbai')
//     console.log(priyanka)
//     let rutuja = new person2('rutuja petkar',25,['html','c++','java'],28,'nashik')
//     rutuja['language']='marathi'
//     console.log(rutuja)

//     //program 4
    class person3 {
        setfullName(fn){
            this.fullName=fn
        }
        setage(ag){
            this.age=ag
        }
        setskill(sk){
            this.skill=sk
        }
        setRollNO(rn){
            this.RollNO=rn
        }
        setcity(cy){
            this.city=cy
        }
    }
    let aishwarya = new person3()    
    console.log(aishwarya)
    aishwarya.setfullName('aishwarya dherange')
    aishwarya.setage(23)
    aishwarya.setRollNO(44)
    aishwarya.language='marathi'
    console.log(aishwarya)

