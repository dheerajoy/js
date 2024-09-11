// Dates

const newDate = new Date();
// console.log(newDate); //2024-09-10T18:29:40.897Z

// console.log(newDate.toString());
// console.log(newDate.toLocaleString('en-IN', {timeZone:'UTC'}));
// console.log(newDate.toDateString());

//console.log(typeof newDate); // object


// let myDate = new Date(2023 , 0 ,23)
// let myDate = new Date(2023 , 0 ,23 ,5 ,3)
// let myDate = new Date('2023-10-23')
// let myDate = new Date('10-23-2023')
// date cannot be first

// console.log(myDate.toLocaleString());

let myTimeStamp = new Date();
// console.log(myTimeStamp.getTime());
// console.log(myTimeStamp.getSeconds());



console.log(myTimeStamp.toLocaleString('default', {
    weekday:'long',
    year:'2-digit'
}));

