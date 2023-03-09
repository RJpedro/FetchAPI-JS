import { apiConnetionMethods } from "../js/api-exports";

const mainContentHtml = document.querySelector(".main-content");
const arrayOfColors = ["red", "blue", "green", "yellow", "orange", "black", "purple", "pink"];

async function listOfFilms() {
  const listOfFilms = await apiConnetionMethods.catchListOfFilmsAPI();
  cardsFactory(listOfFilms);
}

function cardsFactory(listOfFilms) {
  listOfFilms.forEach((film) => {
    let creatingHtml = "";
    creatingHtml += `
        <div class="card-body ${arrayOfColors[getRandomInt(0, 5)]}" data-id="${
      film.id
    }">
            <h2 class="card-title">${film.title}</h2>
            <p class="card-director">${film.director}</p>
            <img class="card-img" src="${film.img}" />
        </div>
        `;

    mainContentHtml.innerHTML += creatingHtml;
  });
}

function getRandomInt(minValue, maxValue) {
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

listOfFilms();
