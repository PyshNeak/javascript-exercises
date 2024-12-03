const sumAll = function(x, y) {
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }
    let lower = x < y ? x : y;
    let higher = x >= y ? x : y;
    lower--;
    let xsum = lower*(lower+1)/2;
    let ysum = higher*(higher+1)/2;
    return ysum-xsum;
};

// Do not edit below this line
module.exports = sumAll;
