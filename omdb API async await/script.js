//ambil input textnya menggunakan queryselector
const btnSearch = document.querySelector('#btn-search');
                                    // didalam function ini akan ada sebuah asynchronus 
btnSearch.addEventListener('click', async function() {
  const inputSearch = document.querySelector('.input-search');
  // ketika program sudah modular maka diperlukannya sekarang menggunakan async
                  // yang ini merupakan asynchronusnya
  const moviesList = await getMovies(inputSearch.value);
  // console.log(movies);
  updateUI(moviesList);
})

// event binding digunakan untuk ketika event tersebut belum ada di document dan ketika dia ada di document
// eventnya masih tetap berjalan
document.addEventListener('click', async function (e) {
  // tolong carikan element yang berisi attribut class yang mengandung nama classnya button detail
  if (e.target.classList.contains('button-detail')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
})

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=aec77df2&i=' + imdbid)
            .then(response => response.json())
            .then(m => m)
            .catch(e => console.log(e));
}

function updateUIDetail(m) {
        let movieDetail = showMovieDetail(m);
        const tmpModal = document.querySelector('.modal-body');
        tmpModal.innerHTML = movieDetail;
}

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=aec77df2&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(moviesList) {
       let cards = '';
      moviesList.forEach(m => {
        cards += showCards(m)
      })
      const movieRow = document.getElementById('movieList');
      movieRow.innerHTML = cards;
}




function showCards(m) {
  return `<div class="col-md-4 my-4">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <p class="card-subtitle">${m.Year}</p>
                <a href="#" class="btn btn-primary button-detail" data-bs-toggle="modal" data-bs-target="#movieDetail" data-imdbid="${m.imdbID}" type="button" >Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
}