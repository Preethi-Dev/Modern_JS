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

//parent,child,sibling relationship => traverse the DOM
const bigger_selection = document.querySelector('article'); //HTMLcollection => so, we can't apply forEach method
//convert HTMLcollection to array => in array, we can apply forEach method
console.log(Array.from(bigger_selection.children)); //all child of parent element(article)
Array.from(bigger_selection.children).forEach(child => {
    child.classList.add('article-style');
})

//find parent element
const child = document.querySelector('h2');
console.log(child.parentElement);
//find next sibling
console.log(child.nextElementSibling);
//find previous sibling
console.log(child.previousElementSibling);

//traversing the element
console.log(child.nextElementSibling.parentElement.children);
