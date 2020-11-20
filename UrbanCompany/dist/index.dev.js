// Q1. 
// Input - aaa3[v]d4[a2[r]]f
// Output - aaavvvdarrarrrarrarrf
// // Input : "aaa3[v]d4[a2[r]]f"
// // Output : Output - "aaavvvdarrarrrarrarrf"
// // Brute force
// //
// let removeArrayFromString = (Input) => {
//    let output = "";
//    let blackList = ["[","]"];
//    let lastElementCounter=0;
//    let isSubString=false;
//    let innerString="";
//    function repeat(str,number){
//        console.log(str,number);
//        for(let i=0;i<number;i++){
//            output+= str;
//        }
//    }
//    for(let i=0;i<Input.length;i++){
//        lastElementCounter = Input[i];
//        if(isSubString){
//            innerString += Input[i];
//            if(Input[i]==="[" || Input[i]==="]"){
//                repeat(innerString,lastElementCounter);
//                isSubString = false;
//                innerString="";
//            }
//        }
//        if(Input[i]==="["){
//            isSubString = true;
//        }
//        output += Input[i];
//    }
//    return output;
// }
// console.log(removeArrayFromString("aaa3[v]d4[a2[r]]f"));
// Q2. Two linked lists
// 1 -> 3 -> 5 -> 6
// 2 -> 4 -> 8
// 1 -> 2 -> 3 -> 4 -> 5 ->6 -> 8
// Class LinkedListMerge {
// 	Public Node SortedMerge(Node A,Node B){
// 		if(A==null) return B;
// 		if(B == null) return A;
// 		if(A.data < B.data){
//     A.next = SortedMerge(A.next,B);
//    Return A;
// } else {
//   B.next = SortedMerge(A,B.next);
//   Return B;
// }
// }
// }
"use strict";