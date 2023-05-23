/*

2633. Convert Object to JSON String

https://leetcode.com/problems/convert-object-to-json-string/description/?gio_link_id=GPnkNmWo

My-Submission: https://leetcode.com/problems/convert-object-to-json-string/solutions/3554863/easy-js-solution/

*/

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
  if (object === null) {
    return 'null';
  }

  if (Array.isArray(object)) {
    const elements = object.map((element) => jsonStringify(element));
    return `[${elements.join(',')}]`;
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${keyValuePairs.join(',')}}`;
  }

  if (typeof object === 'string') {
    return `"${object}"`;
  }

  return String(object);
};