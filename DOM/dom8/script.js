
// let byID = document.querySelector('#one')
// console.log(byID)

// console.log(document)
// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)

//<h1 id ="one" class="color" name="nm">heading</h1>

// let h1ID = document.querySelector('#one')
// let h1class = document.querySelector('.color')
// let h1 = document.querySelector('h1')
// let h1Atrr = document.querySelector('h1[name= "nm"]')
// console.log(h1ID)
// console.log(h1class)
// console.log(h1)
// console.log(h1Atrr)


//<h1 id ="one" class="color" name="nm">heading</h1>
// let ID = document.getElementById("one")
// let classnm = document.getElementsByClassName("color")
// let liclass = document.getElementsByClassName("fruit")
// let liTag = document.getElementsByTagName("li")
// console.log(ID)
// console.log(classnm)
// console.log(liclass)
// console.log(liTag)

// console.log(classnm.length)
// console.log(liclass.length)
// console.log(liTag.length)

// let fruit = document.querySelectorAll(".fruit")
// console.log(fruit)
// console.log(fruit.length)

// fruit.forEach(function(el,index){
//     console.log(el)
// })

//program 2
// let liTag = document.getElementsByTagName("li")
// console.log(liTag.length)
// let fruit = document.querySelectorAll(".fruit")
// console.log(fruit.length)

//program 3
let getli = document.getElementsByClassName("one")
let selectLi=  document.querySelectorAll(".one")
console.log(getli)
console.log(selectLi)
console.log(getli.length)
console.log(selectLi.length)
let container = document.getElementById("container")
console.log(container)
let newLi = document.createElement("li") 
newLi.className = "one"
newLi.id="two"
//newLi.remove.id = "two"
newLi.textContent = "grapes"
container.appendChild(newLi)
console.log(getli.length)
console.log(selectLi.length)

















