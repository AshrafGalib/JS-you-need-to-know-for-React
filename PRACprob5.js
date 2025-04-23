const oddNmbrs =[1,3,5,7,9]

//Using For loop
const evenNmbrs =[]
for(let i=0;i<oddNmbrs.length;i++){
    const nmbr = oddNmbrs[i];
    const add =nmbr+1;
    evenNmbrs.push(add)
}
console.log(evenNmbrs)

//using array.map()
const EvenNmbrs =oddNmbrs.map(x=>x+1)
console.log(EvenNmbrs)
