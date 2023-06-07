/*

2649. Nested Array Generator

https://leetcode.com/problems/nested-array-generator/description/?gio_link_id=JoOOVj1o

My-Submission: https://leetcode.com/problems/nested-array-generator/solutions/3609994/easy-js-solution/

*/

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    if(!Array.isArray(arr)) {
        yield arr
        return
    }

    for(let i = 0; i < arr.length; i++) {
        yield* inorderTraversal(arr[i])
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */