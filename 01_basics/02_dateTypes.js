let name = 'dheeraj'; //string 
let age = 16; //number 
let isLogged = false; //boolean

//premitive datatype
//string => ""; ''; ``;
//bigint
//number => 2 to power 53
//boolean => true / false
//null => standalone value / empty value
//undefined => value is not assigned
//symbol =>

//typeof
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//reference type
// objects {} , array [] , function
const obj = {name:'dheeraj', age:16}
const heros = ['iron man', 'hulk','thor']
const myFunction = function(){
    console.log('hello world');
}
// console.log(typeof myFunction); // function object


//+++++++++++++++++++++++++++++++++++++++++++

//stack and heap memory 


//stack(primitive) => copy of the actual value
let emailOne = 'one@gmail.com';
let emailTwo = emailOne;
emailTwo = 'two@gmail.com';
console.log(emailOne);
console.log(emailTwo);


//heap(non-primitive) => reference value / original value is changed
let userOne = {name:'dheeraj',age:16}
let userTwo = userOne;
userOne.age = 23;
console.log(userOne);
console.log(userTwo);