// async function getData() {
//   await fetch()
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   return response;
// }
// let jsonData = getData();

// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }

// const jsonResponse = await fetch(
//   'https://byui-cit230.github.io/weather/data/towndata.json'
// )
//   .then((response) => response.json())
//   .then((responseData) => {
//     return responseData;
//   })
//   .catch((error) => console.log(error));
// let h2 = document.createElement('h2');
// h2.innerHTML = jsonResponse.name;

function newJoke() {
  try {
    fetch('https://byui-cit230.github.io/weather/data/towndata.json' {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => drawJoke(data.joke));
  } catch (e) {
    console.log(e);
  }
}

function drawJoke(joke) {
  div = document.getElementById('joke');
  div.innerHTML = joke;

  if (joke.length >= 80) {
    div.style.fontSize = '24pt';
  } else {
    div.style.fontSize = '42pt';
  }
}
