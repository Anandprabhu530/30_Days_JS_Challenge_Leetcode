//2637. Promise Time Limit

//https://leetcode.com/problems/promise-time-limit/description/?gio_link_id=nombN5Z9

//My-Submission; https://leetcode.com/problems/promise-time-limit/solutions/3531291/easy-js-solution/?orderBy=hot

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args).then(resolve).catch(reject);
    })
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */