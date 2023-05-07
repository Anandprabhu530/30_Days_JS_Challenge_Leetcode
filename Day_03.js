/*

2665. Counter II

https://leetcode.com/problems/counter-ii/description/?gio_link_id=xRxVYOXo

My-Submission: https://leetcode.com/problems/counter-ii/solutions/3497059/js-proxies/

*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return new Proxy({},{
        get: (target,key) => {
            switch(key){
                case"increment":
                return()=> ++count;
                case"decrement":
                return()=> --count;
                case "reset":
                return()=> count=init;
            }
        }
    })
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */