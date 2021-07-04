//control flow basics
//loop statement
//for loop
const names = ['jhon', 'michel', 'tom'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//while loop
let count = 0;
while(count < names.length){
    console.log(names[count]);
    count++;
}

//do while loop
let iteration = 3;
do{
    console.log(iteration);
    iteration++;
}while(iteration < names.length);

//block scope
//let and const are block scope variable
let score = 10;
//conditional statement
if(true){
   let score = 20; //accessible within the code block and can't access outside code block
    console.log('inside scope: ', score);
}
console.log('outside scope: ', score);
