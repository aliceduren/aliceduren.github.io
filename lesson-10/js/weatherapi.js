function windchill(t, s) {
  let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
  return Math.round(f);
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
  });
const forecastAPI =
  'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a6bea4e16102442de7b4c070cffb4029';
fetch(forecastAPI)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);

    const forecast = forecastObject.list.filter((x) =>
      x.dt_txt.includes('18:00:00')
    );
    i = 0;
    forecast.forEach((x) => {
      let imagesrc =
        'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
      let description = x.weather[0].description;

      document.getElementById(`temp${i + 1}`).textContent = Math.round(
        x.main.temp
      );
      document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${1 + 1}`).setAttribute('alt', description);

      i++;
    });
  });
const now = new Date();
const today = now.getDay();
switch (today) {
  case 0:
    document.getElementById('day1').textContent = 'Sunday';
    document.getElementById('day2').textContent = 'Monday';
    document.getElementById('day3').textContent = 'Tuesday';
    document.getElementById('day4').textContent = 'Wednesday';
    document.getElementById('day5').textContent = 'Thurday';
    break;
  case 1:
    document.getElementById('day1').textContent = 'Monday';
    document.getElementById('day2').textContent = 'Tuesday';
    document.getElementById('day3').textContent = 'Wednesday';
    document.getElementById('day4').textContent = 'Thursday';
    document.getElementById('day5').textContent = 'Friday';
    break;
  case 2:
    document.getElementById('day1').textContent = 'Tuesday';
    document.getElementById('day2').textContent = 'Wednesday';
    document.getElementById('day3').textContent = 'Thursday';
    document.getElementById('day4').textContent = 'Friday';
    document.getElementById('day5').textContent = 'Saturday';
    break;
  case 3:
    document.getElementById('day1').textContent = 'Wednesday';
    document.getElementById('day2').textContent = 'Thursday';
    document.getElementById('day3').textContent = 'Friday';
    document.getElementById('day4').textContent = 'Saturday';
    document.getElementById('day5').textContent = 'Sunday';
    break;
  case 4:
    document.getElementById('day1').textContent = 'Thursday';
    document.getElementById('day2').textContent = 'Friday';
    document.getElementById('day3').textContent = 'Saturday';
    document.getElementById('day4').textContent = 'Sunday';
    document.getElementById('day5').textContent = 'Monday';
    break;
  case 5:
    document.body.onload = addElement;
    document.getElementById('day1').textContent = 'Friday';
    document.getElementById('day2').textContent = 'Saturday';
    document.getElementById('day3').textContent = 'Sunday';
    document.getElementById('day4').textContent = 'Monday';
    document.getElementById('day5').textContent = 'Tuesday';
    break;
  case 6:
    document.getElementById('day1').textContent = 'Saturday';
    document.getElementById('day2').textContent = 'Sunday';
    document.getElementById('day3').textContent = 'Monday';
    document.getElementById('day4').textContent = 'Tuesday';
    document.getElementById('day5').textContent = 'Wednesday';
    break;
  default:
    document.querySelector('#day').textContent = 'Error';
}
