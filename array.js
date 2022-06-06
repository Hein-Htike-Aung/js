var arr = ['John', 23];

arr[1] = 45;
console.log(arr);

/* Nested Array */
var nestedArr = [
  ['John', 23],
  ['Merry', 33],
];
console.log(nestedArr[0][0]);

/* push (add into last place) */
var pushableArr = [1, 2];
pushableArr.push([3, 4]);
console.log(pushableArr);

/* pop (remove last Item) */
var poppableArr = [1, 2, 3];
var lastItem = poppableArr.pop();
console.log(poppableArr);
console.log(lastItem);

/* Shift (remove first Item) */
var shiftArr = ['John', [1]];
var firstItem = shiftArr.shift();
console.log(shiftArr);
console.log(firstItem);

/* unshift (add into first place) */
var unshiftArr = [2, 3];
unshiftArr.unshift(1);
console.log(unshiftArr);

var shoppingList = [
  ['milk', 2],
  ['banana', 12],
  ['juice', 2],
];

/* Mutate const Array */
const arr = [1, 2, 3];

/* arr = [4, 5, 6] Error */
arr.push(4);
arr[0] = 9;

console.log(arr);

/* forEach */
let names = ['James', 'Merry'];

for (let name of names) {
  console.log(name);
}

names.forEach((name, index) => {
  console.log(index, name);
});
