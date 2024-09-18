// Immediately Invoked Function Expression (IIFE)

function DBConnection() {
  console.log("DB Connected");
}

(function DBConnection() {
  // named iife
  console.log("DB Connected");
})(); // dont miss semi colon

((name) => {
  console.log(`${name}, you are connected to DB!`);
})("dheeraj");
