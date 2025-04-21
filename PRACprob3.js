const numbers =[2,4,6,8,9];

const average = a=>{
    let sum=0;
    for(const number of a){
        const square =  Math.pow(number, 2);
         sum = sum +square;
         }
    console.log(sum)
    const avrg =sum/a.length
    return avrg;
}
const data =average(numbers);
console.log(data)