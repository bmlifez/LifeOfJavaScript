/* 
Given n non-negative integers representing an elevation map where 
the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented 
by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
are being trapped.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
  
    while (left < right) {
      if (heights[left] <= heights[right]) {
        if (heights[left] > leftMax) {
          leftMax = heights[left];
        } else {
          totalWater += leftMax - heights[left];
        }
        left++;
      } else {
        if (heights[right] > rightMax) {
          rightMax = heights[right];
        } else {
          totalWater += rightMax - heights[right];
        }
        right--;
      }
    }
  
    return totalWater;
  };