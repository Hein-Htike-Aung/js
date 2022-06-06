const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Techonology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Techonology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 32, 44, 61, 33, 15, 45, 25, 64, 32];

/* 
    forEach (value, index, array)
    filter (value, index, array)
    map (value, index, array)
    sort (a: T, b: T)
    reduce (preValue, currentValue, currentIndex, array)
*/

/* forEach */

companies.forEach((company, index) => {
  console.log(index, company.name);
});

/* filter */
// Get 21 or older

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// Filter retail companies

const retailCompanes = companies.filter(
  (company) => company.category === 'Retail'
);
console.log(retailCompanes);

// Get 80s Companies

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1990
);
console.log(eightiesCompanies);

// Get the companies that lasted 10 years or More

const lastedTenYearsCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYearsCompanies);

/* map */

// Create Array of company names

const companyNames = companies.map(
  (company) =>
    `${company.name.toUpperCase()} [${company.start}] [${company.end}]`
);
console.log(companyNames);

// Square the ages
const squareAndTwoTimesAges = ages
  .map((age) => {
    return Math.round(Math.sqrt(age));
  })
  .map((squareAge) => {
    return squareAge * squareAge;
  });
console.log(JSON.stringify(squareAndTwoTimesAges));

// Total ages for each company

const totalAgeForEachCompany = companies.map((company) => {
  return `${company.name} [${company.end - company.start}]`;
});
console.log(totalAgeForEachCompany);

/* sort */

// Sorted Company by its start date

// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

// sort ages
const sortedAges = ages.sort((a, b) => a - b);
console.log(JSON.stringify(sortedAges));
const desSortedAges = ages.sort((a, b) => b - a);
console.log(JSON.stringify(desSortedAges));

/* reduce */
// Total Ages
const ageSum = ages.reduce((total, age) => {
  return total + age;
}, 0); // total starts with 0
console.log(ageSum);

// Total ages for each company
const totalAgeForCompanies = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log('Total Years for all Companies -> ', totalAgeForCompanies);

/* Like Distinct */
const distinctArr = [...new Set(ages)];

/* Find */
const isFound = companies.find(company => company.name.toLowerCase() === 'company one'.toLowerCase());
console.log(isFound);

/* Some */

const roles = ['ADMIN', 'USER'];

isIncluded: boolean = roles.some(role => role.includes('ADMIN'));

/* Combined Function */
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, sortedAge) => total + sortedAge, 0);

console.log(combined);

/* CallBacks */
callBackExample = (names, callback) => {
  console.log(callback(names));
};

callBackExample(['xiaoting', 'karina'], (names) =>
  names.map((name) => name.toUpperCase())
);

callBackExample(['Xiaoting', 'Karina'], (names) =>
  names.map((name) => name.toLowerCase())
);
