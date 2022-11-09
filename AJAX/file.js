let pro =new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve('both are equal')
    }
    else(
        reject('both are not equal')
    )
})

pro.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('finally')
})
