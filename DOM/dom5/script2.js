let ulList = document.querySelector('ul')
let liList = document.querySelector('li')

ulList.addEventListener('mouseover',function(){
    ulList.textContent = ulList.textContent.toUpperCase()
})

ulList.addEventListener('mouseout',function(){
    ulList.textContent = ulList.textContent.toLowerCase()
})



