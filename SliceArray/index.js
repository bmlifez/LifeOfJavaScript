/**
 * 
 * @param {*} input : array 
 * @param {*} number : integer
 */
function splitArrayByThree(input, number){
    if(!Array.isArray(input) || typeof number !== 'number'){
        return 'Invalid Input';
    }
    const results = [];
    for(let i=0; i<input.length; i += number){
        results.push(input.slice(i, i + number))
    }
    return results;
}

console.log(splitArrayByThree([1,2,3,4,5,6,7,8], 2));