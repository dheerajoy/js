// Conditional Statements

// if (true) {
//   console.log("Hello");
// }

// const age = 21;

// if (age > 21) {
//   console.log("Under age limit to Vote!");
// } else {
//   console.log("Eligeble to Vote!");
// }

// Conditional Operators:  > , < , <= , >= , == , != , ===

// let x = "3";

// if (x !== 3) {
//   console.log("I am logged");
// }

// if - else

// const num = 0;

// if (num < 0) {
//   console.log("- Negative Integer");
// } else if (num <= 0) {
//   console.log("Its Zero");
// } else {
//   console.log("+ Positive Integer");
// }

// && AND    both the side needs to be true

// const userLoggedIn = true;
// const debitCard = true;

// // if (userLoggedIn && debitCard) {
// //   console.log("allow user to buy");
// // }

// || OR    any one of the side needs to be true

// const googleMail = true;
// const microSoftMail = false;

// if (googleMail || microSoftMail) {
//   console.log("valid user");
// }

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 10 ?? 20; // 10
// val1 = null ?? 30; // 30
// val1 = undefined ?? 10; // 10
val1 = null ?? 110 ?? 60; // 110 - first value gets logged
// val1 = null ?? undefined; // undefined
// val1 = undefined ?? null; // null

console.log(val1);

// Terinary Operator

// condition ? true : false;

// const coffee = 11;

// coffee > 10 ? console.log("expensive") : console.log("affordable");
