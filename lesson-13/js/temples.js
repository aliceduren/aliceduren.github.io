fetch('https://nathansbradshaw.github.io/temples2.json')
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    for (let i = 0; i < jsObject.length; i++) {
      let card = document.createElement('section');
      let image = document.createElement('img');
      image.setAttribute('src', jsObject[i].imageurl);
      image.alt = jsObject[i].name;
      let h2 = document.createElement('h2');
      h2.textContent = jsObject[i].name;
      let h3 = document.createElement('h3');
      h3.textContent = 'Phone: ' + jsObject[i].phone;
      let p = document.createElement('p');
      p.textContent = 'Address: ' + jsObject[i].address1;
      let p2 = document.createElement('p');
      p2.textContent = 'Services: ' + jsObject[i].services[0];
      let p3 = document.createElement('p');
      p3.textContent = jsObject[i].services[1];
      let p4 = document.createElement('p');
      p4.textContent = jsObject[i].services[2];
      let p5 = document.createElement('p');
      p5.textContent = jsObject[i].services[3];
      let p6 = document.createElement('p');
      p6.textContent = jsObject[i].Summary.facts[0];

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(p6);

      document.querySelector('div.cards').appendChild(card);
    }
  });
