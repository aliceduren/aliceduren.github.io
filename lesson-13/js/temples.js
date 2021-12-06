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

function windchill(t, s) {
  let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
  if (f <= 50 && s > 3) {
    return Math.round(f);
  } else {
    return 'N/A';
  }
}

let apiURL1 =
  'https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';
let apiURL2 =
  'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';
let apiURL3 =
  'https://api.openweathermap.org/data/2.5/weather?id=4393217&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';
let apiURL4 =
  'https://api.openweathermap.org/data/2.5/weather?id=4544379&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('yay').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('ws').textContent = jsObject.wind.speed;
    document.getElementById('wind').textContent = windchill(
      jsObject.main.temp,
      jsObject.wind.speed
    );
  });

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('yay2').textContent = jsObject.weather[0].main;
    document.getElementById('temp2').textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById('hum2').textContent = jsObject.main.humidity;
    document.getElementById('ws2').textContent = jsObject.wind.speed;
    document.getElementById('wind2').textContent = windchill(
      jsObject.main.temp,
      jsObject.wind.speed
    );
  });

fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('yay3').textContent = jsObject.weather[0].main;
    document.getElementById('temp3').textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById('hum3').textContent = jsObject.main.humidity;
    document.getElementById('ws3').textContent = jsObject.wind.speed;
    document.getElementById('wind3').textContent = windchill(
      jsObject.main.temp,
      jsObject.wind.speed
    );
  });

fetch(apiURL4)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('yay4').textContent = jsObject.weather[0].main;
    document.getElementById('temp4').textContent = Math.round(
      jsObject.main.temp
    );
    document.getElementById('hum4').textContent = jsObject.main.humidity;
    document.getElementById('ws4').textContent = jsObject.wind.speed;
    document.getElementById('wind4').textContent = windchill(
      jsObject.main.temp,
      jsObject.wind.speed
    );
  });
