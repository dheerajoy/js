// ['','','']
// [{},{},{}]
// for of

// const arrMonth = ['jan','feb','mar','apr']

// for (const element of arrMonth) {
//     console.log(element);
// }

// const greet = "hello, world";

// for (let i of greet) {
//   console.log(`character: ${i}`);
// }


// Maps

const map = new Map;

map.set("1", 'India')
map.set("2", 'Nepal')
map.set("3", 'Bhutan')
map.set("4", 'Bangladesh')

// console.log(map);

for (const [key,value] of map) {
   console.log(key,"-",value);
}

// objects are not iteratable 