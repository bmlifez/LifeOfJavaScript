"use strict";

// Q)[1, 2, 3, [4, 5], [6, [7, 8, [9, 10]]], 11] - 
// convert into 1d array(flat) without using any inbuilt functions.
function flatArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

var input = [1, 2, 3, [4, 5], [6, [7, 8, [9, 10]]], 11];