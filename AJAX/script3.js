//
function getUserpAgewise(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        //console.log(res)
        return res.json()
        .then(function(res){
            return res
        })
    })

}
//getUserpAgewise(2)

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        //console.log(res)
        return res.json()
        .then(function(res){
            return res
        })
    })
}
//getSingleUser(7)

// getUserpAgewise(2)
// .then(function(res){
//     let id = res.data[0]['id']
//     return id
// })
// .then(function(i){
//     return getSingleUser(i)
// })
// .then(function(res){
//     console.log(res)
// })

//
// getUserpAgewise(2)
// .then(function(res){
//     let id = res.data[0]['id']
//     return  getSingleUser(id)
// }).then(function(i){
//     console.log(i)
    
// })

//
