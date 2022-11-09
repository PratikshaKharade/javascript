//
// rest operator
function add(...arr){
    console.log(arr)
    let sum = arr.reduce(function(acc,el){
        return acc + el
    },0)
    return sum
}
 let total = add(11,22,33,44,55,667)
 console.log(total)

 //spread operator

 let mark = [22,33,44,66,12,34,66,77,34,54,55]
 function addfive(a,b,c,d,e){
    console.log(a+b+c+d+e)
 }
 addfive(...mark)
