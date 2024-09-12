const oldCar = ['maruthi','omni', 'padmini'];
const newCar = ['thar','swift', 'echo'];

// const allCar = oldCar.concat(newCar)
const allCar1 = [...oldCar , ...newCar]

console.log(allCar1);



const num = [1 , 2 , 3 , [ 4 , 5 ] , 1 , 2 , [1,[2,3]] ]

console.log(num.flat());

console.log(Array.isArray("dheeraj"))
console.log(Array.from("dheeraj"))
console.log(Array.from({name:"dheeraj"})) // []

let num1 = 12;
let num2 = 14;
let num3= 13; 

console.log(Array.of(num1,num2,num3));

