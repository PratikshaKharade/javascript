
let heading = document.querySelector('#two')
let Button = document.querySelector('.one')
console.log(heading)
console.log(Button)

Button.addEventListener('click',function(){
    heading.style.color = "green"
heading.textContent='WELCOME'

})