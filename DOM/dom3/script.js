
let firstHead = document.querySelector('h1')
let secondtHead = document.querySelector('h2')
let thirdtHead = document.querySelector('h3')
let forthHead = document.querySelector('h4')
let fifthtHead = document.querySelector('h5')

console.log(firstHead)
console.log(secondtHead)
console.log(thirdtHead)
console.log(forthHead)
console.log(fifthtHead)

firstHead.addEventListener('click',function(){
    firstHead.textContent='snehal'
    firstHead.style.color='blue'
    firstHead.style.background = 'pink'
    //firstHead.textContent.toUpperCase()
})

