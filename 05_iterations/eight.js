// reduce

const arr = [1, 2, 3];

// const total = arr.reduce(function (acc , cur){
//     console.log(`acc:${acc} cur:${cur}`);
//     return acc + cur
// },0)

const total = arr.reduce((acc, cur) => acc + cur, 0);

// console.log(total);

const cart = [
  {
    item: "bag",
    price: 200,
  },
  {
    item: "shoe",
    price: 1200,
  },
  {
    item: "pen",
    price: 10,
  },
  {
    item: "books",
    price: 550,
  },
];


const cartTotal = cart.reduce((acc , item) => {
    return acc + item.price
},0)

console.log(cartTotal);
