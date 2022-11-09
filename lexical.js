
// // function additionA(x, y) {
// //     console.log("hello")
// //     return x + y
// //     console.log("hello")
// // }
// // let ab = additionA(20, 30)
// // console.log(ab)

// // //
// // function additionf() {
// //     let a = 10
// //     let b = 20
// //     return function () {
// //         console.log(a + b)
// //     }
// // }
// // let e = additionf()
// // console.log(e)
// // e()

// // //
// // var fullName = "poorva vyas"
// // let person = {
// //     fullName: "pratiksha Kharade",
// //     age: 24,
// //     RollNo: 23,
// //     display: function () {
// //         console.log(this.fullName)
// //         function display2() {
// //             console.log(this.fullName)

// //         }
// //         display2()
// //     }

// // }
// // person.display()

// // //lexical 

// // function addA(){
// //     let s = 10
// //     let t = 50
// //     console.log(s+t)
// //     //console.log(s+t+m+p)
// //     function addB(){
// //         m = 10
// //         p = 20
// //         console.log(s+t+m+p)
// //         function addC(){
// //             let g = 40
// //             let h = 50
// //             console.log(s+t+m+p+g+h)
// //         }
// //         addC()
// //     }
// //     addB()
// //     }
// //     addA()

// //

// function addA(s,t){
//         //let s = 10
//         //let t = 50
//         console.log(s+t)
//         //console.log(s+t+m+p)
//         function addB(m,p){
//             //m = 10
//             //p = 20
//             console.log(s+t+m+p)
//             function addC(g,h){
//                 //let g = 40
//                 //let h = 50
//                 console.log(s+t+m+p+g+h)
//             }
//             addC(30,20)
//         }
//         addB(20,30)
//         }
//         addA(20,30)
    
//     //
//     function additionf() {
//             let a = 10
//             let b = 20
//             return function () {
//                 console.log(a + b)
//                 function subB(k,l){
//                     console.log(k-l+a+b)
//                 }
//                 subB(50,30)
//                 //console.log(bb)
                
//             }
            
//         }
//         let e = additionf()
//         console.log(e)
//         e()



//

function add(s,t){
    console.log(s+t)
    
    function addA(m,p){
        console.log(s+t+m+p)

        function addB(q,r){
            console.log(s+t+m+p+q+r)
        }
        addB(20,30)
    }
    addA(20,20)
}
add(12,22)
