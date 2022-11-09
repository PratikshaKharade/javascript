
//
document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.backgroundColor="red"
    document.querySelector('h1').style.color="green"
})

let ulList = document.querySelector('ul')
let butoonB = document.querySelectorAll('.one')
console.log(butoonB)

// console.log(ulList)
// ulList.addEventListener('click',function(){
//     ulList.style.backgroundColor="red"
// })

butoonB.forEach(function(el){
    el.stye.color="red"
})


