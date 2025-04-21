const num1 =[1,2]
const num2=[3,4]

const mergeArray = (a,b)=>{
    const numbers =[...a,...b]
    console.log(numbers)
    const max =Math.max(...numbers)
    console.log(max)
}
mergeArray(num1,num2)