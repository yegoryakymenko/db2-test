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
sort.addEventListener('click', function() {

})

function getInfo(url) {
  let xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
  xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = JSON.parse(xhr.responseText);
            let result = response.results;
            console.log(result);
            next = response.next;
            previous = response.previous;
            ul.innerHTML = "";
            result.forEach(info => {
              console.log(info);
              let li = document.createElement('li');
              let btnShowMore = document.createElement('button');
              let liProp = document.createElement('li');
              let ulProp = document.createElement('ul');
              btnShowMore.innerHTML = 'Show more';
              if (url == urlApiFilms) {
              li.innerHTML = info.title;
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
    }
 
  xhr.send();

}
// Сделать функцию в котрой в переменную будет записываться текущий name
// и по нему выводить инфу по
// 1. Клик по кнопке
//  2. После клик аппендиться список со свойствами, при повторном клике убирается
//  Otdaenlp  -  в спсок изначально вложить список и сделать ему display: none;
//
//