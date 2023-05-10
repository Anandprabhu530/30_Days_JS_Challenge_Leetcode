//2626. Array Reduce Transformation

//https://leetcode.com/problems/array-reduce-transformation/description/?gio_link_id=nPN45jD9

//My-Submission: https://leetcode.com/problems/array-reduce-transformation/solutions/3508385/easy-js-solution/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for(let i=0;i<nums.length;i++){
        init = fn(init, nums[i]);
    }
    return init;
};