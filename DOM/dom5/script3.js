let ulList = document.querySelector('ul')
let liList =document.querySelector('li')
let input =document.querySelector('input')
let buttonA =document.querySelector('button')

console.log(ulList)
console.log(liList)
console.log(input)
console.log(buttonA)

buttonA.addEventListener('click',function(){

    let new1 = input.value
    let newLi = document.createElement('li')
   newLi.textContent = new1
    ulList.appendChild(newLi)
    input.value = ""

})