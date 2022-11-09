// function 
function calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)// retern reminder
}
calculator(10,5)
calculator(100,10)
calculator(12,6)

// function without parameter and without returntype
 function add(){
    console.log(8+8)
 }
 add()
 add()

 //function with parameter and without returntype
 function sub(x,y){
    console.log(x-y)
 }
 sub(10,5)

 // function with parameter and with returntype
 function mul(x,y){
    return x * y // returntype - it use to store the value and we can reuse it.
 }
 let i = mul(10,2)
 console.log(i)
 console.log(i+i)
 console.log(i*i)
 console.log(i/2)

