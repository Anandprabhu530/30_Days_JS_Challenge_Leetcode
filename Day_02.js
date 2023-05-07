/*

2620. Counter

https://leetcode.com/problems/counter/description/?gio_link_id=xogkVqBo

My-Submission: https://leetcode.com/problems/counter/solutions/3496857/js-solution/

*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */