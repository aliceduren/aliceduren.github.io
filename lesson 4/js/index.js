const hambutton = document.querySelector('.ham');
const mainnav= document.querySelector('.navigation')

hambutton.addEventListener('click',() => {mainnav.classList.toggle('responsive')},false);

window.onresize =() => {if(window.innerWidth >760) mainnav.classList.toggle('responsive')};

function toggleMenu(){
    document.querySelector('.heroimage').classList.toggle("hide");
  }
const lastUp=document.lastModified;

document.querySelector("#year").textContent=lastUp;

let x=new Date()
let y=x.getFullYear()
document.getElementById("date").textContent=y
