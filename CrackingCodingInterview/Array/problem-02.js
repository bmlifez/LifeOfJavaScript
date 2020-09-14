// 1. Find Longest span with the same sum in two binary arrays

let s1 = [1, 0, 0, 0, 0, 1];
let s2 = [0, 0, 0, 1, 0, 0];

function findLongestSpanInBinaryArrays(ar1, ar2) {
    let maxLength = 0;
    for(let i=0;i<6;i++){
        let sum1 = 0;
        let sum2 = 0;
        for(let j=0;j<6;j++){
            sum1 += ar1[j];
            sum2 += ar2[j];
            if(sum1 == sum2){
                let len = j-i+1;
                if(len>maxLength){
                    maxLength=len;
                }
            }
        }
    }
    return maxLength;
}

console.log(findLongestSpanInBinaryArrays(s1,s2));