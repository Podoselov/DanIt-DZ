'use strict';

let elBody = document.body;

function clickBtn(e) {
  e.preventDefault();
  if (e.target.className === 'page__link') {
    e.target.style.display = 'none';
    createEl();
  }
  if (e.target.className === 'page__link2') {
    if (validNumber(e.target.nextSibling.value)) {
      e.target.nextSibling.style.outline = '1px solid red';
      e.target.nextSibling.value = '';
      e.target.previousElementSibling.textContent =
        'Не корректный формат, введите заново!';
      e.target.previousElementSibling.style.left = '39%';
    } else {
      let elValue = e.target.nextSibling.value;
      e.target.style.display = 'none';
      e.target.previousElementSibling.style.display = 'none';
      e.target.nextSibling.style.display = 'none';
      let elUl = document.createElement('ul');
      elUl.style.display = 'flex';
      elUl.style.flexWrap = 'wrap';
      for (let i = 1; i < 100; i++) {
        let elLi = document.createElement('li');
        elLi.style.backgroundColor = getRandomInt();
        elLi.style.borderRadius = '50%';
        elLi.classList.add('list__item');
        elLi.style.width = `${elValue}px`;
        elLi.style.height = `${elValue}px`;
        elUl.prepend(elLi);
      }
      elBody.prepend(elUl);
    }
  }
  if (e.target.className === 'list__item') {
    e.target.remove();
  }
}

function getRandomInt() {
  let result;
  let red = Math.floor(Math.random() * Math.floor(255));
  let green = Math.floor(Math.random() * Math.floor(255));
  let blue = Math.floor(Math.random() * Math.floor(255));
  return (result = 'rgb(' + red + ',' + green + ',' + blue + ')');
}

function createEl() {
  let input = document.createElement('input');
  input.style.position = 'absolute';
  input.style.top = '65%';
  input.style.left = '43%';
  input.style.transition = '1s';
  input.type = 'text';

  let errorEl = document.createElement('p');
  errorEl.textContent = 'Введите радиус окружности';
  errorEl.style.color = 'coral';
  errorEl.style.fontSize = '18px';
  errorEl.style.position = 'absolute';
  errorEl.style.top = '71%';
  errorEl.style.left = '42%';

  let btnStart = document.createElement('a');
  btnStart.textContent = 'Нарисовать';
  btnStart.classList.add('page__link2');
  btnStart.href = '#';
  btnStart.style.padding = '20px 55px';
  btnStart.style.textDecoration = 'none';
  btnStart.style.fontSize = '25px';
  btnStart.style.borderRadius = '16px';
  btnStart.style.textTransform = 'uppercase';
  btnStart.style.backgroundColor = 'coral';
  btnStart.style.color = 'whitesmoke';
  btnStart.style.position = 'absolute';
  btnStart.style.top = '50%';
  btnStart.style.left = '40%';

  elBody.prepend(input);
  elBody.prepend(btnStart);
  elBody.prepend(errorEl);
}

function validNumber(value) {
  return (
    value < 1 ||
    value === null ||
    value.trim() === '' ||
    typeof +value !== 'number' ||
    Number.isNaN(+value)
  );
}

elBody.addEventListener('click', clickBtn);
