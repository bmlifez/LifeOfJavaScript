const pipe = (...functions) => (value) => {
    return functions.reduce((currentValue, currentFunctions) => currentFunctions(currentValue), value);
}