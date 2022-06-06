class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person('John');
console.log(person.name);

/* Return Class */
const PersonClass = () => {
  return class Person {
    constructor(name) {
      this.name = name;
    }
  }
};

let Person = PersonClass();
let person = new Person('John');
console.log(person.name);


/* Change Property */
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

const b1 = new Book('Book One', 'John Doe', '2019');
console.log(b1);
b1.revise('2022');
console.log(b1);

/* Getter Setter */
class Book {
  constructor(author) {
    this._author = author;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    this._author = author;
  }

  print() {
    console.log(`printing -> ${this._author}`);
  }
}

let book = new Book();
book.author = 'john'; // call the setter
console.log(book.author); // call the getter
book.print();

/* Inheritance */
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  logBreed() {
    console.log(`${this.name} is ${this.breed}`);
  }

  logDogInfo() {
    super.logInfo();
  }
}

const dog1 = new Dog('mike', 6, 'Bulldog');
dog1.logInfo();
dog1.logBreed();
dog1.logDogInfo();

/* Composition */
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walking');
  }
}

class Teacher {
  constructor(person, skill) {
    this.person = person;
    this.skill = skill;
  }

  teach() {
    console.log(this.skill);
  }

  walk() {
    this.person.walk();
  }
}

const teacher = new Teacher(new Person(), 'Teaching');
teacher.teach();
teacher.walk();

/* static Method */

class Person {
  static staticMethod(){
    console.log("Static Method");
  }
}

Person.staticMethod();