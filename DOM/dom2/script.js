
let head = document.querySelector('h1')
let one = document.querySelector('#one')
let two = document.querySelector('.two')
console.log(head)
console.log(one)
console.log(two)

head.addEventListener('click',function(){
    head.style.color="green"
    head.textContent= 'monika'
})


