/*
Q1. A Board(Word) game
Given a board, contain letters and  a set of valid words are given. Player can move up, down. left, right, all diagonals etc, a cell should not be used   twice.
Eg: 
C E V I
K A R T
X N T A
I A N U

Given a set of valid words 

[CAN, CAR, DOG, CAT, TANK, ANT, TAXI, TAR, RAT, TAX, NATIVE]



Given rand pos from the board, output max legth word can be formed from that pos.

Input - 0,0 -> CAN, CAR, CAT
Input - 2,2 -> TANK, TAXI

TANK , TAXI , TAR


If no valid words found return empty!

*/


let blocks = [['C', 'E', 'V', 'I'],
['K', 'A', 'R', 'T'],
['X', 'N', 'T', 'A'],
['I', 'A', 'N', 'U']];

let dictionary = ['CAN', 'CARE', 'DOG', 'CAT', 'TANK', 'ANT', 'TAXI', 'TAR', 'RAT', 'TAX', 'NATIVE']

// variable 
let word = 'CA'; // CA

function createString(row, col) {
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[row];
        for (let j = 0; j < block.length; j++) {
            word += block[col];
        }
    }
    let isWordAvailable = this.findWordInDictionary();
    if (isWordAvailable === 0) {
        return alert('words not found in dictionary');
    }
    return isWordAvailable;
}

let findWordInDictionary = () => {
    let maxLengthWord = 0;   // default 
    //iterating dictionary
    for (let i = 0; i < dictionary.length; i++) {
        let str = dictionary[i]; // CAN , CANE 
        if (str.includes(word) && maxLengthWord === 0) { // CA 
            maxLengthWord = str.length;
        }
        if (str.includes(word) && str.length > maxLengthWord) { // CAN && 4 (CANT)
            maxLengthWord = str.length; // 4
        }
    }
    return maxLengthWord;
}
// Worst Time Complexity = O(n*n);
console.log(findWordInDictionary());

