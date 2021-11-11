const requestURL = 'https://randomuser.me/api/';
function getPerson() {
  let date = new Date();
  let time = date.getMilliseconds();

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
      const random_person = jsonObject['results'];
      for (let i = 0; i < random_person.length; i++) {
        let image = document.createElement('img');
        image.alt = random_person[i].name.first;
        image.setAttribute('src', random_person[i].picture.large);
        let card = document.createElement('section');
        let name = document.createElement('h2');
        name.textContent =
          'My name is ' +
          random_person[i].name.title +
          '.' +
          ' ' +
          random_person[i].name.first +
          ' ' +
          random_person[i].name.last +
          ' ';
        let gender = document.createElement('h3');
        gender.textContent = 'Gender: ' + random_person[i].gender;
        let email = document.createElement('h3');
        email.textContent = 'Email: ' + random_person[i].email;
        let password = document.createElement('h3');
        password.textContent = 'Password: ' + random_person[i].login.password;
        let country = document.createElement('h3');
        country.textContent =
          'City and Country: ' +
          random_person[i].location.city +
          ', ' +
          random_person[i].location.country;
        //we're stuck :/
        let tdate = new Date(random_person[i].dob.date);
        let fullDateMonth = tdate.toLocaleString('default', {
          month: 'long',
        });
        let fullDateYear = tdate.toLocaleString('default', {
          year: 'numeric',
        });
        let birthM = document.createElement('h3');
        birthM.textContent = 'Birth Month: ' + fullDateMonth;
        let birthY = document.createElement('h3');
        birthY.textContent = 'Birth Year: ' + fullDateYear;

        let java = document.createElement('h3');

        let finalDate = new Date();
        let finalTime = finalDate.getMilliseconds();
        let totalTime = finalTime - time;
        java.textContent = `Loading Time: ${totalTime} Miliseconds`;
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(gender);
        card.appendChild(email);
        card.appendChild(password);
        card.appendChild(country);
        card.appendChild(birthM);
        card.appendChild(birthY);
        card.appendChild(java);
        document.querySelector('main').appendChild(card);
      }
    });
}
document.addEventListener('load', getPerson());
document.querySelector('#btn').addEventListener('click', getPerson);
