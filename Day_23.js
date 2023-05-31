/*

2619. Array Prototype Last

https://leetcode.com/problems/array-prototype-last/

My-Submission: https://leetcode.com/problems/array-prototype-last/solutions/3583019/easy-js-solution/

*/

Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
}