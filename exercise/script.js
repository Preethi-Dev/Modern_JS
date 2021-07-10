const paras = document.querySelectorAll('p');
paras.forEach(para => {
    if(para.innerText.includes('error')){
        para.classList.add('error'); //add the class
    } else if(para.innerText.includes('success')) {
        para.classList.add('success');
    } else {
        para.classList.add('nothing');
    }
})

const heading = document.querySelector('h1'); //get the reference of h1 element
heading.classList.toggle('test');//style class applied
heading.classList.toggle('test');//style class removed
heading.classList.toggle('test');//style class applied
heading.classList.remove('test');//remove the class