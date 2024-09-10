//strings 
const name = 'dheeraj';
const age = 23;


// string concatenation
// console.log("my name is " + name + " and my age is " + age); 


// string interpolation
// console.log(`my name is ${name} and age is ${age}`);

// other ways to declare string

const newStr = new String('Dheeraj');
//typeof newStr is object here
// console.log(typeof newStr);  // object


//can access methods for newStr
// console.log(newStr.__proto__);


// length
// console.log(name.length); // 7
// console.log(newStr.length); // 7
// returns length of the string 

// toUpperCase
// console.log(newStr.toUpperCase()); // DHEERAJ
// returns all the character as Uppercase letters

// charAt
// console.log(newStr.charAt(0)); // D
// returns character at index postion  

// indexOf
// console.log(newStr.indexOf('D')); // 0
// returns the index postion of D in newStr

const str = new String('hello-world');

// slice - extracts a section of this string and returns it as a new string, without modifying the original string - can give negative index
// const another1Str =  str.slice(-6 , 6);
// console.log(another1Str);


// const anotherStr = str.substring(0 , 5);
// console.log(anotherStr);



// replace 
// console.log(str.replace('-', ' ')); // hello world


// trim - Removes whitespace from both ends of this string and returns a new string, without modifying the original string
// const city = ' bangalore city. '
// console.log(city.trim());
// trimStart() - just remove space at start of string
// trimEnd() - just remove space at end of string


// split - splits an string and gives out an new array by a separator 
// const months = 'jan-feb-mar-apr-oct-dec'
// const monthsArr = months.split('-');
// console.log(monthsArr[0]);


// const mail = 'dheeraj@gmail.com'
// console.log(mail.constu);
