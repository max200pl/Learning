# Main info of Regular Expression

## Table of contents

- [Main info of Regular Expression](#main-info-of-regular-expression)
  - [Table of contents](#table-of-contents)
    - [Introduction](#introduction)
    - [Regular Expressions](#regular-expressions)
    - [Regular Expression Methods](#regular-expression-methods)
    - [Regular Expression Flags](#regular-expression-flags)
    - [Regular Expression Patterns](#regular-expression-patterns)

### Introduction

Regular expressions are a powerful tool for matching various patterns in text. This article describes the syntax of regular expressions in JavaScript.

### Regular Expressions

A regular expression is a type of object. It can either be constructed with the `RegExp` constructor or written as a literal value by enclosing a pattern in forward slash (`/`) characters.

```javascript
let re = /ab+c/;
let re = new RegExp('ab+c');
```

### Regular Expression Methods

Regular expressions in JavaScript support the following methods:

- `exec` - Returns the matched text. If the pattern does not match, it returns `null`.
- `test` - Returns a boolean indicating the presence of the pattern in the string.
- `match` - Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.
- `search` - Returns the index of the first match. If no match is found, it returns `-1`.
- `replace` - Returns a new string with some or all matches of a pattern.
- `split` - Uses a regular expression or a fixed string to break a string into an array of substrings.
- `matchAll` - Returns an iterator containing all of the matches, including capturing groups.
- `toString` - Returns a string representing the regular expression.
- `Symbol.match` - Called by the `String.prototype.match` method.
- `Symbol.replace` - Called by the `String.prototype.replace` method.
- `Symbol.search` - Called by the `String.prototype.search` method.
- `Symbol.split` - Called by the `String.prototype.split` method.
- `Symbol.matchAll` - Called by the `String.prototype.matchAll` method.
- `Symbol.replace` - Called by the `String.prototype.replace` method.

### Regular Expression Flags

Regular expressions in JavaScript support the following flags:

- `g` - Global search. It searches for all matches in the input string. Without the `g` flag, the search stops after the first match.
- `i` - Case-insensitive search. If the `i` flag is used, the regular expression is case-insensitive (ignores case).
- `m` - Multi-line search. If the `m` flag is used, the `^` and `$` tokens match the start or end of a line, respectively, in addition to the start or end of the string.
- `s` - Allows `.` to match newline characters.
- `u` - "unicode"; treat a pattern as a sequence of unicode code points.
- `y` - "sticky"; matches only from the index indicated by the `lastIndex` property of this regular expression in the target string.
- `d` - "dotAll"; allows `.` to match newline characters.
- `x` - "extended"; ignore whitespace and comments in the pattern.
- `A` - "any"; allows `.` to match any character, including line terminators.
- `U` - "ungreedy"; inverts the greediness of quantifiers.
- `X` - "freeSpacing"; ignore whitespace and comments in the pattern.
- `J` - "dotAll"; allows `.` to match newline characters.
- `S` - "unicode"; treat a pattern as a sequence of unicode code points.
- `T` - "sticky"; matches only from the index indicated by the `lastIndex` property of this regular expression in the target string.
- `D` - "dotAll"; allows `.` to match newline characters.
- `M` - "multiLine"; if the `m` flag is used, the `^` and `$` tokens match the start or end of a line, respectively, in addition to the start or end of the string.
- `U` - "ungreedy"; inverts the greediness of quantifiers.
- `X` - "freeSpacing"; ignore whitespace and comments in the pattern.

### Regular Expression Patterns

Regular expressions in JavaScript support the following patterns:

- `^` - Matches the beginning of input. If the `m` flag is used, it also matches immediately after a line break character.
- `$` - Matches the end of input. If the `m` flag is used, it also matches immediately before a line break character.
- `*` - Matches the preceding item 0 or more times.
- `+` - Matches the preceding item 1 or more times.
- `?` - Matches the preceding item 0 or 1 time.
- `.` - Matches any single character except the newline character.
- `(x)` - Matches `x` and remembers the match. These are called capturing groups.
- `(?:x)` - Matches `x` but does not remember the match. These are called non-capturing groups.
- `x(?=y)` - Matches `x` only if `x` is followed by `y`.
- `x(?!y)` - Matches `x` only if `x` is not followed by `y`.
- `x|y` - Matches either `x` or `y`.
- `{n}` - Matches exactly `n` occurrences of the preceding item.
- `{n,}` - Matches `n` or more occurrences of the preceding item.
- `{n,m}` - Matches at least `n` and at most `m` occurrences of the preceding item.
- `[xyz]` - A character set. Matches any one of the enclosed characters.
- `[^xyz]` - A negated or complemented character set. Matches anything that is not enclosed in the brackets.
- `[a-z]` - A range of characters. Matches any character in the specified range.
- `[^a-z]` - A negated range of characters. Matches any character not in the specified range.
- `\d` - Matches a digit character. Equivalent to `[0-9]`.
- `\D` - Matches a non-digit character. Equivalent to `[^0-9]`.
- `\w` - Matches any word character. Equivalent to `[A-Za-z0-9_]`.
- `\W` - Matches any non-word character. Equivalent to `[^A-Za-z0-9_]`.
- `\s` - Matches a whitespace character. Equivalent to `[\t\n\v\f\r]`.
- `\S` - Matches anything other than a whitespace character. Equivalent to `[^\t\n\v\f\r]`.
- `\b` - Matches a word boundary.
- `\B` - Matches a non-word boundary.
- `\0` - Matches a NUL character.
- `\n` - Matches a new line character.
- `\f` - Matches a form feed character.
- `\r` - Matches a carriage return character.
- `\t` - Matches a tab character.
- `\v` - Matches a vertical tab character.
- `\xxx` - Matches the character with the octal code `xxx`.
- `\xdd` - Matches the character with the hexadecimal code `dd`.
- `\uxxxx` - Matches the Unicode character with the hexadecimal code `xxxx`.
