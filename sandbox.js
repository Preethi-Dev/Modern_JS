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
