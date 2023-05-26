/*

2625. Flatten Deeply Nested Array

https://leetcode.com/problems/flatten-deeply-nested-array/description/?gio_link_id=rREX6Gm9

My-Submission: https://leetcode.com/problems/flatten-deeply-nested-array/solutions/3565234/easy-js-solution/

*/

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let res = [];
    const flattening = (nums, l) => {
      for (const num of nums) {
        if (Array.isArray(num) && l > 0 && l <= n) {
          flattening(num, l - 1);
        } else {
          res.push(num);
        }
      }
    }

    flattening(arr, n);
    return res;
};