// Your code goes here

const logo = document.querySelector('.logo-heading');
const busImg = document.querySelector('.home .intro img');
const navBar = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-link');
const container = document.querySelector('body')
const header = document.querySelector('.intro h2');
const paragraphs = document.querySelectorAll('p');
const destinationH = document.querySelectorAll('.destination h4')
const buttons = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');

const middleImg = document.querySelector('.intro img');
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
container.addEventListener('keydown', (e) => e.target.style.background = 'lightred');

// `wheel`
//example 
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;

middleImg.onwheel = zoom;
middleImg.addEventListener('onWheel', zoom)

// `load`

// `focus`


// `select`

// `dblclick`
buttons.addEventListener;
buttons.forEach(btn => {
  btn.addEventListener('dblclick',() => btn.style.backgroundColor = 'red')
});
