const inputValueNode = document.querySelector('.movie__search-input');
const addButtonNode = document.querySelector('.movie__search-button');
const movieListNode = document.querySelector('.movie__list');

const movieList = [];

inputValueNode.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') 
    addButtonNode.click();
})

addButtonNode.addEventListener('click', () => {
  addMovie();
  renderMovieList();
});

movieListNode.addEventListener('click', function(event) {
  const currentLi = event.target.closest('.movie__list-item');
  const nodes = Array.from(movieListNode.children);
  const index = nodes.indexOf(currentLi);

  if (event.target.tagName === 'INPUT' && 
    event.target.closest('.movie__list-input')) {
      currentLi.classList.add('active');
      movieList[index].isActive = true;
    }

  if (event.target.tagName === 'BUTTON' &&
    event.target.closest('.movie__list-button')) {
      movieList.splice(index, 1);
      renderMovieList();
    }
    
})


function addMovie() {
  let movieName = inputValueNode.value.trim();
  if (!movieName) return

  movieList.push({
    name: movieName,
    isActive: false,
  });

  inputValueNode.value = '';
  inputValueNode.focus();
}

function renderMovieList() {
  let moviesHtml = '';

  movieList.forEach(element => {
    const activeClass = element.isActive ? 'active' : '';
    moviesHtml += `
    <li class="movie__list-item ${activeClass}">
      <input type="radio" class="movie__list-input">
      <span class="movie__list-text">${element.name}</span>
      <button class="movie__list-button"></button>
    </li>
    `;
  });

  movieListNode.innerHTML = moviesHtml;
};