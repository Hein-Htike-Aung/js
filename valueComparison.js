console.log(10 == '10');
console.log(10 === '10'); // strict equality check type and value

console.log(10 != '10');
console.log('10' !== '10');

/* Logical And Operator */
function logicalAnd(val) {
  if (val < 50) {
    if (val > 25) {
      return 'yes';
    }
  }

  if (val < 50 && val > 25) {
    return 'inside of the 25 and 50';
  }
}

/* Logical Or Operator */
function logicalOr(val) {
  if (val > 50) {
    return 'yes';
  }
  if (val < 25) {
    return 'yes';
  }

  if (val > 50 || val < 25) {
    return 'outside of the 25 and 50';
  }
}

/* Switch statement is using strict equality === */
var num = 4;

switch (num) {
  case 1:
  case 2:
  case 3:
    console.log('Low');
    break;
  case 4:
    console.log('High');
    break;
  default:
    console.log('Unknown');
}

/* Switch condition */

let person = {
  age: 60,
};

switch (true) {
  case (person.age >= 18 && person.age >= 50):
    console.log('adult');
    break;
  default:
    console.log('not adult');
}
