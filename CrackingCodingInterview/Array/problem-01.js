// Question : Given an array of distinct integer values , count the number of pair which
// have difference k 

// example: k=2 , Array/Input = [1,7,5,9,2,12,3] have four pairs (1,3)(3,5)(5,7)(7,9).

// 1. Naive Approach
function findNumberOfPair(inputArray, difference) {
    let StartTime = performance.now();
    let result = [];
    for (let i = 0; i <= inputArray.length; i++) {
        for (let j = i + 1; j <= inputArray.length; j++) {
            let greater;
            let smaller;
            if (inputArray[j] > inputArray[i]) {
                greater = inputArray[j];
                smaller = inputArray[i];
            } else {
                greater = inputArray[i];
                smaller = inputArray[j];
            }
            if (greater - smaller == difference) {
                let subArray = [];
                subArray.push(smaller, greater);
                result.push(subArray);
            }
        }
    }
    let endTime = performance.now();
    console.log('performance metric', endTime - StartTime);
    return result;
}
// Time complexity = o(n*n)
console.log(findNumberOfPair([1, 7, 5, 9, 2, 12, 3], 2));

function findNumberOfPairHashImplementation(inputArray, difference) {
    let StartTime = performance.now();
    let result = [];
    const hash = new Map();
    for (let i = 0; i < inputArray.length; i++) {
        hash.set(inputArray[i], 1);
    }
    for (let i = 0; i < inputArray.length; i++) {
        let element = inputArray[i] - difference;
        if (element > 0 && hash.has(element)) {
            let subArray = [];
            subArray.push(element, inputArray[i]);
            result.push(subArray);
        }
    }
    let endTime = performance.now();
    console.log('performance metric', endTime - StartTime);
    return result;
}

console.log(findNumberOfPairHashImplementation([1, 7, 5, 9, 2, 12, 3], 3));
// Time complexity = o(n)