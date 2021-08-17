'use strict';

// let str = 'string';

// console.log(str.toUpperCase());
// console.log(str.slice(2));
// console.log(str.includes('s'));
// console.log(str.trim());

// let userName = prompt('your name');

// function showName(name) {
//   if (typeof name === 'number') {
//     console.log('error');
//   } else {
//     console.log(name.trim().length);
//   }
// }

// showName(userName);

// function changeString(str, strLength) {
//   let result = '';
//   if (str.length > strLength) {
//     result = str.slice(0, strLength - 3) + '...';
//   } else {
//     result = str;
//   }
//   return result;
// }
// console.log(changeString('aaaaaa', 5));

// let userStr = 'XXX';

// function checkSpan(str) {
//   return str.includes('viagra') || str.includes('XXX') ? true : false;
// }
// console.log(checkSpan(userStr));
// let userStr = 'aaaaa';
// function changeStr(str) {
//   let result = str[0].toUpperCase();
//   return result + str.slice(1);
// }
// console.log(changeStr(userStr));

// let userName = prompt('Name');
// let userSurname = prompt('Surname');
// let userAge = prompt('Age');

// let userInfo = {
//   name: userName,
//   surname: userSurname,
//   age: userAge,
//   sayHi: `Привет, я ${userName}, ${userSurname}, мне ${userAge}`,
// };

// console.log(userInfo.sayHi);

// let body = document.body;

// function newEl() {
//   let btn = document.createElement('button');
//   btn.innerHTML = 'Войти';
//   body.prepend(btn);
//   btn.addEventListener('click', function () {
//     alert('adas');
//   });
// }

// newEl();

// const input = document.getElementById('input');
// const btn = document.getElementById('validate-btn');

// function btnClick() {
//   if (
//     input.value === null ||
//     input.value.length < 5 ||
//     input.value.trim === ''
//   ) {
//     input.classList.add('input--error');
//     input.classList.remove('input--true');
//   } else {
//     input.classList.remove('input--error');
//     input.classList.add('input--true');
//   }
// }

// btn.addEventListener('click', btnClick);

// const btn = document.querySelector('.counter');

// btn.addEventListener('click', function () {
//   btn.innerHTML++;
// });

// const btn = document.querySelector('.page__btn');
// const div = document.querySelector('.page__div');

// function clickBtn() {
//   let h3 = document.createElement('h3');
//   h3.innerHTML = 'Заголовок';
//   let p = document.createElement('p');
//   p.innerHTML = 'Текст';
//   div.append(h3);
//   div.append(p);
// }

// btn.addEventListener('click', clickBtn);

// const btn = document.querySelectorAll('.remove-button');
// let btnArr = Array.from(btn);
// const div = document.getElementById('messages-container');

// function clickBtn(e) {
//   if (e.target.tagName === 'SPAN') {
//     e.target.parentNode.remove();
//   }
// }

// div.addEventListener('click', clickBtn);
