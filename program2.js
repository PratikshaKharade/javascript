// program 2
numberOfTicket = 8
if (numberOfTicket > 0 && numberOfTicket <= 5) {
    console.log('10 % discount')
}
else if (numberOfTicket > 5 && numberOfTicket <= 10) {
    console.log("20 % discount")
}
else if (numberOfTicket > 10) {
    console.log("30 % discount")
}
else {
    console.log('please provide correct input')
}
