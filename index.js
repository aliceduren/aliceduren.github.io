const lastUp=document.lastModified;

document.querySelector("#year").textContent=lastUp;

// const pic= "profilere.jpg";
//     document.querySelector("img").setAttribute('src',pic)
let x=new Date()
let y=x.getFullYear()
document.getElementById("date").textContent=y
