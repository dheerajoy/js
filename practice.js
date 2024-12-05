// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//   const user = "Alice"; // Simulating user input
//   callback(user); // Calling the callback function
// }

// // Passing the greet function as a callback
// processUserInput(greet);

// let x = "apple";
// let y = "cat";
// let z = "ball";

// let strings = [x, y, z];
let strings = ["a", "c", "b"];

strings.sort();

let middleString = strings[1];

// console.log("The middle string is:", middleString);

let reaction = "yikes";
reaction[0] = "l";
// console.log(reaction);

function check(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(
  check([99, 2, 3, 1212, 12121, 43434, 333, 3, 3232, 100, 11, 15], 102)
);
