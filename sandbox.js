const form = document.querySelector('.webForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent the default behaviour of browser
    document.querySelector('strong').innerHTML = `<center>${document.querySelector('.username').value}</center>`;
    document.querySelector('strong').setAttribute('style', 'font-size: 32px');
});
