function another(x,y){
    callPeople(y);
}

function callPeople(name){
    console.log("Hey",name,"Welcome.")
}
another(callPeople,'Akil');