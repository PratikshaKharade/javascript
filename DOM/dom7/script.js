
let listUL = document.querySelector('ul')
let input = document.querySelector('input')
let buttonA = document.querySelector('#one')

let Lilist = document.querySelectorAll('li')
for(let i=0; i<Lilist.length; i++){
   // console.log(Lilist[i])
    createButton(Lilist[i])
}

listUL.addEventListener('click',function(event){

if(event.target.tagName =='BUTTON'){
    
    if(event.target.className == 'remove'){
        //statement
        let li = event.target.parentElement
        let ul = li.parentElement
        ul.removeChild(li)
    }
    else if(event.target.className=='up'){
    // statement
        let li = event.target.parentElement
        let ul = li.parentElement   
        let prevli = li.previousElementSibling
        if(prevli){
            ul.insertBefore(li,prevli)
        }
    }
    else if(event.target.className == 'down'){
        //statement
        let li = event.target.parentElement
        let ul = li.parentElement 
        let nextLi = li.nextElementSibling
        if(nextLi){
            ul.insertBefore(nextLi,li)
        }
    }
}

})


buttonA.addEventListener('click',function(){
    let inputtext =  input.value
    let newLi = document.createElement('li')
    newLi.textContent =  inputtext
    createButton(newLi)
    listUL.appendChild(newLi)
    input.value = ""

})

function createButton(li){
  
    let remove = document.createElement('button')
    remove.textContent = "remove"
    remove.className = "remove"
    li.appendChild(remove)

    let down = document.createElement('button')
    down.textContent = "down"
    down.className = "down"
    li.appendChild(down)

    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)


} 