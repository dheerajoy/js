//constant and variable

// constant are named storage container which can store data , but once the value is assigned to a const cannot be changed

const accountId = 1445;
let accountEmail = "dheeraj@gmail.com";
var accountPassword = "123";
accountCity = "bangalore";
let accountState;

// accountId = 2; not allowed to change const
accountEmail = "kumar@gmail.com";
accountPassword = 1212;
accountCity = "jaipur";

console.log(accountId);

/*
prefer not to use var because of scope issue
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
