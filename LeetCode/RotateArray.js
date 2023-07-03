var rotate = function(nums, k) {
    function reverse(nums, start, end) {
      while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
      }
    }
    const n = nums.length;
    k = k % n;
  
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
  };