"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @returns true if the input is string is a palindrome
 */
function isPalindrome(input) {
    return input === input.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
process.env.User;
