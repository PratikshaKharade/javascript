// polymorphism

// class vahicle {
//     constructor(wheel) {
//         this.wheel = wheel
//     }
//     start() {
//         console.log('start......')
//     }
//     stop() {
//         console.log('stop......')
//     }
// }

// class twoWheeler extends vahicle {
//     constructor(wheel, mirror) {
//         super(wheel)
//         this.mirror = mirror
//     }
// }

// let scooty = new twoWheeler(2, 2)
// scooty.start()
// scooty.stop()
// console.log(scooty.wheel)
// console.log(scooty.mirror)


//polymorphism --- overloadinh

// class additon {
//     add(a,b){
//         console.log(a+b)
//     }
//     add(a,b,c){
//         console.log(a+b+c)
//     }
//     add(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }


// let a = new additon()
// //console.log(a)
// a.add(11,22,33,55)


class additon {
    add(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }

    }

}

let a = new additon()
a.add(11,22,33,44)
// a.add(11,22,33)
// a.add(11,22)

class worldBank {
    loan(){
        console.log('the loan percentage will be 10')
    }
    save(){
        console.log('the loan percentage will be 12')
    }
}


class SBI extends worldBank {
    loan(){
        console.log('the loan percentage will be 6')
        super.loan()

    }
    save(){
        console.log('the loan percentage will be 5')
        super.save()
    }
}

class PNB extends worldBank {
    loan(){
        console.log('the loan percentage will be 15')
        super.loan()

    }
    save(){
        console.log('the loan percentage will be 20')
        super.save()
    }
}

let pune = new SBI()
pune.loan()
pune.save()

let sangamner = new PNB()
sangamner.loan()
sangamner.save()
