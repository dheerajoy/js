const user = {
  id: 2,
  userName: "Dheeraj",
  signedIn: true,

  details: function getUserDetails() {
    console.log(`All Details of ${this.userName} found`); // this keyword for current context
  },
}; // Object Litertal

console.log(user.details());
