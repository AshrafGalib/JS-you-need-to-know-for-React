//pass by value
const Name = 'Ashraf Galib';
function rename(x){
    const name =x + ' Rifat'
 return name;
}
console.log(Name)
const result=rename(Name)
console.log(result)

//pass by reference
const person={
    name:'Ashraf Galib',
    age: 23,
    address:{
        city:'Dhaka',
        country:'Bangladesh'
    }
}
// console.log(person)
function updatePerson(obj){
    obj.name='Rifat'
    obj.age=24
    obj.address.city='Narayanganj'
    return obj;
}

const result2 =updatePerson(person)
console.log(result2)
console.log(person)
