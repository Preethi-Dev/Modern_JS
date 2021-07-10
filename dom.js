//get attribute
const get_attr = document.querySelector('#one'); //querying the element by id
console.log(get_attr.getAttribute('id')); //get the attribute

//set attribute => override the existing attribute or create new once
get_attr.setAttribute('id', 'firstPara'); //change the value of exisiting attribute
get_attr.setAttribute('style', 'color:gray'); //create new attribute

//changing the css style
get_attr.style.color = '#dc920a'; //changing the exist style
get_attr.style.border = '1px solid gray'; //adding new style
get_attr.style.textAlign = 'center';
get_attr.style.color = ''; //remove the style
console.log(get_attr.style); //use style property => we can change css ppty
