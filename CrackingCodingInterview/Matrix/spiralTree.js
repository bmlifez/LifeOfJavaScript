/*
🌀 Spiral Array(ES6)
ES6 allows us to keep it simple:
*/
function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...matrix.pop().reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}