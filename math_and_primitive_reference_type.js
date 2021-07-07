//primitive type
let scoreOne = 90;
let scoreTwo = scoreOne;
console.log(scoreOne, scoreTwo);
scoreOne = 100;
console.log(scoreOne, scoreTwo); //changes occur only in scoreOne

//reference type => store pointer in stack not store values
let names = {
    firstName: 'luigi',
    lastName: 'li'
}
let officialName = names;
console.log(names, officialName);
names.firstName = 'shaun';
console.log(names, officialName);//changes occur in both object => it points to same object
officialName.lastName = 'ninja';
console.log(names, officialName);

let num = 7.5;
console.log("value of pi: " + Math.PI);
console.log("round of number: " + Math.round(num));
console.log("take lower value: " + Math.floor(num));
console.log("take higher value: " + Math.ceil(num));
console.log("remove decimal part: " + Math.trunc(num));
console.log(Math.round(Math.random() * 100)); //random() generate random number between 0 to 1