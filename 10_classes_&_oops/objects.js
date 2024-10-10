function add2(num) {
  return num + 2;
}

add2.power = 2;

console.log(add2(2));
console.log(add2.power);
console.log(add2.prototype);

function createUser(userName, age) {
  this.userName = userName;
  this.age = age;
}

createUser.prototype.increment = function () {
  this.age++;
};

createUser.prototype.printMe = function () {
  return console.log(`age is ${this.age}`);
};

const dheeraj = new createUser("dheeraj", 23);
const kumar = new createUser("kumar", 10);

dheeraj.printMe();
