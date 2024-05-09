const selectElement = (s) => document.querySelector(s);
let header = selectElement('header');
let nav = selectElement('nav ul');
let title1 = selectElement('.title1');
let arrow1 = selectElement('header .arrow');
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = '10vh';
        header.style.justifyContent = 'space-around';
        nav.style.display = 'flex';
        title1.style.fontSize = '5vh';
        title1.textContent = 'Pravin J';
        header.style.flexDirection = 'row';
        arrow1.style.display='none';
    }
    else {
        header.style.height = '100vh';
        header.style.justifyContent = 'center';
        nav.style.display = 'none';
        title1.textContent = 'WELCOME';
        title1.style.fontSize = '20vh';
        header.style.flexDirection = 'column';
        arrow1.style.display='';
    }
}

    window.onscroll = function () { scrollFunction() };