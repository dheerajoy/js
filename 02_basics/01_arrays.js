// Array [ ] - Square Brackets

const myArr = [1, 2, 3, 4, 5];
// const myArr1 = [23 , 'dheeraj' ,true];
// console.log(myArr[0]);

// const arr = new Array(2,'hello',4)
// console.log(arr);

// const myArr = ['dheeraj' , [ 23 , 2024 , 'oct'] , true];
// console.log(myArr[1][0]); // 23

// myArr.pop()
// myArr.push(2)

// myArr.shift()
// myArr.unshift(1,true,1)

// myArr.fill('hello',0 ,1)

// console.log(myArr.includes(2 , 3));
// console.log(myArr.indexOf(0));
// console.log(myArr);

// let myNewArr = myArr.join('-')
// console.log( myNewArr);

// slice splice

console.log("initial ", myArr);

const sliceArr = myArr.slice(0, 2);
console.log("Slice ", sliceArr);

const spliceArr = myArr.splice(0, 2);
console.log("Splice ", spliceArr);

console.log("original ", myArr);
