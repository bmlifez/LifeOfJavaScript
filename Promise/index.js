function simulateAsyncTask(value, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Promise ${value} failed`);
      } else {
        resolve(`Promise ${value} resolved`);
      }
    }, Math.random() * 2000); // Simulating asynchronous task
  });
}

const promises = [
  simulateAsyncTask(1, false),
  simulateAsyncTask(2, false),
  simulateAsyncTask(3, false),
];

const wrappedPromises = promises.map((promise, index) => {
  return new Promise((resolve, reject) => {
    promise
      .then(result => resolve({ result, index }))
      .catch(error => reject({ error, index }));
  });
});

Promise.all(wrappedPromises)
  .then(results => {
    console.log('All promises resolved successfully');
    console.log('Results:', results);
  })
  .catch(({ error, index }) => {
    console.log('One of the promises failed');
    console.log('Failed Promise at index:', index);
    console.log('Error:', error);
  });


  const wrapperPromises = promises.map((promise, index) => {
    return new Promise((res,rej) => {
      promise.then(result => res({result, index})).catch(error => rej({ error, index}));
    })
  })