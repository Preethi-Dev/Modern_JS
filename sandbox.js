//Function and methods

//function decleration(It does hoisting means we can declare function even after function call)
function greeting(time){
    console.log(`good ${time}`);
}
//invoke the function or call the function
greeting('day');

//function expression(It doesn't support hoisting)
//preferable way for clean coding
const add = function(num1, num2){
    return num1 + num2; //return the value
};
let result = add(10, 20); //store the value
console.log(`addition of two number is ${result}`); //print using template string

const square = function(res){ 
    console.log(res**2);
};
square(result);//pass the result of add function as arugument to square function
