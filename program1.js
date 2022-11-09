let numberOfTicket =11
if (numberOfTicket > 0 && numberOfTicket <= 5){
    console.log('10% discount')
}

else if (numberOfTicket > 5 && numberOfTicket <= 10){
    console.log('20% discount')
}
else if (numberOfTicket > 10){
    console.log('30% discount')
}
else{
    console.log('please provide correct input')
}

//falsy 0, undinife, null, "", NaN, 1!==1, false

if(3<2){
    console.log('hello')
}
else{
    console.log('bye')
}

if(0){
    console.log('hello')
}
else{
    console.log('bye')
}
if(3<2){
    console.log('hello')
}
else{
    console.log('bye')
}

let d
 if(d){
    console.log('hello')
}
else{
    console.log('bye')
}
if(3<2){
    console.log('hello')
}
else{
    console.log('bye')
}

 if(3<2){
    console.log('hello')
}
else{
    console.log('bye')
}
//switch
 let city = 'pune'
 switch (city){
    case 'pune' : console.log('MH')
    case 'indore' : console.log('MP')
    case 'kanpur' : console.log('UP')
    default : console.log('incorrect city name')
 }
    
 //
 let city1 = 'indore'
 switch (city1){
    case 'pune' : console.log('MH')
    break
    case 'indore' : console.log('MP')
    break
    case 'kanpur' : console.log('UP')
    break
    default : console.log('incorrect city name')
 }
 