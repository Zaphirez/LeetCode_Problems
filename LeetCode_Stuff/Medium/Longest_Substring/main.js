const lengthOfLongestSubstring = s => {
    let maxlength = 0; 
    let start = 0;
    const charMap = new Map();

    for (let i = 0; i < s.length; ++i) {
        const char = s[i];

        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }

        charMap.set(char, i);
        maxlength = Math.max(maxlength, i - start + 1);
    }
    return maxlength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));