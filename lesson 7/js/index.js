const images = document.querySelectorAll('[data-src]'); //grab all the images

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  img.removeAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
} //set source and change image source

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px -400px 0px',
}; //function that help keep images unloaded

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions); // function, things loadd

images.forEach((image) => {
  imgObserver.observe(image);
}); //observe each image

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener(
  'click',
  () => {
    mainnav.classList.toggle('responsive');
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove('responsive');
};
// didn't need this, but here just for reference
// function toggleMenu1(){
//   document.getElementById('heroimage').classList.toggle("hide");
//   }
// function toggleMenu2(){
//   document.getElementById('fiveday').classList.toggle("hide");
//   }
// function toggleMenu3(){
//   document.getElementById('article').classList.toggle("hide");
//   }
// function toggleMenu4(){
//   document.getElementById('locationmap').classList.toggle("hide");
//   }
//topbanner

const an = document.querySelector('#announcement');

const friday = new Date();
let dayOfWeek;
dayOfWeek = friday.getDay();
if (dayOfWeek == 5) {
  an.classList.toggle('pancakes');
} else {
  an.classList.remove('pancakes');
  an.style.display = 'none';
}
//Wednesday, 24 July 2020
const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let dayObj = new Date();
let weekday = dayNames[dayObj.getDay()];
document.getElementById('day').textContent = weekday;

let dayn = new Date();
let daynum = dayn.getDate();
document.getElementById('daynum').textContent = daynum;

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let m = new Date();
let n = monthNames[m.getMonth()];
document.getElementById('month').textContent = n;

let x = new Date();
let y = x.getFullYear();
document.getElementById('year').textContent = y;
