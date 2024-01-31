/**
 * @param input
 * @returns true if the input is string is a palindrome
 */
export function isPalindrome(input: string): boolean {
    return input === input.split('').reverse().join('');
}

// Union type

/**
 * @param input
 * @returns true if the input is string is a palindrome
 */
export function formatCommandLine(input: string | string[]) {
    let line = "";
    if (typeof input === "string") {
        line = input.trim();
    } else {
        line = input.map((x: string) => x.trim()).join(' ');
    }

    return line
}


