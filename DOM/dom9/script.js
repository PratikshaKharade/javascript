
// console.log(document)
// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)

let head = document.querySelector('h1')
console.log(head)

let para = document.createElement('p')
console.log(para)
para.textContent = "welcome to js"
//head.append(para)
///head.prepend(para)
//
//head.before(para)
head.after(para)

 document.querySelector('button').addEventListener('click',function(){
   // para.remove()
   let parentel = para.parentElement
   parentel.removeChild(para)

})
























