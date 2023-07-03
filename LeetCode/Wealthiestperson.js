// find the wealthiest person from a 2d array and return a string with index and amount

function findWealthiestPerson(arr){
    let amount;
    let resultIndex;
    for(let i=0; i<arr.length; i++){
        let currentAmountValue = 0;
        for(let j=0; j<arr[i].length; j++){
            currentAmountValue += arr[i][j];
        }
        if(i===0){
            resultIndex = i;
            amount = currentAmountValue
        } else {
            if(currentAmountValue > amount){
                amount = currentAmountValue
                resultIndex = i;
            }
        }
    }
    return `the wealthiest Person is ${resultIndex+1} with the amount ${amount}`;
}

console.log(findWealthiestPerson([[2,3],[4,9],[11,22],[4,5]]));