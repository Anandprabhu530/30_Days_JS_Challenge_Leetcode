/*
2667. Create Hello World Function

https://leetcode.com/problems/create-hello-world-function/?gio_link_id=QPDw0kJR

My-Submission: https://leetcode.com/problems/create-hello-world-function/solutions/3496848/js-solution/
*/

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */