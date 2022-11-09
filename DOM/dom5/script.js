
let liList = document.querySelectorAll('li')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
console.log(liList)

// for (let i = 0; i <= liList.length; i++) {

//     if (i % 2 == 0) {
//         liList[i].style.color = "green"
//     }
//     else {
//         liList[i].style.color = "blue"
//     }
// }

buttonA.addEventListener('click',function(){
    for (let i = 0; i <= liList.length; i++) {

        if (i % 2 == 0) {
            liList[i].style.color = "green"
        }
        else {
            liList[i].style.color = "blue"
        }
    }
})
