// Conditional Switch

//syntax
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const day = 1;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("webnesday");
    break;

  default:
    console.log("Unknown day");
    break;
}

const month = "jan";

switch (month) {
  case "jan":
    console.log("Jan");
    break;
  case "feb":
    console.log("feb");
    break;
  case "mar":
    console.log("march");
    break;

  default:
    console.log("Unknown month");
    break;
}
