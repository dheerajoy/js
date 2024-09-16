// functions 


function greet () { // keyword  functionName
    console.log('Hello , World!');

}

greet(); // function call   // output: Hello , World!


function addTwoNumbers ( num1 , num2) { // parameters are passed in function defination within ()
    console.log(num1 + num2);
}

addTwoNumbers // function reference
addTwoNumbers(2,3); // function exicution -->  pass arguments within ()  // output: 5


const addition =  addTwoNumbers(2,3);
console.log('addition: ', addition); // addition: undefined ... because the addition is not stored in any variable




function myName (name = 'Guest') { // default parameters
    console.log('My name is' , name);

}

myName();  // My name is Guest --> takes default value
myName('Dheeraj');  // My name is Dheeraj



function multiplyTwoNumbers (a ,b) {
    // let result = a * b;
    // return result;

    return a * b;

    console.log('hello'); // Unreachable code because of function return
}

 const result = multiplyTwoNumbers(2,3);

 console.log(result);