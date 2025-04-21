//1
const multiply =(a,b,c)=> a*b*c;
const numbers =multiply(2,3,4);
console.log(numbers)

//2
const Sen1 = 'I am a web developer';
const Sen2 = 'I love to code';
const Sen3 = 'I love to eat biriyani';

const ThreeLines =`${Sen1}.
${Sen2}.
${Sen3}.
`
console.log(ThreeLines)

//3
const add =(a,b=7)=> a+b;
const nmbrs =add(3);
console.log(nmbrs)
