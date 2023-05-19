//2627. Debounce

//https://leetcode.com/problems/debounce/description/?gio_link_id=AovN2Ojo

//My-Submission; https://leetcode.com/problems/debounce/solutions/3541144/easy-js-solution/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args)
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */