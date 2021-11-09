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
    // console.log(getKeyByValue(jsonData.towns[1].name));
    console.log(
      getKeyByValue(jsonData, 'Historic Oregon Trail Oasis. The Soda is on Us.')
    );

    console.log(jsonData.towns[0].motto);

    let h2 = document.createElement('h2');
    h2.innerHTML = jsonData.towns[0].motto;

    let h3 = document.createElement('h3');
    h3.innerHTML = jsonData.towns[0].motto;

    document.getElementById('readyForH2').appendChild(h2);
    document.querySelector('#readyForClass').innerHTML =
      jsonData.towns[0].motto;
  })
  .catch((e) => console.log(e));

document.getElementById('myTable').innerHTML = '<tr><td>value</td></tr>';
