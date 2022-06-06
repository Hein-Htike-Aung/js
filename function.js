function addingTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

addingTwoNumber(2, 3);

/* Global Scope and function */
var myGlobal = 10;

function myOpps() {
  var myOppsValue = 20;
}

function returnFunction() {
  if (typeof myGlobal != 'undefined') {
    return 'Return global value -> ' + myGlobal;
  }

  if (typeof myOppsValue != 'undefined') {
    // Accessing to local variable
    return 'Return value within function -> ' + myOppsValue;
  }
}

console.log(returnFunction());

/* Local Scope and function */
function print() {
  var myVar = 5;
  console.log(myVar);
}
// Error
console.log(myVara);

/* Global Vs Local Scope Function */
var outfit = 'T-shirt';

function myOutfit() {
  var outfit = 'Sweater';
  return outfit;
}

console.log(myOutfit());
console.log(outfit);

/* Change Value from array */
function changeValueFromArray(arr, item) {
    arr.push(item);
    arr.shift();
}

var testArr = [1, 2, 3, 4];

console.log('Before: ' + JSON.stringify(testArr));
changeValueFromArray(testArr, 5);
console.log('After: ' + JSON.stringify(testArr));

/* Using Spread (copy arr & obj) */
let num = 10;
let arr = [1, 2];
let obj = {
    _name: 'Xiaoting',
}

function change(number) {
    number = 20;
};
function changeArr(array, num) {
    array.push(num);
}
function changeObj(person, name) {
    person._name = name;
}

change(num);
changeArr([...arr], 3);
changeObj({...obj}, 'Karina');

console.log(num);
console.log(arr);
console.log(obj);

// Math Function
var num = 3.9;
console.log(Math.round(num));
console.log(Math.pow(num, num));
console.log(Math.sqrt(num));

console.log(Math.floor(3.9));
console.log(Math.round(Math.random() * 10000));

