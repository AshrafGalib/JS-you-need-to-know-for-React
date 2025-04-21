const age = [20, 22, 24, 26, 25, 28, 30]
const person = {
    Name: 'Ashraf Galib',
    UniversityName: 'IIUC',
    Dept: 'B.Sc in CSE',
    ID: 'C211028',
    Friends: ['Farhan', 'Mahtab', 'Rocky', 'Safrath']
}

const aboutMe = `My name is ${person.Name}. I'm ${age[4]} years old. I'm completing ${person.Dept} in ${person.UniversityName}. My ID is ${person.ID}. ${person.Friends[2]} is one of my good friends in university. `

console.log(aboutMe)