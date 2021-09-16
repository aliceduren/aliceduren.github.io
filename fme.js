// const hihowrya=1+2;

// document.querySelector('h1').textContent=hihowrya;

// if (hihowrya==2) {
//     document.querySelector('p').textContent=Kboii(5,2);
// }

// function Kboii(a,b) {
//     return a+b;
// }

// function getCel(farenhiet) {
//     return 5/9 * (farenhiet-32);
// }
// document.querySelector('p').innerHTML=getCel(70)
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
//   const buttons = document.querySelectorAll('button');
  
//   for(let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', createParagraph);
//   }