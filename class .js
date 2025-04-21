class Shop {
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
}
const Shawpno = new Shop ('Shawono','30/31 College Road')
console.log(Shawpno)

const Basket =new Shop('Basket','Andarkilla')
console.log(Basket)


//--------------------

class pen {
    constructor(name,prize){
        this.name =name ;
        this.prize =prize
    }
}
const matador = new pen('Matador','10 tk')
console.log(matador)

//-------------------------

class car extends pen {
    constructor(name,colour,type,price){
        super(name,price);
        this.colour=colour;
        this.type=type;
    }
}
const Mark2 =new car('Toyota Mark 2','White','Sedan',1200000)
console.log(Mark2)

//--------------------------------------

class animal {
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    RNactivity(){
        console.log(`${this.name} is sleeping now.`)
    }
    sleep(){
        this.RNactivity()
    }
}

const tushi =new animal('Tushi','5 years','Female')
tushi.RNactivity()

const tiger = new animal('Tiger','4 years','Male')
tiger.sleep()