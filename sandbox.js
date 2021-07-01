//String 
console.log('hello, world');

let email = 'xyz@gmail.com';
console.log(email);

//concatenate strings
let firstName = 'preethi';
let lastName = 'Dev';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//searching character by index
console.log(fullName[0]);

//Properties - total length
console.log(fullName.length);

//method 
//convert to uppercase
console.log(fullName.toUpperCase());
//convert to lowercase
let example = fullName.toLowerCase();
console.log(example, fullName);
//find index using indexOf() method
console.log("index of 'D' character: " + fullName.indexOf('D'));
//find index using lastIndexOf() method
console.log("index of 'i' character: " + fullName.lastIndexOf('i'));
//slice(start index, end index) method => cut part of string
console.log(fullName.slice(0,7));
//substr(start index, count of character) method => fetch part of string
console.log(fullName.substr(8,3));
//repace(search value, replace value) method
console.log(fullName.replace('e', 'E'));

//template String or template literals
//instead using '+' symbol for concatnate use template Literal to avoid messy code
console.log(`my firstName is ${firstName} and my lastName is ${lastName}`);
