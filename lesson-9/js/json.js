const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (
        towns[i].name == 'Preston' ||
        towns[i].name == 'Soda Springs' ||
        towns[i].name == 'Fish Haven'
      ) {
        let card = document.createElement('section');
        let makediv = document.createElement('div');
        makediv.setAttribute('class', 'info');
        let tname = document.createElement('h2');
        tname.textContent = towns[i].name;
        let tmotto = document.createElement('h3');
        tmotto.textContent = towns[i].motto;
        let tfound = document.createElement('p');
        tfound.textContent = 'Year Founded: ' + towns[i].yearFounded;
        let tpop = document.createElement('p');
        tpop.textContent = 'Population: ' + towns[i].currentPopulation;
        let train = document.createElement('p');
        train.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        let image = document.createElement('img');
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('class', 'townimg');

        card.appendChild(image);
        card.appendChild(tname);
        card.appendChild(tmotto);
        card.appendChild(tfound);
        card.appendChild(tpop);
        card.appendChild(train);
        document.querySelector('.containers').appendChild(card);
      }
    }
  });
