const MYAPIKEY = 'df975df2';

const movieInputNode = document.querySelector('.movie-search__input');
const searchButtonNode = document.querySelector('.movie-search__button');
const movieListNode = document.querySelector('.movie-search__list');

if (searchButtonNode) {
  searchButtonNode.addEventListener('click', () => {
    const term = movieInputNode.value.trim();
    if (term) getPreviewMovies(term);
  });
}

async function getPreviewMovies(searchTerm) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${MYAPIKEY}&s=${searchTerm}`);
    const data = await response.json();
    if (data.Response === 'True') {
      moviesRender(data.Search);
    }
  } catch (error) {
    console.error("Ошибка поиска:", error);
  }
}

function moviesRender(movies) {
  if (!movieListNode) return;

  movieListNode.innerHTML = movies.map(movie => {
    const img = movie.Poster !== 'N/A' ? movie.Poster : 'No_Image_Available';
    return `
      <li class="movie-search__list-item" data-id="${movie.imdbID}">
          <img src="${img}" class="list-item__img">
          <div class="list-item__wrapper">
            <h3 class="list-item__title">${movie.Title}</h3>
            <p class="list-item__year">${movie.Year}</p>
          </div>
      </li>`;
  }).join('');
  

  movieListNode.onclick = (event) => {
    const li = event.target.closest('.movie-search__list-item');
    if (li) moviesGetDetails(li.dataset.id);
  };
}

async function moviesGetDetails(movieId) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${MYAPIKEY}&i=${movieId}`);
    const data = await response.json();
    
    if (data.Response === 'True') {
      localStorage.setItem('selectedMovie', JSON.stringify(data));
      window.location.href = 'movies.html';
    }
  } catch (error) {
    console.error("Ошибка получения деталей:", error);
  }
}