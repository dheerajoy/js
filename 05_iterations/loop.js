// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element);
  if (element == 5) {
    //   console.log('I AM 5');
  }
}

// console.log(element); scope - cannot access element

// loop inside loop
// maths table till 10
for (let i = 1; i <= 10; i++) {
  // console.log(`---- Maths Table of ${i} ----`);
  for (let j = 1; j <= 10; j++) {
    //    console.log(`${i} x ${j} = ${i*j}`);
  }
}

const arr = ["iron man", "hulk", "captain america"];
// console.log(arr.length);

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  // console.log(element);
}

// Break and Continue

// for(let i=1; i <= 20; i++){
//     if (i == 5) {
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`I = ${i}`);
// }

// control execution comes out of the loop using break

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`I = ${i}`);
}

// control execution stops of one check again continue the loop

