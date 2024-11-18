let a = 10;
const b = 20;
var c = 30;

// { } - if/else , functions and loops are block level scope
// values declared in global scope can access in block but if declared in block cannot access outside block scope
if (true) {
  let a = 20;
  const b = 30;
  var c = 40;

  //   console.log("block: ", a); // 20
  //   console.log("block: ", b); // 30
  //   console.log("block: ", c); // 40
}

// console.log("global: ", a); // 10
// console.log("global: ", b); // 20
// console.log("global: ", c); // 40

function one() {
  const outer = "Im in funtion one";
  function two() {
    const inner = "Im in funtion one";

    console.log(outer);
  }
  //   console.log(inner);

  two();
}

// one();

if (true) {
  let age = 21;
  if ((age = 21)) {
    const message = "Can Vote";
    // console.log(`Age is ${age} , ${message}`); // Age is 21 , Can Vote
  }

  // console.log(message); // message is not defined  ---- outside scope
}

//console.log(age); // age is not defined  ---- outside scope

console.log(addOne(1));
function addOne(num) {
  return num + 1;
}

// console.log(add(1));

const add = function add(num) {
  // function declared in a variable cannot be called above this declartion
  return num + 1;
};

console.log(add(5));
