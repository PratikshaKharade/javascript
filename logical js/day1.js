// check if number is prime number 

// 2 3 5 7 11 13 
function prime(n){
    let c=0
    for(let i=2;i<n;i++){
        if(n%i==0){
            c=1
            break
        }
    }
    if(c==1){
        // console.log('NO')
        return false
    }
    else{
        // console.log('Yes')
        return true 
    }


}
// prime(10)
// prime(13)
// prime(27)
// let a=100
// let sum=0
// let count=0
// for(let i=2;i<=a;i++){
//     if(prime(i)){
//         console.log(i)
//         count++
//         sum+=i
//     }
// }

// console.log(count,sum)


// factorial of a number 
/*
6!
6*5*4*3*2*1

*/

// function fact(m){
//     let cc=1
//     for(let i=m;i>=1;i--){
//         cc =cc*i
//     }
//     // return cc
//     console.log(cc)
// }

// fact(12)
// fact(8)
// fact(3)

// let nn=5
// let counter =1 // 5 20 60 120 
// for(let i=nn;i>=1;i--){
//     counter =counter*i
// }
// console.log(counter)



function recur(n){
    if(n<=1){
        return n
    }
    return n*recur(n-1)//120

}
/*
5*recur(4)
4*recur(3)
3*recur(2)
2*recur(1)
*/
let f=recur(5)
let g=recur(8)
console.log(f,g)