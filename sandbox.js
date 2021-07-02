//undefined(not Intentionally)
let age;
//variable is not assigned to any value => then browser set default value as 'undefined'
console.log(age, age + 3, `the age is ${age}`);

//null
let year = null;
//variable is assigned to null => then browser take variable contain no value
//in any operation => null value acts as zero
console.log(year, year + 3, `year is ${year}`);

//boolean comparison(==, !=, <, >, <=, >=)
let number = 20;
console.log(number != 25);//20 is not equal to 25


//boolean comparison in String
let fName = 'mahi';
//compare by 1st letter of both string
//'m' from mahi compare with 'z' from zebra
//      => index position of 'm' is less than index position of 'z' in alphabt
console.log(fName > 'zebra');
// Uppercase letter is always lesser than LowerCase Letter
console.log(fName > 'Zebra');


//loose comparison => it deosn't check data type => incase we compare different data type, it did type conversion
console.log(5 == '5'); //true
console.log(5 != '5'); //false
//strict comparison => it check data type => incase we compare different data type, it can't do type conversion
console.log(5 === '5'); //false
console.log(5 !== '5'); //true


//Explicit Type conversion
let score = '100';

//convert to Number
score = Number(score);
console.log(score, typeof score);

//Convert to String
score = String(score);
console.log(score, typeof score);

//convert to Boolean
//positive and negative number(minus symbol) => True
//zero => False
//all string values => True
score = -100;
score = Boolean(score);
console.log(score, typeof score);
