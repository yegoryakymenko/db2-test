const urlApiPeople = 'https://swapi.co/api/people/';
const urlApiPlanets = 'https://swapi.co/api/planets/';
const urlApiFilms = 'https://swapi.co/api/films/';
const urlApiSpecies = 'https://swapi.co/api/species/';
const urlApiVehicles = 'https://swapi.co/api/vehicles/';
const urlApiStarships = 'https://swapi.co/api/starships/';

let btn = document.querySelectorAll('.button');
let people = document.querySelector('.people');
let planets = document.querySelector('.planets');
let films = document.querySelector('.films');
let species = document.querySelector('.species');
let vehicles = document.querySelector('.vehicles');
let starships = document.querySelector('.starships');
let answerField = document.querySelector('.answer-field');
let ul = document.querySelector('ul');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let sort = document.querySelector('.sort');         

people.addEventListener('click', function() {
  getInfo(urlApiPeople);
});
planets.addEventListener('click', function() {
  getInfo(urlApiPlanets);
});
films.addEventListener('click', function() {
  getInfo(urlApiFilms);
});
species.addEventListener('click', function() {
  getInfo(urlApiSpecies);
});
vehicles.addEventListener('click', function() {
  getInfo(urlApiVehicles);
});
starships.addEventListener('click', function() {
  getInfo(urlApiStarships);
});
next.addEventListener('click', function() {
    getInfo(next);
});
previous.addEventListener('click', function() {
  getInfo(previous);
});

function getInfo(url) {
    return new Promise(function (resolve,reject) {
      let xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
  xhr.onload = function () {
      if (this.status >= 200 && this.status < 300){
            let response = JSON.parse(xhr.responseText);
            let result = response.results;
            next = response.next;
            previous = response.previous;
            ul.innerHTML = "";
            resolve(build(result,url));
        }
    }
 
  xhr.send();

    });
}

function build(result,url) {
 result.sort(compare);
  result.forEach(function(info) {
              let li = document.createElement('li');
              let btnShowMore = document.createElement('button');
              let liProp = document.createElement('li');
              let ulProp = document.createElement('ul');
              btnShowMore.innerHTML = 'Show more';
              if (url.includes('films/')) {
                li.innerHTML = info.title;
                liProp.innerHTML = `Director: ${info.director} <br> Episode: ${info.episode_id} <br> Release Date: ${info.release_date}`;
            } else if(url.includes('planets/')) {
                li.innerHTML = info.name;
                liProp.innerHTML = `Climate: ${info.climate} <br> Diameter: ${info.diameter} <br> Orbital Period: ${info.orbital_period}`;
            } else if(url.includes('species/')) {
                li.innerHTML = info.name;
                liProp.innerHTML = `Average Height: ${info.average_height} <br> Avarage Lifespan: ${info.average_lifespan} <br> Classification: ${info.classification}`;
            } else if(url.includes('vehicles/')){
                li.innerHTML = info.name;
                liProp.innerHTML = `Crew: ${info.crew} <br> Manufacturer: ${info.manufacturer} <br> Cost in credits: ${info.cost_in_credits}`;
            } else if(url.includes('starships/')){
                li.innerHTML = info.name;
                liProp.innerHTML = `Model: ${info.model} <br> Passengers: ${info.passengers} <br> Crew: ${info.crew}`;
            } else {
               li.innerHTML = info.name;
               liProp.innerHTML = `Height: ${info.height} <br> Mass: ${info.mass} <br> Birth year ${info.birth_year}`;
            }
              ul.appendChild(li);
              ul.appendChild(btnShowMore);
               ulProp.appendChild(liProp);
                li.appendChild(ulProp);

              btnShowMore.addEventListener('click', function() {
                ulProp.classList.toggle('active');
              })
            })
}
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
//
//
//  Otdaenlp  -  в спсок изначально вложить список и сделать ему display: none;
// Функция отрисовывает масивчик Array filter
// sort() должен изначально собирать элементы, затем сортировать и рендерить по нажатию