let student = [{
    Firstname : 'Monika',
    lastName : 'Gosavi',
    age : 19
},
{
    Firstname : 'Pratiksha',
    lastName : 'Kharade',
    age : 20
},
{
    Firstname : 'Rutuja',
    lastName : 'Jadhav',
    age : 21
},
{
    Firstname : 'Shital',
    lastName : 'Bhagwat',
    age : 22
}]
// let m = student[2].age = 25
// console.log(m)
// console.log(student)

// let m1 = student[3].skill = 'java'
// console.log(m1)
// console.log(student)

// for(i = 0; i<student.length; i++){
//     delete student[i].age
// }

for(i = 0; i<3; i++){
    delete student[i].age
}
console.log(student)
        