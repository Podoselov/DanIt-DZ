class BooksList {
  constructor(options) {
    this.author = options.author;
    this.name = options.name;
    this.price = options.price;
  }

  createElementLi(root, arr) {
    let elUl = document.createElement('ul');
    let elArr = Array.from(arr);
    elArr.forEach((el) => {
      let elLi = document.createElement('li');
      try {
        elLi.innerHTML = `${el.author} -  "${el.name}" - ${el.price}`;
        if (!el.author || !el.name || !el.price) {
          throw new SyntaxError('Ошибка в данных');
        }
        elUl.append(elLi);
      } catch (er) {
        console.log(el);
      }
    });
    elDiv.append(elUl);
  }
}

const elDiv = document.getElementById('#root');
const books = [
  {
    author: 'Скотт Бэккер',
    name: 'Тьма, что приходит прежде',
    price: 70,
  },
  {
    author: 'Скотт Бэккер',
    name: 'Воин-пророк',
  },
  {
    name: 'Тысячекратная мысль',
    price: 70,
  },
  {
    author: 'Скотт Бэккер',
    name: 'Нечестивый Консульт',
    price: 70,
  },
  {
    author: 'Дарья Донцова',
    name: 'Детектив на диете',
    price: 40,
  },
  {
    author: 'Дарья Донцова',
    name: 'Дед Снегур и Морозочка',
  },
];
const books2 = [
  { author: 'Айн Рэнд', name: 'Атлат расправил плечи', price: 60 },
  { author: 'Пауло Коельо', name: 'Алхимик' },
  { name: 'Homo Deus', price: 40 },
  { author: 'Фридрих Ницше', name: 'По ту сторону добра и зла', price: 90 },
  { author: 'Джеймс Клир', name: 'Атомные привычки' },
];

const newList = new BooksList({ books });
newList.createElementLi(elDiv, books);
const newList2 = new BooksList({ books2 });
newList2.createElementLi(elDiv, books2);
