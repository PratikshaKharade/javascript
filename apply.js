//
let pratiksha = {
    firstName : 'pratiksha',
    LastName : 'kharade',
    age : 24,
    display : function(){
        console.log(this.firstName + this.LastName)
    }
}
pratiksha.display()


let monika = {
    firstName : 'monika',
    LastName : 'gosavi',
    age : 23,

}
//monika.display()
let fn = pratiksha.display
// function(){
//     console.log(this.firstName + this.LastName)
// }
fn()
let fn2 = fn.bind(monika)
fn2()
//call
let shital = {
    firstName : 'shital',
    LastName : 'ghule',
    age : 23
}
fn.call(shital)

//apply
let sneha = {
    firstName : 'snehal',
    LastName : 'shiralkar',
    age : 24
}
fn.apply(sneha)


//
let audi = {
    model:'Q6',
    color:'black'
}

let bwm = {
    model:'sedane',
    color:'white'
}
let tata = {
    model:'Nexa',
    color:'red'
}
let printColor = function(greet){
    console.log(greet)
    console.log(this.color)
}

printColor.call(bwm,'good morning')
printColor.call(tata,'good evening')

//apply
printColor.apply(bwm,['good morning'])
printColor.apply(tata,['good evening'])

let q1= printColor.bind(audi)
q1('hello')

