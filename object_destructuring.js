const person1={
    Name : 'Ashraf Galib',
    Age : 26,
    Institution : 'IIUC',
    'Favourite food' : 'Kacchi',
    UsingDevices : ['Laptop','PC','Argus','Cell phone','Watch'],
    Watch :{
        Brand : 'Poedagar',
        Color : 'Black',
    }
}

const person2={
    Name : 'wasif Sayem',
    Age : 27,
    'Favourite food' : 'Pasta',
    UsingDevices : ['Laptop','Cell phone','Watch'],
}

const {Brand,Color}=person1.Watch
console.log(Brand,Color)

const [x]= person2.UsingDevices
console.log(x)