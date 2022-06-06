async function logName(name) {
  // can yield promises using await (same as yield)
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => resolve(name.toUpperCase()), 1000);
    setTimeout(() => reject('no data back'), 2000);
  });

  const result = await transformName;

  // return a promise
  return result;
}

logName('xiaoting')
  .then((res) => {
    console.log(`result from async function -> ${res}`);
  })
  .catch((error) => {
    console.log(error);
  });
