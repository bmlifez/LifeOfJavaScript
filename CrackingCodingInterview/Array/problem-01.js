// Question : Given an array of distinct integer values , count the number of pair which
// have difference k 

// example: k=2 , Array/Input = [1,7,5,9,2,12,3] have four pairs (1,3)(3,5)(5,7)(7,9).

// 1. Naive Approach

function findNumberOfPair(inputArray,difference){
    let result = [];
    for(let i=0;i<=inputArray.length;i++){
        for(let j=i+1;j<=inputArray.length;j++){
            let greater;
            let smaller;
            if(inputArray[j]>inputArray[i]){
                greater = inputArray[j];
                smaller = inputArray[i];
            } else {
                greater = inputArray[i];
                smaller = inputArray[j];
            }
            if(greater-smaller==difference){
                let subArray = [];
                subArray.push(smaller,greater);
                result.push(subArray);
            }
        }
    }
    return result;
}

console.log(findNumberOfPair([1,7,5,9,2,12,3],2));