function starPattern(times){
    // outer loop for number of line for row
    for(let row = 0; row < times; row++){
        let str='';
         // inner loop for number of line for col
        for(let col = 1; col <= row; col++){
            str += col;
        }
        console.log(str);
    }
}

starPattern(8);