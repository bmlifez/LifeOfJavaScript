function evenDigit(arr){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        if(Math.floor(Math.log10(arr[i])+1)%2 === 0){
            result += 1;
        }
    }
    return result;
}
console.log(evenDigit([2,4234,92,178,18221122,22]));  // Time - Big(o(n)), Space - o(1)