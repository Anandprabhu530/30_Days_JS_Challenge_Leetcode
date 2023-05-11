/*

2629. Function Composition

https://leetcode.com/problems/function-composition/description/?gio_link_id=4PY7wZM9

My-Submission: https://leetcode.com/problems/function-composition/solutions/3513183/easy-js-solution/

*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let ans = x;
        for(let i=functions.length-1;i>=0;i--){
            const current_function = functions[i];
            ans = current_function(ans);
        }
        return ans;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */