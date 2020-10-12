"use strict";

(function () {
  var x, y;

  try {
    throw new Error();
  } catch (y) {
    x = 1;
    y = 2;
    console.log(y);
  }

  console.log(x);
  console.log(y);
})();