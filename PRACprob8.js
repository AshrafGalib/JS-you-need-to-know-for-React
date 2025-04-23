const people =[
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
]

//using for loop
let sum=0;
for(let i=0;i<people.length;i++){
    const person=people[i];
    const Age=person.age;
    sum=sum+Age;
 }
 console.log(sum)

//using  array reduce
const totalAge=people.reduce((p,c)=>p+c.age,0)
console.log(totalAge)