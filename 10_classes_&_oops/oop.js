const user = {
  id: 2,
  userName: "Dheeraj",
  signedIn: true,

  details: function getUserDetails() {
    console.log(`All Details of ${this.userName} found`); // this keyword for current context
  },
}; // Object Litertal

// console.log(user.details());

// Constructor - new

// creates a new empty object
// calls an constructor functions
// this keyword is injected

function grahak(naam, umar, patha) {
  this.userName = naam;
  this.age = umar;
  this.address = patha;

  // return this;
}

const userOne = new grahak("dheeraj", 23, "bangalore");
const userTwo = new grahak("official", 0, "mars");
console.log(userOne);
console.log(userTwo);
