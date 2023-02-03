// toggleSwitch button functionality:
const toggleSwitch = document.querySelector('label');
// const input = document.getElementById('toggle-switch').value;
// console.log(input);
const body = document.querySelector('body');
let theme;
// let getTheme;

// TODO setTheme function(dark or light)
const setTheme = theme => {
    body.classList.toggle('active', theme === 'dark');
    localStorage.setItem('PageTheme', theme)
}

const getTheme = () => localStorage.getItem('PageTheme');

setTheme(getTheme() || 'light')

if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'))
}

// TODO function names
// const activeState = () => {
//     body.classList.toggle('active')
//     // fix ternary operator
//     body.classList.contains('active') ? theme = 'dark' : theme = 'light';

//     localStorage.setItem('PageTheme', JSON.stringify(theme))
//     console.log(theme);
// }

// getTheme = JSON.parse(localStorage.getItem('PageTheme'));

// if (getTheme === 'dark') {
//     activeState()
// }

// toggleSwitch.addEventListener('click', activeState)

// Hamburger menu functionality:
// menu button:
const menu_btn = document.querySelector('.hamburger');

function mobileNavActive() {
    menu_btn.classList.toggle('is-active')
    menu_window.classList.toggle('is-active')
}
menu_btn && menu_btn.addEventListener('click', mobileNavActive)