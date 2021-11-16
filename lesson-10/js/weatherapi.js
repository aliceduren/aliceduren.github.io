let apiURL =
  'api.openweathermap.org/data/2.5/forecast?id=524901&appid={a6bea4e16102442de7b4c070cffb4029}';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
