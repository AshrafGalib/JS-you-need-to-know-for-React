const electronicAssets =[
    {name:'Laptop',brand:'Walton',prize:78515},
    {name:'Phone',brand:'Apple',prize:69990},
    {name:'PC',brand:'Gygabyte',prize:80000},
    {name:'Vape',brand:'Argus',prize:5000},
]

const selectedPrices = electronicAssets.filter(p=>p.prize > 70000)
console.log(selectedPrices)