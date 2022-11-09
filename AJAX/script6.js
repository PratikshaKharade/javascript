
function getusers(pageNo){
    fetch(`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(res){
        //console.log(res)
        return res.json()

    })//.then(function(res){
    //     console.log(res)
    // })
}
//getusers(2)

function getsingleuser(id){
    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })////.then(function(res){
        console.log(res)
   // })
}
//getsingleuser(2)

getusers(2).then(function(res){
    console.log(res)
})