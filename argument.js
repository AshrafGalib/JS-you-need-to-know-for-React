function add(x,y,z){
    const args1 =arguments;
    const args2 =arguments[2];
    const args3=[...arguments]
// const result = x+y+z
// console.log(result)
console.log(args1,args2,args3)
}
add(1,2,3,4,5)
 