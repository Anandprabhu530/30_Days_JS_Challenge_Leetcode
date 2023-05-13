/*

2623. Memoize

https://leetcode.com/problems/memoize/description/?gio_link_id=nRbADVd9

My-Submission: https://leetcode.com/problems/memoize/solutions/3518637/easy-js-solution/

*/

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const temp = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in temp) {
      return temp[key];
    }
    const out = fn(...args);
    temp[key] = out;
    return out;
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */