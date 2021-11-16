// let apiURL =
//   'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a6bea4e16102442de7b4c070cffb4029'; //daheck??
'https://api.openweathermap.org/data/2.5/weather?q=Preston,0398011&appid=a6bea4e16102442de7b4c070cffb4029';
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     document.getElementById('current-temp').textContent =
//       jsObject.list[0].main.temp;
//     const imagesrc =
//       'https://openweathermap.org/img/w/' +
//       jsObject.list[0].weather[0].icon +
//       '.png'; // note the concatenation
//     const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array
//     document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
//     document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
//     document.getElementById('icon').setAttribute('alt', desc);
//   });

//0398011
function windchill(t, s) {
  let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
  return f;
}
let apiURL =
  'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('yay').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('ws').textContent = jsObject.wind.speed;
    document.getElementById('wind').textContent = Math.round(
      windchill(jsObject.main.temp, jsObject.wind.speed)
    );
    if (jsObject.weather[0].main == 'Clouds') {
      let image = document.createElement('img');
      image.setAttribute('src', 'images/' + you.png);
      image.setAttribute('alt', 'hi');
      document.getElementById('tempimg').appendChild(image);
    }
    // const imagesrc =
    //   'https://openweathermap.org/img/w/' +
    //   jsObject.list[0].weather[0].icon +
    //   '.png'; // note the concatenation
    // const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);
  });

// fetch(apiURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);
//     const weathers = jsonObject;
//     for (let i = 0; i < weathers.length; i++) {
//       if (weathers.id == '5604473') {
//         let card = document.createElement('section');
//         let tname = document.createElement('h2');
//         tname.textContent = weathers.id;
//         card.appendChild(tname);
//         document.querySelector('.yay').appendChild(card);
//       }
//     }
//   });
