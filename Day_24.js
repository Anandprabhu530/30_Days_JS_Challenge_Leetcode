/*

2631. Group By

https://leetcode.com/problems/group-by/description/?gio_link_id=WoM5GZKo

My-Submissions: https://leetcode.com/problems/group-by/solutions/3586629/easy-js-solution/

*/

Array.prototype.groupBy = function(fn) {
  const returnObject = {};
  for (const item of this) {
    const key = fn(item);
    if (key in returnObject) {
      returnObject[key].push(item);
    } else {
      returnObject[key] = [item];
    }
  }
  return returnObject;
};