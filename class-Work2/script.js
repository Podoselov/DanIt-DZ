'use strict';

// const tabel = {
//   biology: 11,
//   phisic: 8,
//   history: 12,
//   mathematic: 6,
//   sport: '6',
//   name: 'Генос',
//   100: 20,
//   200: 450,
//   'last name': 'Кибердемон',
// };

// tabel.caclAverageScore = caclAverageScore;
// console.log(tabel.caclAverageScore());
// function caclAverageScore() {
//   let result = [];
//   for (const key in this) {
//     if (typeof this[key] === 'number' || !isNaN(this[key])) {
//       result.push(+this[key]);
//     }
//   }
//   let lenght = result.length;
//   let namberAv = result.reduce((sum, current) => sum + current);
//   return namberAv / lenght;
// }

function getProductQuantity(products, productName) {
  let quantity = products[productName];
  // если значение свойства undefined, нет такого
  if (typeof quantity === 'undefined') {
    console.error('Product not found'); // даем ошибку, возвращаем 0
    return 0;
  } else {
    // возвращаем количество
    return quantity;
  }
}

function getMaxQuantity(products) {
  let max = 0;
  let maxProductName;

  for (const product in this.products) {
    if (this.products[product] > max) {
      max = this.products[product];
      maxProductName = product;
    }
  }
  return maxProductName;
}

// функция для получения общего количества конкретного продукта на всех складах
function getTotalQuantity(productTitle, warehousesArr) {
  let sum = warehousesArr.reduce((acc, warehouse) => {
    return (acc += warehouse.getProductQuantity(productTitle));
  }, 0);

  return sum;
}
