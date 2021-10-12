const hambutton = document.querySelector('.ham');
const mainnav= document.querySelector('.navigation')

hambutton.addEventListener('click',() => {mainnav.classList.toggle('responsive')},false);

window.onresize =() => {if(window.innerWidth > 760) mainnav.classList.toggle('responsive')};
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
const lastUp=document.lastModified;

document.querySelector("#year").textContent=lastUp;

let x=new Date()
let y=x.getFullYear()
document.getElementById("date").textContent=y
