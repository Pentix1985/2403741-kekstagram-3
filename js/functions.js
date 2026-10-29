"use strict";

function checkStrLength(str, maxLength) {
    return str.length <= maxLength;
}

function isStrPalindrome(str) {
    const modifiedStr = str.toLowerCase().replaceAll(' ', '');
    return modifiedStr === [...modifiedStr].reverse().join('');
}

function getNumFromValue(value) {
    if ((typeof value) === 'string' && value.trim() === '') {
        return NaN;
    }

    const newStr = [...(typeof value === 'number') ? value.toString() : value].reduce((acc, elem) => {
        return (elem.trim() !== '' && !Number.isNaN(Number(elem))) ? acc + elem : acc;
    }, '')

    return newStr.length === 0 ? NaN : Number(newStr);
}

console.log(getNumFromValue('2023 год'));
console.log(getNumFromValue('ECMAScript 2022'));
console.log(getNumFromValue('1 кефир, 0.5 батона'));
console.log(getNumFromValue('агент 007'));
console.log(getNumFromValue('а я томат'));

console.log(getNumFromValue(2023));
console.log(getNumFromValue(-1));
console.log(getNumFromValue(1.5));
console.log(getNumFromValue(0));
console.log(getNumFromValue(''));