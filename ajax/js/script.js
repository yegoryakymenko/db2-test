let urlApiPeople = 'https://swapi.co/api/people/';
let urlApiPlanets = 'https://swapi.co/api/planets/';
let urlApiFilms = 'https://swapi.co/api/films/';
let urlApiSpecies = 'https://swapi.co/api/species/';
let urlApiVehicles = 'https://swapi.co/api/vehicles/';
let urlApiStarships = 'https://swapi.co/api/starships/';


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
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = JSON.parse(xhr.responseText);
            let result = response.results;
            next = response.next;
            previous = response.previous;
            if (ul.childNodes.length) {
                ul.innerHTML = "";
              }
            result.forEach(info => {
              let li = document.createElement('li');
              if (url == urlApiFilms) {
              li.innerHTML = info.title;
            } else {
              li.innerHTML = info.name;
            }
              
              ul.appendChild(li);
            })

        }
    }
  xhr.send();

}

