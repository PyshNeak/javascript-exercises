const palindromes = function (s) {
    const alnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned = s.toLowerCase()
        .split('')
        .filter((char) => alnum.includes(char))
        .join('');
    
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
