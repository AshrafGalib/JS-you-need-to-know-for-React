function add(x,y,z){
    // const args =arguments;
    // const args =arguments[2];
    const args=[...arguments]
const result = x+y+z
console.log(result)
console.log(args)
}
add(1,2,3,4,5)