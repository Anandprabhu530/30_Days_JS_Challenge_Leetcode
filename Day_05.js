//2634. Filter Elements from Array

//https://leetcode.com/problems/filter-elements-from-array/description/?gio_link_id=a9a5VZr9

//My-Submission: https://leetcode.com/problems/filter-elements-from-array/solutions/3504596/easy-js-solution/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fun) {
    const ans = [];
    for(let i=0;i<arr.length;i++){
       if(fun(arr[i],i)){
           ans.push(arr[i])
       }
    }
    return ans
};