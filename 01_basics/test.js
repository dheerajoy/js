const userId = 23; // remain constant connot be changed once declared
let userName = "Dheeraj"; // can be changed later on
var userPassword = "1234";  // prefer not to use because of scope issue
userLocation = "bangalore"; // can declare a variable even without keyword
let userAge; // if a variable is declared and a value is not assigned it shows undefined on log , can assign value later on 

console.log(userId);

//userId="123"; // will not compile because of const keyword

console.table([userId,userName,userPassword,userLocation,userAge]);