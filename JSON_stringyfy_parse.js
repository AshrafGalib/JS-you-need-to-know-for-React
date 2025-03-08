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
console.log(person1)

const jsonStr = JSON.stringify(person1)
console.log(jsonStr)
console.log(typeof(jsonStr))

const jsonObj = JSON.parse(jsonStr)
console.log(jsonObj)
console.log(typeof(jsonObj))