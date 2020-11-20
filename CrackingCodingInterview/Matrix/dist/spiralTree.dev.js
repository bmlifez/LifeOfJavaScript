"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
🌀 Spiral Array(ES6)
ES6 allows us to keep it simple:
*/
function spiral(matrix) {
  var arr = [];

  while (matrix.length) {
    arr.push.apply(arr, _toConsumableArray(matrix.shift()).concat(_toConsumableArray(matrix.map(function (a) {
      return a.pop();
    })), _toConsumableArray(matrix.pop().reverse()), _toConsumableArray(matrix.map(function (a) {
      return a.shift();
    }).reverse())));
  }

  return arr;
}