

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
        const Users = data
        const UL = document.getElementById('data_list')
        for(const user of Users){
            console.log(user.address['city'])
            const Li = document.createElement('li')
            Li.innerText = `Name: ${user.name}, Email: ${user.email}, City: ${user.address['city']}`
            UL.appendChild(Li)
        }
    })
}