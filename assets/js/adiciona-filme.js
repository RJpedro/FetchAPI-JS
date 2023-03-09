import { apiConnetionMethods } from "../js/api-exports";

const btnSubmit = document.querySelector("[data-btn-submit]");
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const inputTitle = document.getElementById("input-title").value;
  const inputDirector = document.getElementById("input-director").value;

  apiConnetionMethods.addFilmInBdJson(inputTitle, inputDirector, "../assets/img/filme.png");

  window.location.href = "../templates/index.html";
});
