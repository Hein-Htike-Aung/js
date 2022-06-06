/* Anonmymouse Function */
const magic = function () {
  return new Date();
};
console.log(magic());

/* Immediately function invocation */
const magic = (function () {
  return new Date();
})();
console.log(magic);

const magic = () => new Date();
console.log(magic());

/* With Arrgs */
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat('Say ', 'Hello'));

/* Higher Order function */
const realArr = [1, -4, 3, -1, 0, -5.5, 7, 9.9];

const squarePositiveInteger = (arr) => {
  return arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
};

console.log(squarePositiveInteger(realArr));

/* Using default Value */
const calculatePay = (
  salary,
  bonus = {
    teamBonus: 0,
    employeeBonus: 0,
  }
) => {
  return salary + bonus.teamBonus + bonus.employeeBonus;
};

console.log(calculatePay(20_000));
console.log(calculatePay(20_000, { teamBonus: 10, employeeBonus: 0 }));
console.log(calculatePay(20_000, { teamBonus: 200, employeeBonus: 10 }));

// rest Operator
const sum = (function () {
  return function (...args) {
    return args.reduce((a, b) => a + b);
  };
})();

console.log(sum(1, 2, 3));

/* Spread Operator */
const arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;

(function () {
  // Copy array by using spread operator
  arr2 = [...arr1];
  arr1[0] = 'Apple;';
})();

console.log(arr1);
console.log(arr2);

/* spread operator with array */
const addNumbers = (num1, num2, num3) => {
  console.log(num1);
  console.log(num2);
  console.log(num3);
};
const arr = [1, 6];
addNumbers(...arr);
addNumbers([...arr]);

/* combine two object using spread Operator */
const peronsName = { firstName: 'Andy' };
const address = { country: 'Korea' };
const person = { ...peronsName, ...address };
console.log(person);

/* Destructuring Assignment */
const obj = {
  x: 1,
  y: 2,
  z: 3,
};

const { x: a, y: b } = obj;
const { z: c } = obj;
console.log(a + b + c);

/* Destructuring Assignment using nested Object */
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
};

const {
  today: { max: todayMax },
} = LOCAL_FORECAST;

console.log(todayMax);

/* Destructuring Assignment using Array */
const [x, y, , z] = [1, 2, 3, 4, 5];
console.log(x, y, z);

let a = 1,
  b = 9;

(() => {
  [a, b] = [b, a];
})();

console.log(a, b);

/* Destructuring Assignment using Array */
const source = [1, 2, 3, 4, 5];

const [a, b, ...arr] = source;
console.log(a, b, arr);

/* Destructuring Assignment using Object */
const fun = ({ name: _name, info: { job: _job }, ...rest }) => {
  console.log(_name, _job);
  console.log(rest.age);
  console.log(rest.status);
};

fun({
  name: 'xiaoting',
  age: 20,
  status: 'pretty',
  info: {
    job: 'singer',
    country: 'Korea',
  },
});

/* Destructuring Assignment as function's parameter */
const student = {
  name: 'John',
  age: 23,
  grade: 10,
};

const studentNameAndAge = (() => {
  return function studentNameAndAge({ name, age }) {
    console.log(name, age);
  };
})();

studentNameAndAge(student);

/* Simple Fields  */

// const person = (name, age) => {
//   return {
//     name: name,
//     age: age,
//   }
// }
const person = (name, age) => ({ name, age });

console.log(person('John', 23));

/* Destructuring Assignment, spread Operator and Callbacks */

const person = {
  name: 'xiaoting',
  age: 18,
  status: 'pretty',
  info: {
    country: 'Korea',
    job: 'Singer',
  },
};
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const people = [
  {
    name: 'xiaoting',
    age: 18,
    status: 'pretty',
    info: {
      country: 'Korea',
      job: 'Singer',
    },
  },
  {
    name: 'karina',
    age: 20,
    status: 'sexy',
    info: {
      country: 'Korea',
      job: 'Singer',
    },
  },
];

const print = (
  { name: _name, info: { country: _country }, ...rest },
  [a, b, ...restArr],
  array,
  peopleName,
  peopleNameCallBack
) => {
  console.log(`As parameter -> ${_name}`);
  console.log(`As parameter -> ${_country}`);
  console.log(`winthin rest -> ${rest.age}`);
  console.log(`winthin rest -> ${rest.status}`);
  console.log(`destructuring arr -> ${a} ${b} ${restArr}`);
  console.log(`Binding Two array -> ${array}`);
  console.log(peopleNameCallBack(peopleName));
};

print(
  { ...person },
  [...arr],
  [...arr, ...arr2],
  [...people.map((person) => person.name)],
  (peopleName) => peopleName.map(name => name.toUpperCase())
);

/* Concise Declaritive Functions */
const person = {
  name: 'John',
  setAge(newAge) {
    this.age = newAge;
  },
};

person.setAge(23);
console.log(person.age);
