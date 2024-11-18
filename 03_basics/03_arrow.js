const user = {
  username: "dheeraj",
  price: 999,
  welcomeMessage: function welcomeMessage() {
    console.log(`${this.username} , Welcome to our website`);
    console.log(this);
  },
};

console.log(typeof user);

// user.welcomeMessage(); // dheeraj , Welcome to our website
// user.username = "kumar";
// user.welcomeMessage(); // kumar , Welcome to our website

// console.log(this); // {} context of node , it is different in browser it is window object

function coffee() {
  console.log(this);
}

const coffeeFun = function coffee() {
  console.log(this);
};

// coffee(); // returns funtion context
// coffeeFun(); // returns funtion context

const chai = () => {
  console.log(this);
};

// chai(); // {}

// const addTwo = (num1, num2) => {
//   return num1 + num2;  // explcit return
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const message = () => ({ username: "dheeraj" });

console.log(message);
// console.log(addTwo(3, 5));
