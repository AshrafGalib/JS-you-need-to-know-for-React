// function add(a,b,c){
// //     console.log(`${a}
// // ${b}
// // ${c}
// // `)
// const args= arguments;
// const argsArray =[...arguments]
// let sum =0;
// for(const arg of argsArray){
//     sum=sum +arg
// }
// console.log(`The sum of the arguments is: ${sum}`);
// }
// add(2,4,8,12,45,56,78);

// ----------------------------------------------


// numbers = [1, 2, 3];
// const [k,,l]=numbers
// console.log(k,l)
// let [a=9,b=10,c=11,d=12,e=13]=numbers;
// console.log(a,b,c,d,e);


// -----------------------------------------------


const laptops =[
    {brand : 'Walton',colour : 'sea blue',prize : 75000 },
    {brand : 'HP',colour : 'black',prize : 65000 },
    {brand : 'Asus',colour : 'white',prize : 115000 }
]

//map
const brandName = laptops.map(x=> x.brand);
console.log(brandName)


// ----------------------------------


//forEach
const getColours=laptops.forEach(x=> console.log(x.colour))
