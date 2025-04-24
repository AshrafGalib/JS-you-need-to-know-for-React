function outer (){
    const name1 ="Galib"
    return function(){
      const name2 ="Ashraf";
      const fullName=`${name2} ${name1}`
      return fullName;
    }
    
}
const output =outer()
console.log(output())


// outer() returns a function.
// So output is actually a function, not the string "Ashraf Galib" yet.