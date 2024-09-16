// singleton object
// const newObj = new Object();
// console.log(newObj);

// non-singleton object
// const new_obj = {}

const carDetails = {
    brand: 'maruthi',
    model: 'jimmy',
    year: 2016,
    isReg: true,
}

carDetails.isReg = false // access the value and modify it


console.log(carDetails);



const obj1 = { 1:'a' , 2:'b'}
const obj2 = { 3:'c' , 4:'d'}

const obj3 = Object.assign({},obj1,obj2) // combine two objects
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// or 

const obj4 = {...obj1 , ...obj2} // combine two objects using spread operator
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(obj3)); // returns a array of keys existing in this obj
console.log(Object.values(obj3));  // returns a array of values existing in this obj


console.log(carDetails.hasOwnProperty('brand')) // true



// object destructuring

const course = {
    language:'JavaScript',
    duration: '20h',
    limit : 1,
    instructor: 'Hitesh'
}

const { language } = course;
const { language : title } = course;

console.log(language); // 'JavaScript'
console.log(title); // 'JavaScript';