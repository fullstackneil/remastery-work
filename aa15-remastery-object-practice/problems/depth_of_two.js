
/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const depthOfTwo = (obj) => {
    const result = [];

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            for (const nestedKey in obj[key]) {
                if (typeof obj[key][nestedKey] !== 'object' || obj[key][nestedKey]) {
                    result.push(obj[key][nestedKey]);
                }
            }
        }
    }

    return result;
}

// Function to get all values at any given depth
const anyDepthBonus = (obj, depth) => {
    const result = [];

    const helper = (currentObj, currentDepth) => {
        if (currentDepth === depth) {
            for (const key in currentObj) {
                if (typeof currentObj[key] !== 'object' || currentObj[key] === null) {
                    result.push(currentObj[key]);
                }
            }
            return;
        }

        for (const key in currentObj) {
            if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                helper(currentObj[key], currentDepth + 1);
            }
        }
    }

    helper(obj, 1);
    return result;
}


// console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
// console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

/*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }
