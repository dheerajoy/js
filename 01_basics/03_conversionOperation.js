let score = "10abc";


//console.log(typeof score);
//console.log(typeof (score));

let scoreAsNumber = Number(score);

//console.log(typeof scoreAsNumber);
//console.log(scoreAsNumber);

let number = false;
//console.log(number);
//console.log(typeof (number));

let numberConversion = Number(number);
//console.log(typeof numberConversion);
//console.log(numberConversion);


// number convert easily 
// "33" => 33
// '33abc' => Nan
// true => 1; false => 0

let loggedIn = "hh";

let booleanLoggedIn = Boolean(loggedIn);
// console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false; "dhee" => true;

let count = 10;

let countToString = String(count);
// console.log(countToString);
// console.log(typeof countToString);

//**** operations *********

// console.log(1 + 2);
// console.log(1 + "2");
// console.log("1"+ 2);
// console.log("1"+ 2 + 2); // 122
// console.log(1 + 2 + "2"); //32
// console.log(+true); // 1
// console.log(+""); // 0

let a = 10;
const postfix = a++; //postfix => increments and returns the value before incrementing.
console.log(postfix , a);
let b = 10;
const prefix = ++b; // prefix => increments and returns the value after incrementing.
console.log(prefix, b);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
