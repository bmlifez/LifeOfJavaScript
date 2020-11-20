"use strict";

var _this = void 0;

/* var name = "IronMan";
let person = {
  name: "Batman",
  sayHi: function(){
    console.log(this.name);
    var self = this;
    (function(){
      console.log(this.name);
      console.log(self.name);
    })()
  }
}

person.sayHi();
 */
var name = "IronMan";
var person = {
  name: "Batman",
  sayHi: function sayHi() {
    console.log(_this.name);
    var self = _this;

    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  }
};
person.sayHi();