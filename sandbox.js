//CallBack Function
const myFun = callbackFun => { // pass function as argument
    let value = 10;
    callbackFun(value); // call that callback function
};

myFun(value => { //callback function get defined
    console.log(value);
});

//forEach method in callback function
const ul = document.querySelector('.val');
const people = ['james', 'jhon', 'michel'];
let html = ``;
people.forEach((person, count) => {
   html += `<li style="color: grey;">${count} - ${person}</li>`; //html template
});

ul.innerHTML = html; //take this html template inside the ul

//object literal notation
let user = {
    name: 'mike', //property
    age: 30, //property
    location: 'europe', //property
    login: function(){ //method
        console.log('login successfully');
    }, 
    logout: function(){ //method
        console.log('logout successfully');
    }
};

console.log(user.name); //access by dot notation
console.log(user['age']); //access by square bracket

//update the value
user.location = 'africa';
console.log(user.location);

//find the type
console.log(typeof user);

//access the methods
user.login();
user.logout();