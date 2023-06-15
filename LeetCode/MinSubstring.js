// 1. Solution 1
var minWindow = function (s, t) {
    if (t === s) {
        return t;
    }

    let answer = "";
    let possibleResults = [];
    let tStringHashmap = new Map();

    // Generate hashMap for String T
    for (let i = 0; i < t.length; i++) {
        if (tStringHashmap.has(t[i])) {
            let value = tStringHashmap.get(t[i]);
            tStringHashmap.set(t[i], value + 1);
        } else {
            tStringHashmap.set(t[i], 1);
        }
    }

    // compare string with hashMap Values 
    function isHashMapEqual(str, HashMap) {
        let newSubStringMap = new Map();
        for (let i = 0; i < str.length; i++) {
            if (newSubStringMap.has(str[i])) {
                let value = newSubStringMap.get(str[i]);
                newSubStringMap.set(str[i], value + 1);
            } else {
                newSubStringMap.set(str[i], 1);
            }
        }
        let result = true;
        HashMap.forEach((value, key) => {
            if (!newSubStringMap.has(key) || newSubStringMap.get(key) < value) {
                result = false;
            }
        });
        return result;
    }

    // created an array of possible results 
    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let subStringValue = s.substring(i, j);
            if (isHashMapEqual(subStringValue, tStringHashmap)) {
                possibleResults.push(subStringValue);
            }
        }
    }

    // search for most optimum substring from possible results array by reusing isHashMapEqual function
    function generatePossibleSmallerSubstring(input) {
        let smallerSubSetString = input;
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j <= input.length; j++) {
                let subStringValue = s.substring(i, j);
                if (isHashMapEqual(subStringValue, tStringHashmap) && subStringValue.length < smallerSubSetString.length) {
                    smallerSubSetString = subStringValue;
                }
            }
        }
        return smallerSubSetString;
    }

    // search for most optimum result in possibleResults array
    possibleResults.forEach((response, index) => {
        if (index === 0) {
            answer = response;
        }
        const smallestSubString = generatePossibleSmallerSubstring(response);
        if (smallestSubString.length < answer.length) {
            answer = smallestSubString;
        }
    })
    console.log('answer', answer);
    return answer;
};

// 2. Solution 2
var minWindow = function(s, t) {
    if (t === s) {
        return t;
    }

    let answer = "";
    let tStringHashmap = new Map();

    // Generate hashMap for String T
    for (let i = 0; i < t.length; i++) {
        if (tStringHashmap.has(t[i])) {
            let value = tStringHashmap.get(t[i]);
            tStringHashmap.set(t[i], value + 1);
        } else {
            tStringHashmap.set(t[i], 1);
        }
    }

    let minLength = Infinity;
    let windowCounts = new Map();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // Increment the count for the current character in the window
        let count = windowCounts.get(char) || 0;
        windowCounts.set(char, count + 1);

        // Check if the formed window contains all characters from T
        let formed = true;
        tStringHashmap.forEach((value, key) => {
            if (!windowCounts.has(key) || windowCounts.get(key) < value) {
                formed = false;
            }
        });

        // If the formed window is valid, try to minimize its length
        if (formed) {
            while (left <= right) {
                let currentLength = right - left + 1;
                if (currentLength < minLength) {
                    minLength = currentLength;
                    answer = s.substring(left, right + 1);
                }

                let leftChar = s[left];
                windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
                left++;

                // If removing the leftmost character breaks the validity of the window, stop removing more characters
                if (windowCounts.get(leftChar) < tStringHashmap.get(leftChar)) {
                    break;
                }
            }
        }
    }
    return answer;
};


minWindow("cgklivwehljxrdzpfdqsapogwvjtvbzahjnsejwnuhmomlfsrvmrnczjzjevkdvroiluthhpqtffhlzyglrvorgnalk", "mqfff");
