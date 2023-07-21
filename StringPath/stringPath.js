const getObjectPath = (obj, path) => {
    if(!path || path.length === 0){
        return undefined;
    }

    const excludedKeys = ['[',']','.'];
    const keys = [];

    for(let i=0; i<path.length; i++){
        if(!excludedKeys.includes(path[i])){
            keys.push(path[i])
        }
    }
    let value = keys.reduce((obj, key) => {
        return obj[key]
    }, obj)
    return value;
}

const res = {
    a: {
        b: {
            c: [1,2,3]
        }
    }
}

console.log(getObjectPath(res, 'a.b.c[1]'));