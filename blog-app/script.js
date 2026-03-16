const inputTitle = document.querySelector('.left-section__input');
const textareaDescr = document.querySelector('.left-section__textarea');
const publicationButton = document.querySelector('.left-section__btn');
const postContainer = document.querySelector('.right-section__text');
const errorMessage = document.querySelector('.error-msg');

const posts = []; 

publicationButton.addEventListener('click', () => {
  const title = inputTitle.value.trim();
  const text = textareaDescr.value.trim();

  if (addPost(title, text)) {
    clearFields();
    renderAllPosts();
  }
});

function addPost(title, text) {
  if (!title || !text) {
    errorMessage.textContent = 'Заполните все поля!';
    return false;
  }

  if (title.length > 100) {
    errorMessage.textContent = 'Заголовок больше 100 символов';
    return false;
  }

  if (text.length > 200) {
    errorMessage.textContent = 'Пост больше 200 символов';
    return false
  }

  const dateOptions = { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  
  const currentDate = new Date().toLocaleString('ru-RU', dateOptions).replace(',', '');

  posts.push({
    date: currentDate,
    title: title,
    text: text
  });

  errorMessage.textContent = '';
  return true;
}

function renderAllPosts() {
  let html = '';

  posts.forEach((post) => {
    html += `
      <div class="newPost">
        <small>${post.date}</small>
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </div>
    `;
  });

  postContainer.innerHTML = html;
}

function clearFields() {
  inputTitle.value = '';
  textareaDescr.value = '';
}