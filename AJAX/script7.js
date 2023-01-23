

function renderHtml(obj){
    document.write(`<h3>${obj.email}</h3>`)
    document.write(`<h3>${obj.first_name}</h3>`)
    document.write(`<h3>${obj.last_name}</h3>`)
    document.write(`<h3>${obj.id}</h3>`)
    document.write(`<img src = ${obj.avatar}>`)

}

function getUserPagewise(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        return res.json()
    })
}


function singleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
}

// getUserPagewise(2)
// .then(function(res){
//     //console.log(res.data[1].id)
//     let id = res.data[1].id
//     return id
// })
// .then(function(i){
//     singleUser(i)
//     .then(function(res){
//         console.log(res)
//     })

// })

// async function userInfo(pageNo){
//     let a = await getUserPagewise(2)
//     console.log(a)
//     let id = a.data[1].id
//     let b = await singleUser(id)
//     console.log(b)
// }
// userInfo(2)

// getUserPagewise(2)
// .then(function(res){
//     res.data.forEach(element => {
//         renderHtml(element)
//     });

//})




async function userInfo(pageNo){
    let a = await getUserPagewise(2)
    //console.log(a)
    let id = a.data[1].id
    let b = await singleUser(id)
    //console.log(b)
    renderHtml(b.data)
}
userInfo(2)