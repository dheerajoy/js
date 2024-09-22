// reduce

const arr = [1,2,3]

// const total = arr.reduce(function (acc , cur){
//     console.log(`acc:${acc} cur:${cur}`);
//     return acc + cur
// },0)

const total = arr.reduce((acc, cur)=> acc + cur,0)

console.log(total);
