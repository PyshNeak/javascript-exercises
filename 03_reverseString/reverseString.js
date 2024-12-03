const reverseString = function(string) {
    stringArr = string.split('');
    ret = ""
    for (let i = stringArr.length - 1; i >= 0; i--) {
        ret += stringArr[i];
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
