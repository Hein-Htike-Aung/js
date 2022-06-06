/*
    undefined, null, boolean, string, symbol, number and object
*/

let undefinedVariable;
let nullVariable = null;
let booleanVariable = true;
let stringVarialbe = 'xiao;';
let numberVariable = 10;
let symbolVariable = Symbol('foo');
let objectVariable = {
  name: 'xiaogin',
};

var myName = 'Aung';
let outName = 'Keplar'; // within scope
const pi = 3.14;

/* diffence between var & let */
function check() {
  var str = 'function scope';
  // let doesn't allow declare variable within same scope
  // let str = '';
  if (true) {
    let str = 'block scope';
    console.log(str);
  }
  console.log(str);
}
check();

// Type Conversion
console.log(typeof parseInt('4'));
let num = 4;
console.log(typeof num.toString());

let num1 = 4,
  num2 = 10;
console.log(+num1 + +num2);
