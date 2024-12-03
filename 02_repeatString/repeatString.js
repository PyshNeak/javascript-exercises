const repeatString = function(string, times) {
    if (times < 0) {
        return "ERROR";
    }
    ret = "";
    for (; times > 0; times--) {
        ret += string;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
