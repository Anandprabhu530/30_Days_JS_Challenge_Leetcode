/*

2648. Generate Fibonacci Sequence

https://leetcode.com/problems/generate-fibonacci-sequence/description/?gio_link_id=xo040MEo

My-Submission: https://leetcode.com/problems/generate-fibonacci-sequence/solutions/3604751/easy-js-solution/

*/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev1 = 0;
    let prev2 = 1;
    while(true) {
        yield prev1;
        const temp = prev1;
        prev1 = prev2;
        prev2 += temp;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */