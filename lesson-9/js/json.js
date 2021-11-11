async function myFetch() {
  let response = await fetch(
    'https://byui-cit230.github.io/weather/data/towndata.json'
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

myFetch()
  .then((jsonData) => {
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
    console.log(getKeyByValue(jsonData, 'Preston'));

    let fishName = document.createElement('h2');
    fishName.innerHTML = jsonData.towns[2].name;
    document.getElementById('townNamef').appendChild(fishName);

    let presName = document.createElement('h2');
    presName.innerHTML = jsonData.towns[6].name;
    document.getElementById('townNamep').appendChild(presName);

    let sodaName = document.createElement('h2');
    sodaName.innerHTML = jsonData.towns[0].name;
    document.getElementById('townNames').appendChild(sodaName);

    let fishMotto = document.createElement('h3');
    fishMotto.innerHTML = jsonData.towns[2].motto;
    document.getElementById('townMottof').appendChild(fishMotto);

    let presMotto = document.createElement('h3');
    presMotto.innerHTML = jsonData.towns[6].motto;
    document.getElementById('townMottop').appendChild(presMotto);

    let sodaMotto = document.createElement('h3');
    sodaMotto.innerHTML = jsonData.towns[0].motto;
    document.getElementById('townMottos').appendChild(sodaMotto);

    // let image = document.createElement('img');
    // image.setAttribute('src', towns[2].photo);
    // document.getElementById('townMottos').appendChild(sodaMotto);
  })
  .catch((e) => console.log(e));

// let card = document.createElement('section');
// let h2 = document.createElement('h2');
// h2.textContent = towns[1].name;
// document.querySelector('.try').appendChild(card);
// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);
//     const towns = jsonObject['towns'];
//     for (let i = 0; i < towns.length; i++) {
//       let card = document.createElement('section');
//       let h2 = document.createElement('h2');
//       h2.textContent = towns[i].name;
//       let h3 = document.createElement('h3');
//       h3.textContent = 'Date of Birth: ' + towns[i].motto;
//       let a_h3 = document.createElement('h3');
//       a_h3.textContent = 'Place of Birth: ' + towns[i].yearFounded;
//       let image = document.createElement('img');
//       image.setAttribute('src', towns[i].photo);
//       card.appendChild(h2);
//       card.appendChild(h3);
//       card.appendChild(a_h3);
//       card.appendChild(image);
//       document.querySelector('.content').appendChild(card);
//     }
//   });
