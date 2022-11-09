for(let i = 0 ; i < 4; i++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 // 1 // 2 // 3
}

//
let colors = ["green","yellow","pink","red","white"]
for (let i = 0 ; i < 3 ; i++){
    // let a = []
    console.log(i)
    console.log(colors[i])
    
}
//

let num = [100,200,300,400,500,600]
let num100 = []
for(let i = 0; i < num.length; i++){
    console.log(i)
    //console.log(num[i])
    if(num[i]>300){
        num100.push(num[i])
    }
}
console.log(num100)

//program.1
let years = [1989,1991,1995,1997,1998]
let age = []
for (i = 0 ; i < years[i] ; i++){
    console.log(i)
    console.log(years[i])
    console.log(2022-years[i])
    let ag = 2022 - years[i]
    age.unshift(ag)
}
console.log(age)

//program 2
let marks = [77,99,87,60,70,88]
let sum = 0
let percentage = 0
for(i = 0; i < 6; i++){
    sum = sum + marks[i]
   percentage = (sum/600)*100
}
console.log(marks)
console.log(percentage)

//
function mark1(p,q,r,s,t,u){
    return p+q+r+s+t+u
}
let pratiksha = mark1(77,55,66,88,99,44)
console.log(pratiksha/600*100)


//
function mark(a,b,c,d,e,f){
    let sum1 = a+b+c+d+e+f
    return sum1/600*100
}
let m = mark(66,77,55,88,99,99)
console.log(m)







