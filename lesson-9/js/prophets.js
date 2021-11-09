const requestURL =
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);
      document.querySelector('div.cards').appendChild(card);

      let card2 = document.createElement('p');
      let h3 = document.createElement('h3');
      h3.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      card2.appendChild(h3);
      document.querySelector('div.cards').appendChild(card2);

      let card3 = document.createElement('p');
      let a_h3 = document.createElement('h3');
      a_h3.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      card3.appendChild(a_h3);
      document.querySelector('div.cards').appendChild(card3);

      let im = document.createElement('section');
      let image = document.createElement('img');
      image.setAttribute('src', prophets[i].imageurl);
      im.appendChild(image);
      document.querySelector('div.cards').appendChild(im);
      //   document.querySelector('div.cards').appendChild(url);
    } // temporary checking for valid response and data parsing
  });
