// INHERITANCE


// class GrandFather {
//     FirstName = "keshavrao"
//     LastName = "Kharade"
//     dispalyGName() {
//         console.log(this.FirstName + this.LastName)
//     }
// }

// let keshavrao = new GrandFather()
// console.log(keshavrao)
// console.log(GrandFather.FirstName)
// class Father extends GrandFather {
//     FName = "Girish"
//     dispalyFName(){
//         console.log(this.FName + this.FirstName + this.LastName)
//     }
// }

// let Girish = new Father()
// console.log(Girish)
// Girish.dispalyFName()


// class son extends Father { 
//     Snname = "Pranav"
//     dispalySName(){
//         console.log(this.Snname + this.FName + this.LastName)
//     }
// }

// let pranav = new son()
// pranav.dispalyFName()
// pranav.dispalySName()
// pranav.dispalyGName()


//program 2

// class Gfather{
//     constructor(GNAme,LastName){
//         this.GNAme = GNAme
//         this.LastName = LastName
//     }
//     displayGname(){
//         console.log(this.GNAme + this.LastName)
//     }

// }
//  class Father extends Gfather {
    
//  }
// let Girish = new Father('keshav','kharade')
// console.log(Girish.GNAme)
// console.log(Girish.LastName)


//program 3
class Gfather{
    constructor(GNAme,LastName){
        this.GNAme = GNAme
        this.LastName = LastName
    }
    displayGname(){
        console.log(this.GNAme + this.LastName)
    }

}

let keshavrao = new Gfather('keshavrao','kharade')
keshavrao.displayGname()

 class Father extends Gfather {
    constructor(GNAme, LastName, Fname){
        super(GNAme,LastName)
        this.Fname = Fname
    }
   displayFname(){
    console.log(this.Fname + this.GNAme + this.LastName)
   }
    }

    class daughter extends Father {
        constructor(GNAme, LastName, Fname,Dname,){
            super(GNAme, LastName, Fname)
            this.Dname =Dname
        }
        displayDname(){
            console.log(this.Dname + this.Fname + this.LastName)
        }
    }
    
    let pratiksha = new daughter ('keshav','kharade','girish','pratiksha')
    pratiksha.displayDname()
    pratiksha.displayFname()
    console.log(pratiksha.LastName)
    console.log(pratiksha.GNAme)
    console.log(pratiksha.Fname)
    pratiksha.displayGname()
    keshavrao.displayGname()



