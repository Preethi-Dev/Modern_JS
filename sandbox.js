const form = document.querySelector('.webForm');
const userName = document.querySelector('.username');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent the default behaviour of browser
    const pattern = /^[a-zA-Z]{6,}$/;
    if(pattern.test(userName.value)){
        userName.setAttribute('style','border: 2px solid green');
       
    }else{
        userName.setAttribute('style','border: 2px solid red');
        
    }
    console.log(userName.value.search(pattern));
    document.querySelector('strong').innerHTML = `<center>${userName.value}</center>`;
    document.querySelector('strong').setAttribute('style', 'font-size: 32px');
});

form.addEventListener('keyup', e => {
    e.preventDefault(); //prevent the default behaviour of browser
    console.log(e);
    const pattern = /^[a-zA-Z]{6,}$/;
    if(pattern.test(userName.value)){
        userName.setAttribute('style','border: 5px solid green');
        userName.style.color = 'green';
        
    }else{
        userName.setAttribute('style','border: 5px solid red');
        userName.style.color = 'red';
    }
})
