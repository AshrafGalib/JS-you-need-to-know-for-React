const laptops =[
    {brand : 'Walton',colour : 'sea blue',prize : 75000 },
    {brand : 'HP',colour : 'black',prize : 65000 },
    {brand : 'Asus',colour : 'white',prize : 115000 }
]

//map
const brandName = laptops.map(x=> x.brand);
console.log(brandName)

//forEach
laptops.forEach(x=>{
    const LaptopClr = x.colour
    console.log(LaptopClr)
})

//filter
const  selectiveLaptop = laptops.filter(x=> x.prize<70000)
console.log(selectiveLaptop)

//find
const  selectiveLaptop1 = laptops.find(x=> x.prize<80000)
console.log(selectiveLaptop1)

//reduce
const totalPrice = laptops.reduce((p,c)=>p+c.prize,0)
console.log(totalPrice)