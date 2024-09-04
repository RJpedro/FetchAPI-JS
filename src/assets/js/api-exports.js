
async function catchListOfFilmsAPI() {
  var apiConnectionGet = await fetch("http://localhost:3001/filmes");
  
  const apiConnectionGetData = await apiConnectionGet.json();

  return apiConnectionGetData;
}

async function addFilmInBdJson(title, director, img) {
  const apiConnetionPost = await fetch("http://localhost:3001/filmes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      director: director,
      img: img,
    }),
  });

  const apiConnetionPostData = await apiConnetionPost.json();

  return apiConnetionPostData;
}

export const apiConnetionMethods = {
    catchListOfFilmsAPI,
    addFilmInBdJson,
}