const friends = ['Wasif','Farhan','Sajjad','Jabed'];
const newFriends =[];

const createNewArray = a=>{
   for(const friend of friends){
if(friend.length%2==0){
    newFriends.push(friend)
}
   }
}
const data =  createNewArray(friends)
console.log(newFriends)
