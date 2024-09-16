// functions 


function greet () { // keyword  functionName
    console.log('Hello , World!');
}

// greet(); // function call   // output: Hello , World!


function addTwoNumbers ( num1 , num2) { // parameters are passed in function defination within ()
    // console.log(num1 + num2);
}

addTwoNumbers // function reference
// addTwoNumbers(2,3); // function exicution -->  pass arguments within ()  // output: 5


// const addition =  addTwoNumbers(2,3);
// console.log('addition: ', addition); // addition: undefined ... because the function return a log




function myName (name = 'Slim SHaddy') { // default parameters
    console.log('My name is' , name);
}

// myName();  // My name is Guest --> takes default value
// myName('Dheeraj');  // My name is Dheeraj



function multiplyTwoNumbers (a ,b) {
    // let result = a * b;
    // return result;

    return a * b;

    console.log('hello'); // Unreachable code because of function return
}

 const result = multiplyTwoNumbers(2,3);

//  console.log(result); // 6



function loggedIn(userName) {
    if(userName){
        return `Yes , ${userName} is logged In`
    } else {
        return `Not logged In`
    }
}

// console.log(loggedIn()) // Not logged In
// console.log(loggedIn('dheeraj')) // Yes , dheeraj is logged In





function calculate(val1 ,val2 ,...num1) { // ...rest operator
    return num1  
}

console.log(calculate(13,72,34)); // 34 ----- val1 has 13 , val2 has 72 and remaining are rest

const number = [10,20,30,40,50]

const user = {
    name: 'dheeraj',
    age : 16,
    weight :' 90kg'
}

function userObject(anyObject){
    return `name is ${anyObject.name} and age is ${anyObject.age}`
}

// console.log(userObject(user));
// console.log(userObject({
//     name: 'dheeraj',
//     age : 16,
//     weight :' 90kg'
// }));

