/*

2621. Sleep

https://leetcode.com/problems/sleep/description/?gio_link_id=5Rp2Wmzo

My-Submission: https://leetcode.com/problems/sleep/solutions/3527919/easy-js-solution/

*/

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(resolve => {
    setTimeout(resolve, millis);
  });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */