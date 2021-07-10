const paras = document.querySelector('div');
//HTMLcollection converted to array and apply forEach method
Array.from(paras.children).forEach(para => {
    para.addEventListener('click', element => { //add event listener for every element
        para.innerHTML = `<del>${element.target.innerText}</del>`; //element.target means current element
    });
});