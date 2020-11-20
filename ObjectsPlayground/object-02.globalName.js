var name = "IronMan";
let person = {
    name: "Batman",
    sayHi: function () {
        console.log(this.name);
        var self = this;
        (function () {
            console.log(this.name);
            console.log(self.name);
        })()
    }
}

person.sayHi();

var name = "IronMan";
let person = {
    name: "Batman",
    sayHi: () => {
        console.log(this.name);
        var self = this;
        (function () {
            console.log(this.name);
            console.log(self.name);
        })()
    }
}

person.sayHi();