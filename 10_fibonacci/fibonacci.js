const fibonacci = function(x) {
    if (x < 0) {
        return 'OOPS';
    }

    // 1, 1, 2, 3, 5, 8
    if (x == 0) {
        return 0;
    } else if (x <= 2) {
        return 1;
    }
    return fibonacci(x-1) + fibonacci(x-2);
};

// Do not edit below this line
module.exports = fibonacci;
