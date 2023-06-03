/*

2693. Call Function with Custom Context

https://leetcode.com/problems/call-function-with-custom-context/description/?gio_link_id=39lbqjpP

My-Submission: https://leetcode.com/problems/call-function-with-custom-context/solutions/3593801/easy-js-solution/

*/

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  Object.defineProperty(context, 'fn', {
    value: this,
    enumerable: false,
  });

  return context.fn(...args);
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */