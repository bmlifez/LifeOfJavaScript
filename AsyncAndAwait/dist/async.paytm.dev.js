"use strict";

(function _callee() {
  var fn1, fn2, result1, result2, result3, result4;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fn2 = function _ref2() {
            return regeneratorRuntime.async(function fn2$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", 2);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          fn1 = function _ref() {
            return 2;
          };

          result1 = fn1();
          _context2.next = 5;
          return regeneratorRuntime.awrap(fn1());

        case 5:
          result2 = _context2.sent;
          result3 = fn2();
          _context2.next = 9;
          return regeneratorRuntime.awrap(fn2());

        case 9:
          result4 = _context2.sent;

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
})();