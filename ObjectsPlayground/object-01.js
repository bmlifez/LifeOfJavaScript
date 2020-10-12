/* 
Differnece between Arrow function vs regular function

1. Syntax (shorter and cleaner)
2. Arguments binding (no default arguments)
3. Use of this keyword (no this present of its own)
4. Using new keyword (cant use new keyword in arrow)
5. No duplicate named parameters

*/

let arrow = {
    name: 'steve',
    foo: () => console.log(this.name)
}
arrow.foo();
let y = arrow;
y.foo();
let regularFunction = {
    name: 'tony stark',
    foo: function () {
        console.log(this.name);
    }
}
regularFunction.foo();
let testRegular = regularFunction;
testRegular.name = "Bhaskar Mishra";
testRegular.foo();

function Person() {
    title = "Army of the thains";
    getArmy=()=>{
        console.log(this.title);
        z=()=>console.log('inner arrow',this.title);
        return z();
    }
    return getArmy();
}
Person();
