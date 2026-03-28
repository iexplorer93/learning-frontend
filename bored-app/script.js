const bodyNode = document.body;
const boredTitleNode = document.querySelector('.bored__title');
const boredTextNode = document.querySelector('.bored__text');
const boredButtonNode = document.querySelector('.bored__btn');

async function getBoredJson() {
  boredTextNode.textContent = 'Загрузка идеи...';
  boredButtonNode.disabled = true;

  try {
    const [response] = await Promise.all([
      fetch('https://api.adviceslip.com/advice'),
      new Promise(resolve => setTimeout(resolve, 500)) 
    ]);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }

    const data = await response.json();
    bodyNode.style.background = 'linear-gradient(rgba(255, 255, 255, 1), rgba(0, 176, 28, 1))';
    boredTitleNode.textContent = 'Ура, теперь не скучно 🔥';
    boredTextNode.textContent = data.slip.advice;

  } catch (error) {
    boredTextNode.textContent = 'Не удалось получить ответ от сервера!'
  } finally {
    boredButtonNode.disabled = false;
  }
};


boredButtonNode.addEventListener('click', () => {
  getBoredJson();
})