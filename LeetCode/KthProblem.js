var topKFrequent = function(nums, k) {
    let result = [];
    const numsMap = new Map();
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(nums[i])){
            const value = numsMap.get(nums[i]) + 1;
            numsMap.set(nums[i], value);
        } else {
            numsMap.set(nums[i], 1);
        }
    }
    return result;
};

topKFrequent([1,2,2,2,3], 2)