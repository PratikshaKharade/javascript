

//
function renderHtml(obj){
    document.write(`<h3>${obj.first_name}</h3>`)
    document.write(`<h3>${obj.last_name}</h3>`)
    document.write(`<h3>${obj.email}</h3>`)
    document.write(`<h3>${obj.id}</h3>`)
    document.write(`<img src = ${obj.avatar}>`)
}

function getUserPagewise(pageNo){
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })
    // .then(function(res){
    //     console.log(res)

    // })
}

//getUserPagewise(2)

function singleUser(id){
   return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
}

// getUserPagewise(2)
// .then(function(res){    
//    let id = res.data[0].id
//    return id
// })
// .then(function(res){
//     //console.log(res)
//    return singleUser(res)
//    .then(function(res){
//     //console.log(res)
//     renderHtml(res.data)

//    })
// })

// 




// async function getInfo(pageNo){
//     let a = await getUserPagewise(pageNo)
//     console.log(a)
//     let id = a.data[0].id
//     let b =await  singleUser(id)  
//     console.log(b)  
// }
// getInfo(2)


// async function getInfo(pageNo){
//         let a = await getUserPagewise(pageNo)
//         let id = a.data[0].id
//         let b =await  singleUser(id)  
//        renderHtml(b.data) 
//     }
//     getInfo(2)

getUserPagewise(2)
.then(function(res){
    res.data.forEach(element => {
        renderHtml(element)
    });
    
})