/*

2635. Apply Transform Over Each Element in Array

https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?gio_link_id=noqbNOv9

My-Solution: https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/3499245/easy-and-fast-javascript-solution/

*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++){
        arr[i] = fn(arr[i],i);
    }
    return arr;
};