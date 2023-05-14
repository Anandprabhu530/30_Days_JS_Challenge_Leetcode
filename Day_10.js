/*

2632. Curry

https://leetcode.com/problems/curry/description/?gio_link_id=QRekxgjo

My-Submission: https://leetcode.com/problems/curry/solutions/3522168/easy-js-solution/

*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...args) {
        if(args.length >= fn.length){
            return fn(...args)
        }
        return (...nextArgs) => curried(...args,...nextArgs)
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */