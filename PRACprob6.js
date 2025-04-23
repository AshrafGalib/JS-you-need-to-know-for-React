const nmbrs = [33,50,79,78,90,101,30]
const selectiveNmbrs = nmbrs.filter(x=>x%10==0)
console.log(selectiveNmbrs)

const nmbr = nmbrs.find(x=>x%10==0)
console.log(nmbr)