// singleton
// Object.create

// objects literals { }

const mySym = Symbol('key')
const user = {
    name: 'dheeraj',
    "last name": 'kumar',
    email: 'dheeraj@gmail.com',
    age: 16,
    city: [ "bangalore" , "jaipur"],
    loggedIn: false,
    [mySym]: 'key', // using symbol in object
}

// To access the value
// console.log(user.name); // dot notation
// console.log(user["last name"]); // bracket notation

// console.log(user[mySym]); // to access symbol in objects


user.email = 'new-email.com'
Object.freeze(user)  // will not allow to change object
user.email = 'change-again-email.com'

// console.log(user);

user.greeting = function (){
    console.log(`hello user`);
}

user.greetingTwo = function (){
    console.log(`hello user, ${this.name}`); // this keyword in object to access values of current object
}

console.log(user.greeting); // [Function (anonymous)]
console.log(user.greetingTwo); // [Function (anonymous)]

console.log(user.greeting()); // hello user undefined
console.log(user.greetingTwo()); // hello user, dheeraj undefined




