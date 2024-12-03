const removeFromArray = function(arr, ...args) {
    ret = [];
    for (const x of arr) {
        ret.push(x);
        for (const y of args) {
            if (x === y) {
                ret.pop(x);
            }
        }
   }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
