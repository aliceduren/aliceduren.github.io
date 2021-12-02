fetch('js/temples2.json')
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
      p2.textContent = 'City: ' + jsObject[i].city;
      let p3 = document.createElement('p');
      p3.textContent = 'State: ' + jsObject[i].state;
      let p4 = document.createElement('p');
      p4.textContent = 'Zipcode: ' + jsObject[i].zip;

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      //   card.appendChild(p);

      document.querySelector('div.cards').appendChild(card);
    }
  });
