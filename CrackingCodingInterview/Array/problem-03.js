// 1. Find missin number from sorted Array;

function findMissingNumber(arr) {
    let len = arr.length;
    let sum1 = len + 1;
    let sum2 = len + 2;
    let final = sum1 * sum2 / 2;
    for (let i = 0; i < arr.length; i++) {
        final -= arr[i];
    }
    return final;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8]));