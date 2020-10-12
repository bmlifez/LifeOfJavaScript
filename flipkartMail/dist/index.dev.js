"use strict";

var Unread = document.getElementById('Unread');
var Read = document.getElementById('Read');
var Favourites = document.getElementById('Favourites');
var leftPanel = document.getElementById('leftPanel');
var rightPanel = document.getElementById('rightPanel');
var nameHeadline = document.getElementById('nameHeadline');
var readEmails = [];
var unReadEmails = [];
var favouritesEmails = [];
var currentPage = 1;
document.addEventListener('DOMContentLoaded', function () {
  showLeftPanel();
});
Unread.addEventListener('click', function () {
  Unread.classList.add('selected');
  Read.classList.remove('selected');
  Favourites.classList.remove('selected');
});
Read.addEventListener('click', function () {
  Read.classList.add('selected');
  Unread.classList.remove('selected');
  Favourites.classList.remove('selected');
});
Favourites.addEventListener('click', function () {
  Favourites.classList.add('selected');
  Read.classList.remove('selected');
  Unread.classList.remove('selected');
});

var showLeftPanel = function showLeftPanel() {
  var response, emailList;
  return regeneratorRuntime.async(function showLeftPanel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://flipkart-email-mock.now.sh/?page=' + currentPage));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          emailList = _context.sent;

          if (emailList.total > 0) {
            outputHTML(emailList);
          }

          if (emailList.total === 0) {
            outputHTML([]);
          }

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var outputHTML = function outputHTML(emailList) {
  var html = emailList.list.map(function (mail) {
    var mailDate = new Date(mail.date);
    return "<div id=\"".concat(mail.id, "\" onClick=updatePanel(\"").concat(mail.id, "\",\"show\") class=\"leftPanel-element\">\n                <div>\n                    <span class=\"span-li\">From: ").concat(mail.from.name, " < ").concat(mail.from.email, " > </span>\n                </div>\n                <div>\n                    <span>Subject: ").concat(mail.subject, "</span>\n                </div>\n                <div>\n                    <span>").concat(mail.short_description, "</span>\n                </div>\n                <div>\n                    <span>").concat(mailDate.getDate(), "/").concat(mailDate.getMonth(), "/").concat(mailDate.getFullYear(), "  ").concat(mailDate.getUTCHours(), ":").concat(mailDate.getUTCMinutes(), "</span>\n                </div>\n            </div>");
  }).join('');
  leftPanel.innerHTML = html;
};

var updatePanel = function updatePanel(id, viewMode) {
  var response, bodyView;
  return regeneratorRuntime.async(function updatePanel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('https://flipkart-email-mock.now.sh/?id=' + id));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          bodyView = _context2.sent;

          if (viewMode === "show") {
            rightPanel.innerHTML = bodyView.body;
            readEmails.push(id);
          }

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};