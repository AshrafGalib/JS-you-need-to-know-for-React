const UsingDevices = ['Laptop','PC','Argus','Cell phone','Watch']
const [firstDevice,secondDevice,thirdDevice,forthDevice,fifthDevice]=UsingDevices;
// console.log(`My ${forthDevice}'s model name is Apple and my ${fifthDevice}'s model name is Poedagar.`)

const makeArray =(x,y) =>[x,y]
const array = makeArray(45,89)

const [firstNumber,secondNumber]= array;
// console.log(secondNumber)


// ---------------------------


let numbers =[1,2,3]

for (const num of numbers){
    console.log(num)
}

const [FirstNumber,SecondNumber,ThirdNumber]=numbers
// console.log(FirstNumber,SecondNumber,ThirdNumber)

const [k,,l]=numbers
// console.log(k,l)

let [a=9,b=10,c=11,d=12,e=13]=numbers;
console.log(a,b,c,d,e);

// let a=1;
// let b=2;
// let c=3;
[a,b,c,d,e]=[e,d,c,b,a];
console.log(a,b,c,d,e);

