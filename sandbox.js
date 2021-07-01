//array => []
let names = ['keekee', 'preethi'];
console.log(names);

//fetch value from array based on index
console.log(names[1]);

//heterogenous => array accept different datatype
let details = ['jhon', 9876543212 , 'USA'];
console.log(details);

//Array methods
//find length of array
console.log(`length of array: ${names.length}`);

//join values in array
console.log(`join values in array by '_' symbol: ${names.join('_')}`);

//find index
console.log(names.indexOf('keekee'));

//concatenation in array
console.log(names.concat('designer', 'developer'));

//push and pop operation in array
let pushed_item = names.push('twin');
console.log(pushed_item); //print number of item in array
console.log(names) //print array

let poped_item = names.pop();
console.log(poped_item); //print popped item
console.log(names); //print array
