const instructors =[
    {name:'Nodi',age:28,position: 'Senior'},
    {name:'Akil',age:26,position: 'junior'},
    {name:'Shobuj',age:30,position: 'Senior'},
]
const seniorInstructors = instructors.filter(x=> x.position== 'Senior')
// console.log(seniorInstructors)
const seniorInstructorsNames = seniorInstructors.forEach(x=>console.log(x.name))


