
//select the element
let headOne=document.querySelector('h1')
let Li=document.querySelectorAll('.two')
let input = document.querySelector('input')
let buttomA = document.querySelector('button')
console.log(headOne)
console.log(Li)
console.log(input)
console.log(buttomA)

// buttomA.addEventListener('click',function(){
//    let inputValue = input.value
// Li.forEach(function(el){
//     el.style.color = inputValue
// })
//    input.value = ""
// })


//
// buttomA.addEventListener('click',function(){
//    let inputValue = input.value
//     Li.style.color=inputValue
//     input.value =""
// })


buttomA.addEventListener('click',function(){
let inputValue = input.value
 for(var i=0; i<Li.length; i++){
    console.log(Li[i])
     Li[i].style.color = inputValue
 }
 input.value = ""
 })


