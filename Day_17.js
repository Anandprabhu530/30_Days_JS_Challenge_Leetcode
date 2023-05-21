//2628. JSON Deep Equal

//https://leetcode.com/problems/json-deep-equal/description/?gio_link_id=4PKqJ0z9

//My-Submission: https://leetcode.com/problems/json-deep-equal/solutions/3547489/easy-js-solution/

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
function helper(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value))
        return Object.fromEntries(Object.entries(value).sort());
    else
        return value;
}

var areDeeplyEqual = function(o1, o2) {
    const stringifiedO1 = JSON.stringify(o1, helper);
    const stringifiedO2 = JSON.stringify(o2, helper);

    return stringifiedO1 === stringifiedO2;
};