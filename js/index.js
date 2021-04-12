const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

var pageName = location.href.split("/");
pageName = pageName[4].split(".");
// alert(pageName[0]);

var test = document.getElementById(pageName[0]);
test.style.backgroundColor = "#3078c0";
test.style.borderRadius = "1vw";