//ambil input textnya menggunakan queryselector
const btnSearch = document.querySelector('#btn-search');
const inputSearch = document.querySelector('.input-search');

btnSearch.addEventListener('click', function() {
  
  fetch('http://www.omdbapi.com/?apikey=aec77df2&s=' + inputSearch.value)
    .then(response => response.json())
    .then(response => {
      const movieList = response.Search;
      let cards = '';
      movieList.forEach(m => {
        cards += showCards(m)
      })
      const movieRow = document.getElementById('movieList');
      movieRow.innerHTML = cards;

      // ketika tombol detail di klik
      let buttonDetail = document.querySelectorAll('.button-detail');

      buttonDetail.forEach(btn => {
        btn.addEventListener('click', function () {
  
          const dataSet = this.dataset.imdbid;
  
          fetch('http://www.omdbapi.com/?apikey=aec77df2&i=' + dataSet)
            .then(m => m.json())
            .then(m => {
              let movieDetail = showMovieDetail(m);
              const tmpModal = document.querySelector('.modal-body');
              tmpModal.innerHTML = movieDetail;
            })
            .catch(e => console.log(e));
        })
      })
    })
})


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
                  <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
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