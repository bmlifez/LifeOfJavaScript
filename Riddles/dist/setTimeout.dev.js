"use strict";

var isSecure = "testMe";

(function () {
  document.getElementById('secure').innerHTML = isSecure; // 1. SetTimeOut riddle 
  // Case 1: SetTimeout would be executing after 
  // the number of second it has been called. 

  for (var i = 0; i < 4; i++) {
    setTimeout(function () {
      console.log('index', i);
    }, 1000);
  } // output after 1 second


  for (var i = 0; i < 4; i++) {
    setTimeout(function () {
      console.log('index', i);
    }, 4000);
  }
})();