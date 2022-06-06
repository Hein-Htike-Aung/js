var singleQuoteString = '"My Name"';
var backtick = `"Other Name"`;

console.log(singleQuoteString);
console.log(backtick);
console.log(backtick.length);
console.log(backtick[0]); // find the nth char in string
console.log(backtick[backtick.length - 1]); // find the last Char

/* String Immutability */
var myStr = 'Hello';
myStr[0] = 'h';
console.log(myStr);

/* String template literal */
const person = {
  name: 'John',
};

console.log(`My Name is ${person.name}`);

/* slice */
let str = 'Hello'.slice(0, 2);
console.log(str);

/* padEnd */
let str = 'parent';
let str2 = 'child';

console.log(str.padEnd(8, ' ') + 'Hello');
console.log(str2.padEnd(8, ' ') + 'Hello');
