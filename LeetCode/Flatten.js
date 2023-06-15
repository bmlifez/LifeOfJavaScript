
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
	const result = [];

	function flatten(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && depth < n) {
            flatten(arr[i], depth + 1);
          } else {
            result.push(arr[i]);
          }
        }
    }
    flatten(arr, 0);
    return result;
};



function flattenArrayByDepth(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && n > 0) {
        const flattenedSubarray = flattenArrayByDepth(arr[i], n - 1);
        arr.splice(i, 1, ...flattenedSubarray);
        i += flattenedSubarray.length - 1;
      }
    }
    console.log(arr);
    return arr;
}
  
flattenArrayByDepth([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, [15, 16, 17, [18, 19, 20]]]], 2);
