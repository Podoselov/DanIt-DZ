'use strict';

function filterBy(arr, type) {
  let newArr = arr.filter((el) => typeof el !== type);
  return newArr;
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));
