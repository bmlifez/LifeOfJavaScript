// Question. find minimum difference between elements in an unsorted Array

// 1. Naive approach run a two for loop over Array( n *n time complexity)

// 2. Optimized run a for loop on sorted array (n log n )

function findMinimumDifference(arr) {
    let sortedArray = arr.sort((a, b) => {
        return a - b;
    })
    let min_diff = 10000000000;
    for (let i = 0; i < sortedArray.length; i++) {
        let currentDiff = sortedArray[i + 1] - sortedArray[i];
        if (currentDiff < min_diff) {
            min_diff = currentDiff;
        }
    }
    return min_diff;
}

console.log(findMinimumDifference([1, 5, 9, 18]));