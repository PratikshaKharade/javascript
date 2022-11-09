//
function renderHtml(obj) {
    document.write(`<h3>${obj.first_name}</h3>`)
    document.write(`<h3>${obj.last_name}</h3>`)
    document.write(`<h3>${obj.email}</h3>`)
    document.write(`<h3>${obj.id}</h3>`)
    document.write(`<img src = ${obj.avatar}>`)
}

function userInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })//.then(function(res){
            
    //     console.log(res)
    // })

}
//userInfo(2)

// async function UsersInfo(id1, id2, id3, id4) {
//     let userData = await Promise.all([
//         userInfo(id1),
//         userInfo(id2),
//         userInfo(id3),
//         userInfo(id4),

//     ])
//     console.log(userData)
//     userData.forEach(function (el) {
//         renderHtml(el.data)
//     })
// }
// //UsersInfo(1, 2, 3, 4)


// //
// async function GetInfo(){
//     let b = await Promise.all([
//         Promise.resolve('hello'),
//         Promise.resolve('hello'),
//         Promise.resolve('bye'),
//     ])
//     console.log(b)
// }
// GetInfo()

async function GetInfo1(){
    let b = await Promise.race([
        Promise.reject('hello'),
        Promise.resolve('hello'),
        Promise.resolve('bye'),
    ])
    console.log(b)
}
GetInfo1()


// async function Info1(){
//    let q = await Promise.race([
//         new Promise(function(resolve){
//                setTimeout(function(){
//                 resolve('hello')
//                },2000) 
//         }),

//         new Promise(function(reject){
//             setTimeout(function(){
//                 reject('bye')
//             },3000)
//         })

//     ])
//     console.log(q)
// }
// Info1()
