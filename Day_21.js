/*

2677. Chunk Array

https://leetcode.com/problems/chunk-array/description/?gio_link_id=YoXvrdGR

My-Submission: https://leetcode.com/problems/chunk-array/solutions/3565214/easy-js-solution/

*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const chunkedArray = [];
  let index = 0;
  
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }
  
  return chunkedArray;
};n