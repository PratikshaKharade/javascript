
//prime number
// program 1
// let a= 11
// if(a % 2 == 0){
//     console.log('num is prime')
// }
// else {
//     console.log('num ids not prime')
// }

//program 2 - prime no. between 1 to 20
//let c = 0
for(i = 20 ; i >= 1; i--){
    if(i % 2 == 0){
        //c = i
        console.log(i)
    }

}

//

// let num1 = [1,2,33,44,23,43,56,22,18]
// num1.filter(function(el){
//     if(el % 2 == 0){
//         console.log(el)
//     }
    
// })

//
// let count=0
// let i,j 
// for(j=2;j<=100;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++ 
// }
// if(count==2)
// console.log(j)
// count=0  
// }

//
//
let num2 = [22,33,44,556,234,213]
let max = num2[0]
let max2 = num2[0]
for(let i=0; i<num2.length; i++){
    if(max < num2[i]){
        max2 = max;
        max = num2[i]
    }
    else if(max2 < num2[i]){
        max2 = num2[i]
    }
}
console.log(max, max2)