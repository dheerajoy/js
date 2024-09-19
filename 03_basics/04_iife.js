// Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("I am an IIFE");
})(); // dont miss semi colon

// named iife
(function DBConnection() {
  console.log("DB Connected");
})();

// iife as arrow function with parameters
((name) => {
  console.log(`${name}, you are connected to DB!`);
  console.log(this); // {}
})("dheeraj");
