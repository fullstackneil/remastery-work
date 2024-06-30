/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (sentence) => {
    const frequency = {};
    const allChars = sentence.toLowerCase().split('');

    for (const char of allChars) {
        if (/[a-z]/.test(char)) {
            if (!frequency[char]) {
                frequency[char] = 0;
            }
            frequency[char] += 1;
        }
    }

    let maxChar = '';
    let maxCount = 0;

    for (const char in frequency) {
        if (
            frequency[char] > maxCount ||
            (frequency[char] === maxCount && char < maxChar)
        ) {
            maxChar = char;
            maxCount = frequency[char];
        }
    }

    return maxChar;
}


console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e


/*** Do not change the code after this line ***/

module.exports = {
	countLetters,
};
