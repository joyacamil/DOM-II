// Your code goes here

const logo = document.querySelector('.logo-heading');
const busImg = document.querySelector('.home .intro img');
const navBar = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-link');
const container = document.querySelector('.container')
const header = document.querySelector('.intro h2');
const paragraphs = document.querySelectorAll('p');
const destinationH = document.querySelectorAll('.destination h4')
const buttons = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');

//offline
window.addEventListener('offline', (event) => {
  alert("Looks like you lost network connection. Please reconnect to proceed. HURRY!");
});

// `resize`
window.addEventListener('resize', () => console.log('Resized.'));

// `scroll`
window.addEventListener('scroll',(e) => console.log(e));

// `mouseover`
busImg.addEventListener('mouseover', () => busImg.style.margin = '60px 0 60px 0');

// `keydown`


// `wheel`

// `load`
// `focus`


// `select`

// `dblclick`
footer.addEventListener('dblclick',() => footer.style.backgroundColor = 'green');

