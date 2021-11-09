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

    // console.log(jsonData.towns[0].motto);

    let h1 = document.createElement('h1');
    h1.innerHTML = jsonData.towns[2].name;

    let h3 = document.createElement('h3');
    h3.innerHTML = jsonData.towns[3].motto;

    document.getElementById('FishHaven').appendChild(h1);
    document.querySelector('#readyForClass').innerHTML =
      jsonData.towns[3].motto;
  })
  .catch((e) => console.log(e));
