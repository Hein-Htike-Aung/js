var dog = {
  name: 'Camper',
  legs: 4,
  friends: ['cat', 'human'],
};

console.log(dog.name);

/* Adding new Properties into object */
dog.bark = 'woof';
dog['dog-age'] = 8;
console.log(dog);

// deleting Property from object
delete dog.bark;
delete dog['dog-age'];

console.log(dog);

/* check if property is existed */
console.log(dog.hasOwnProperty('bark'));

/* Object Array */
var students = [
  {
    name: 'john',
  },
  {
    name: 'lucifer',
  },
];

console.log(students[0].name);

/* nested object */
var nestedObj = {
  student: {
    name: 'John',
    info: {
      grade: 10,
      age: 16,
    },
  },
};

console.log(nestedObj.student.info.age);

/* Array value in Object */
var students = [
  {
    name: 'John',
    info: ['Grade 10', 'Age 16'],
  },
];

console.log(students[0].info[1]);

/* Lookup Profile Challenge */
var contacts = [
  {
    name: 'john',
    number: '099343433434',
    likes: ['Magic', 'Books'],
  },
  {
    name: 'Merry',
    number: '0101324324',
    likes: ['Challenge', 'Coding'],
  },
];

function lookUpProfileByNameAndProperty(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i][prop] || 'No such Property';
    }
  }
  return 'No such Name';
}

console.log(lookUpProfileByNameAndProperty('john', 'hobby'));
console.log(lookUpProfileByNameAndProperty('Merry', 'likes'));

/* Prevent Object Mutation */
const MATH_CONSTANT = {
  PI: 3.14,
};
Object.freeze(MATH_CONSTANT);
MATH_CONSTANT.PI = 99;
console.log(MATH_CONSTANT.PI);

/* Simple Object Function */
let employee = {
  baseSalary: 24_000_000,
  overtime: 10,
  rate: 20,

  getWage() {
    return this.baseSalary + (this.overtime + this.rate);
  },
};

console.log(employee.getWage());

/* Standlone function */
const person = {
  name: 'John',
  walk() {
    console.log(this);
    console.log(this.name);
  },
};

const walk = person.walk;
console.log(walk);
// standlone function which is outside of the object doesn't work
// it gets the global object (window) instead
walk();

/* Fix Standlone function using bind */
const person = {
  walk() {
    console.log(this);
  },
};

const walk = person.walk.bind(person);
walk();

/* Factory Function and Property ES5 (For Create Object)*/

const circle_color = 'CIRCLE_COLOR';
createCircle = (radius, color) => {
  return {
    radius,
    [circle_color.toLocaleLowerCase()]: color,
    draw() {
      console.log(`draw circle with radius ${this.radius}`);
    },
  };
};

const circle = createCircle(10, 'yellow');
console.log(circle);
circle.draw();

/* Constructor Function ES5 (For Create Object) */
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log(`draw circle with radius ${this.radius}`);
  };
}

const circle = new Circle(9);
circle.draw();

/* Prototype manipulation (the object property)*/
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// function stored in prototype rather than in the object
Book.prototype.getSummary = function () {
  return `${this.title} ${this.author} ${this.year}`;
};

Book.prototype.getAge = function () {
  const year = new Date().getFullYear() - this.year;
  return `This book is published ${year} ago`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const b1 = new Book('Book One', 'John Doe', '2019');
console.log(b1.getSummary());
console.log(b1.getAge());
b1.revise(new Date().getFullYear());
console.log(b1);

/* Object Inheritance */
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} ${this.author} ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// change Magazine's prototype Constructor (see in browser)
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Mag One', 'John Doe', '2019', 'Jan');
console.log(mag1);

console.log(mag1.getSummary());

/* Object Prototype ES5 */
const bookProtos = {
  getsummary() {
    return `${this.title} ${this.author} ${this.year}`;
  },
  getAge() {
    return `This book is published ${year} ago`;
  },
};

// create Object
const b1 = Object.create(bookProtos);
b1.title = 'Book One';
b1.author = 'Author';
b1.year = '2019';

console.log(b1);

// Adding Property
circle.location = {
  x: 1,
  y: 2,
};

// Special Character
circle['circle-color'] = {
  color: 'yellow',
};

delete circle['circle-color'];

// Enumerating Object Properties
for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

const circleKeys = Object.keys(circle);
console.log(circleKeys);

const circleValues = Object.values(circle);
console.log(circleValues);

if ('radius' in circle) {
  console.log('circle has radius');
}

/* Abstraction 
  Closure can be anything within the object scope -> Closure is lasting
  In contrast, anything within the function scope is temporary
*/
const Circle = function () {
  let color = 'red'; // hiding the details using let (closure)
  let defaultLocation = { x: 0, y: 0 }; // hiding the details
  let computeOptimunLocation = function (factor) {
    // (closure)
  };

  this.radius; // (closure)
  this.draw = function draw() {
    let a, b, c; // temporary
    color;
    computeOptimunLocation(3);
    defaultLocation.x;
    this.radius;
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid Location.');
      }

      defaultLocation = value;
    },
  });
};

const circle = new Circle();
circle.radius = 40;
circle.defaultLocation = { x: 2, y: 9 };
console.log(circle.defaultLocation);

/* =========== Stop Watch ========== */
const StopWatch = function () {
  let timer = {
    startTime: 0,
    endTime: 0,
    duration: 0,
    state: false,
  };

  this.start = function () {
    if (!timer.state) {
      if (this.duration != 0) {
        this.duration += new Date().getTime();
      }

      timer.startTime = new Date().getTime();
      timer.state = true;
    } else {
      throw new Error('Cant call start twice!');
    }
  };

  this.stop = function () {
    if (timer.state) {
      timer.endTime = new Date().getTime();

      timer.duration += timer.endTime - timer.startTime;

      timer.state = false;
    } else {
      throw new Error('Cant call end twice');
    }
  };

  this.reset = function () {
    timer.startTime = 0;
    timer.endTime = 0;
    timer.duration = 0;
    timer.state = false;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      if (timer.state) {
        timer.duration += new Date().getTime() - timer.startTime;
        return timer.duration;
      }
      return timer.duration;
    },
  });
};


/* Assign Object */

const data = {
  name: 'xiaoting'
}

const data2 = {
  id: 2
}

Object.assign(data, data2);

console.log(data);