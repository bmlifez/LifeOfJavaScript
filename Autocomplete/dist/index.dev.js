"use strict";

var search = document.getElementById('search');
var matchList = document.getElementById('matchList');
var sortingId = document.getElementById('sorting');
var matches = [];

var debounce = function debounce(fn, delay) {
  try {
    var timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(this, arguments);
      }, delay);
    };
  } catch (error) {
    console.error("debounce function ".concat(fn, " failed ").concat(error));
  }
};

search.addEventListener('input', debounce(function () {
  searchList(search.value);
}, 400));
sortingId.addEventListener('click', function (e) {
  if (e.target.value === "1") {
    var sortedArrAscending = matches;
    sortedArrAscending.sort(function (a, b) {
      return a.id - b.id;
    });
    outputHTML(sortedArrAscending);
  }

  if (e.target.value === "2") {
    var sortedArrDescending = matches;
    sortedArrDescending.sort(function (a, b) {
      return b.id - a.id;
    });
    outputHTML(sortedArrDescending);
  }

  if (e.target.value === "3") {
    outputHTML(matches);
  }
});

function initialRender() {
  var response, state;
  return regeneratorRuntime.async(function initialRender$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://5f93c74d9ecf720016bfbfcd.mockapi.io/supreet'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          state = _context.sent;
          matches = state;
          outputHTML(matches);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.onload = function (e) {
  initialRender();
};

var searchList = function searchList(searchText) {
  return regeneratorRuntime.async(function searchList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          filtered = matches.filter(function (state) {
            var regex = new RegExp("^".concat(searchText), 'gi');
            return state.name.match(regex);
          });
          matches.sort(function (a, b) {
            return b.current_price - a.current_price;
          });

          if (searchText.length > 0) {
            outputHTML(filtered);
          }

          if (searchText.length === 0) {
            filtered = [];
            outputHTML(matches);
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var outputHTML = function outputHTML(matches) {
  var html = matches.map(function (repo) {
    return "<li  class=\"suggestion-li\">\n                <span class=\"span-li\">".concat(repo.id, "</span>\n                <span class=\"span-li\">").concat(repo.name, "</span>\n                <img class=\"img-icon span-li\" src=").concat(repo.owner.avatar_url, " />\n            </li>");
  });
  matchList.innerHTML = html;
};