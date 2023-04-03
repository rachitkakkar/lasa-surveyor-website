let dark_mode = false;
if (dark_mode) {
    document.body.classList.add('dark-mode');
    document.getElementsByClassName('logo')[0].src = 'http://localhost:8080/img/logo-wide-dark.png'; // 'https://lasasurveyor.com/img/logo-wide-dark.png';
}

/*
function setDarkMode() {
    dark_mode = true;
    document.body.classList.toggle("dark-mode");
}
*/