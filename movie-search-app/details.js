const movieDetailsNode = document.querySelector('.movie__descr-wrapper');
const movieDetailsTextNide = document.querySelector('.movie__descr-text');

function initDetailPage() {
  const rawData = localStorage.getItem('selectedMovie');  
  const movieData = JSON.parse(rawData);

  renderMovieDetails(movieData);
};

function renderMovieDetails(movie) {
  if (!movieDetailsNode) return;

  movieDetailsNode.innerHTML = `
      <img src="${movie.Poster}" class="movie__descr-img">
      <div class="movie__desrc-inner">
        <h3 class="movie__descr-title">${movie.Title}</h3>
        <p class="movie__descr-year description">Год: <span>${movie.Year}</span></p>
        <p class="movie__descr-rating description">Ограниченя: <span>${movie.Rated}</span></p>
        <p class="movie__descr-date description">Дата выхода: <span>${movie.Released}</span></p>
        <p class="movie__descr-length description">Продолжительность: <span>${movie.Runtime}</span></p>
        <p class="movie__descr-year description">Жанр: <span>${movie.Genre}</span></p>
        <p class="movie__descr-year description">Режиссер: <span>${movie.Director}</span></p>
        <p class="movie__descr-year description">Сценарий: <span>${movie.Writer}</span></p>
        <p class="movie__descr-year description">Актеры: <span>${movie.Actors}</span></p>
      </div>
  `;
  movieDetailsTextNide.innerText = `${movie.Plot}`
}

initDetailPage();