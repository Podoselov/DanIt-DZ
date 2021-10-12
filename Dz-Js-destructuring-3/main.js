'use strict';

//Task3

const user1 = {
  name: 'John',
  years: 30,
};

const { name, years, isAdmin = false } = user1;

console.log(name, years, isAdmin);
