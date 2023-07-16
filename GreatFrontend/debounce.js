/*
Debouncing is a technique used to control how many times we allow a function to be 
executed over time. When a JavaScript function is debounced with a wait time of X 
milliseconds, it must wait until after X milliseconds have elapsed since the debounced 
function was called. You almost certainly have encountered debouncing in your daily lives 
before — when entering an elevator. Only after X duration of not pressing the "Door open" 
button (the debounced function not being called) will the elevator door actually close 
(the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. 
Calling debounce() returns a function which has debounced invocations of the callback 
function following the behavior described above.

*/

/* Test Cases for the code

import debounce from './debounce';

describe('debounce', () => {
   test('can be initialized', () => {
     // eslint-disable-next-line @typescript-eslint/no-empty-function
     const increment = debounce(() => {}, 50);

     expect(increment).toBeTruthy();
   });

   test('executes after duration', (done) => {
     let i = 0;
     const increment = debounce(() => {
       i++;
    }, 50);

    expect(i).toBe(0);
    increment();
    expect(i).toBe(0);

    setTimeout(() => {
      expect(i).toBe(1);
      done();
    }, 100);
  });

  test('uses arguments', (done) => {
    let i = 21;
    const increment = debounce((a, b) => {
      i += a * b;
    }, 50);

    expect(i).toBe(21);
    increment(3, 7);
    expect(i).toBe(21);

    setTimeout(() => {
      expect(i).toBe(42);
      done();
    }, 100);
  });

  test('execute once even after calling it multiple times', (done) => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 50);

    expect(i).toBe(0);
    increment();
    increment();
    increment();
    increment();
    expect(i).toBe(0);

    // Should not fire yet.
    setTimeout(() => {
      expect(i).toBe(0);
    }, 25);

    setTimeout(() => {
      expect(i).toBe(1);
      done();
    }, 75);
  });

  test('duration extended if called again during window', (done) => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 100);

    expect(i).toBe(0);
    increment();
    increment();
    expect(i).toBe(0);

    // Should not fire yet.
    setTimeout(() => {
      expect(i).toBe(0);
      increment();
      expect(i).toBe(0);
    }, 50);

    setTimeout(() => {
      // Still 0 because we fired again at t=50, increment will only happen at t=150
      expect(i).toBe(0);
    }, 125);

    setTimeout(() => {
      expect(i).toBe(1);
      done();
      // Add a longer delay because the browser timer is unreliable.
    }, 1500);
  });

  test('callbacks can access `this`', (done) => {
    const increment = debounce(function (delta) {
      this.val += delta;
    }, 50);

    const obj = {
      val: 2,
      increment,
    };

    expect(obj.val).toBe(2);
    obj.increment(3);
    expect(obj.val).toBe(2);

    setTimeout(() => {
      expect(obj.val).toBe(5);
      done();
    }, 100);
  });
});

*/

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer;
  let isRunner = true;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    if (isRunner) {
      isRunner = false;
      setTimeout(() => {
        func.call(context, ...args);
        isRunner = true;
      }, wait);
    }
  };
}
