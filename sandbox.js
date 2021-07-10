//querying the element => fetch the element
const para = document.querySelector('p');
console.log(para);
//querying all the elements
const paras = document.querySelectorAll('p'); //nodeList
console.log(paras);
paras.forEach(para => {
    console.log(para);
});
//get reference by id
console.log(document.getElementById('one'));
//get reference by class name
console.log(document.getElementsByClassName('one')); //HTMLcollections => can't apply forEach
//get reference by tagname
console.log(document.getElementsByTagName('p'));

//add html template
const content = document.querySelector('.content');
content.innerHTML += '<h1> hello, ninja</h1>';
const content1 = document.querySelector('body > div > h1');
content1.innerText = 'hello, keekee';