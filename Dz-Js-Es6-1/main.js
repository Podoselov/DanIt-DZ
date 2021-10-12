class Employee {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.salary = options.salary;
  }

  get userName() {
    return this.name;
  }
  get userAge() {
    return this.age;
  }
  get userSalary() {
    return this.salary;
  }
  set setName(newName) {
    this.name = newName;
  }
  set setAge(newAge) {
    this.age = newAge;
  }
  set setSalary(newSalary) {
    this.salary = newSalary;
  }
}

class Programmer extends Employee {
  constructor(options) {
    super(options);
    this.lang = options.lang;
  }
  userSalary() {
    return this.salary * 3;
  }
}

const user1 = new Programmer({
  name: 'Alex',
  age: 22,
  salary: 222,
  lang: 'uk',
});
const user2 = new Programmer({
  name: 'Vasya',
  age: 12,
  salary: 111,
  lang: 'ru',
});
const user3 = new Programmer({
  name: 'Petya',
  age: 21,
  salary: 212,
  lang: 'en',
});

console.log(user1);
console.log(user2);
console.log(user3);
