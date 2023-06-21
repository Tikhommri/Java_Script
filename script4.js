const Prompt = document.querySelector('a');

Prompt.addEventListener('click', () => {
    const userText = prompt('Измените текст');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
})

const links = document.querySelector('a')

links.addEventListener('click', (event) => {
  // отменяем действие по умолчанию. Перехода по ссылке не будет
  event.preventDefault()
})


