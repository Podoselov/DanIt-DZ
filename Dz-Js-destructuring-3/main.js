'use strict';

//Task1

const clients1 = [
  'Гилберт',
  'Сальваторе',
  'Пирс',
  'Соммерс',
  'Форбс',
  'Донован',
  'Беннет',
];
const clients2 = ['Пирс', 'Зальцман', 'Сальваторе', 'Майклсон'];

// function newClients([...arr]) {
//   arr.filter(function (el) {
//     return el;
//   });
// }

const [...clients3] = [...clients1, ...clients2];
clients3.filter(function (item, pos) {
  return item === pos;
});

console.log(clients3);
// //Task2

// const characters = [
//   {
//     name: 'Елена',
//     lastName: 'Гилберт',
//     age: 17,
//     gender: 'woman',
//     status: 'human',
//   },
//   {
//     name: 'Кэролайн',
//     lastName: 'Форбс',
//     age: 17,
//     gender: 'woman',
//     status: 'human',
//   },
//   {
//     name: 'Аларик',
//     lastName: 'Зальцман',
//     age: 31,
//     gender: 'man',
//     status: 'human',
//   },
//   {
//     name: 'Дэймон',
//     lastName: 'Сальваторе',
//     age: 156,
//     gender: 'man',
//     status: 'vampire',
//   },
//   {
//     name: 'Ребекка',
//     lastName: 'Майклсон',
//     age: 1089,
//     gender: 'woman',
//     status: 'vempire',
//   },
//   {
//     name: 'Клаус',
//     lastName: 'Майклсон',
//     age: 1093,
//     gender: 'man',
//     status: 'vampire',
//   },
// ];

// let [...charactersShortInfo] = characters.map((el) => {
//   return { name: el.name, lastName: el.lastName, age: el.age };
// });

// console.log(charactersShortInfo);

//Task3

// const user1 = {
//   name: 'John',
//   years: 30,
// };

// const { name: name, years: years, isAdmin = false } = user1;

// console.log(name, years, isAdmin);

//Task 4

// const satoshi2020 = {
//   name: 'Nick',
//   surname: 'Sabo',
//   age: 51,
//   country: 'Japan',
//   birth: '1979-08-21',
//   location: {
//     lat: 38.869422,
//     lng: 139.876632,
//   },
// };

// const satoshi2019 = {
//   name: 'Dorian',
//   surname: 'Nakamoto',
//   age: 44,
//   hidden: true,
//   country: 'USA',
//   wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
//   browser: 'Chrome',
// };

// const satoshi2018 = {
//   name: 'Satoshi',
//   surname: 'Nakamoto',
//   technology: 'Bitcoin',
//   country: 'Japan',
//   browser: 'Tor',
//   birth: '1975-04-05',
// };

//Task5

// const books = [
//   {
//     name: 'Harry Potter',
//     author: 'J.K. Rowling',
//   },
//   {
//     name: 'Lord of the rings',
//     author: 'J.R.R. Tolkien',
//   },
//   {
//     name: 'The witcher',
//     author: 'Andrzej Sapkowski',
//   },
// ];

// const bookToAdd = {
//   name: 'Game of thrones',
//   author: 'George R. R. Martin',
// };

// const [...book2] = [...books, { ...bookToAdd }];

// console.log(book2);

//Task6

// const employee = {
//   name: 'Vitalii',
//   surname: 'Klichko',
// };

// function addArg({ ...newObj }) {
//   newObj.age = 22;
//   newObj.salary = 22222;
//   return newObj;
// }

// console.log(addArg(employee));

//Task7

// const array = ['value', () => 'showValue'];

// const [value] = array;
// const [, showValue] = array;

// console.log(value);
// console.log(showValue());
