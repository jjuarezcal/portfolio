const toggleButton = document.getElementById('toggleMode');
const logoChange = document.getElementById('logo');
const logoFotterChange = document.getElementById('logo-fotter');

toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'light') {
        document.body.removeAttribute('data-theme');
        logoChange.setAttribute('src', './public/images/html-5-logo.png');
        logoFotterChange.setAttribute('src', './public/images/css3.png');
    } else {
        document.body.setAttribute('data-theme', 'light');
        logoChange.setAttribute('src', './public/images/html-5-logo-black.png');
        logoFotterChange.setAttribute('src', './public/images/css3-black.png');

    }


});