// Pause the function
const getData = function* () {
  yield 1;
  yield 'Hello';
  yield true;
  yield { name: 'Alex' };
  return 'Done...';
};

const numbersGen = getData();

console.log(numbersGen.next());
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next());

/* Generator with interval */
const getNumbers = function* (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};

const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    console.log('Generator is done');
    clearInterval(interval);
  } else {
    const number = next.value;
    console.log(number);
  }
}, 1000);
