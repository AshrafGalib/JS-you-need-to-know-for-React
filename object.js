const person={
    Name : 'Ashraf Galib',
    Age : 26,
    Institution : 'IIUC',
    'Favourite food' : 'Kacchi',
    UsingDevices : ['Laptop','PC','Argus','Cell phone','Watch'],
}
//update
person.Name= 'Ashraf Galib Rifat';
person['Favourite food']='Kacchi Biriyani';

const Keys =Object.keys(person);
const Values =Object.values(person);
const name =person.Name;
const food = person['Favourite food'];



const output = (x,y,z,w) => {
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(w)
}
const result =output(Keys,Values,name,food)