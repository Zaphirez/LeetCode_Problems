const numDecodings = (s) => {
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (!s || s[0] === '0') {
        return 0;
    }

    let results = [];

    const decodeSingle = (char) => {
        let num = parseInt(char, 10);
        if (num >= 1 && num <= 26) {
            return ABC[num - 1];
        }
        return null;
    };

    const decodeDouble = (str) => {
        let num = parseInt(str, 10);
        if (num >= 10 && num <= 26) {
            return ABC[num - 1];
        }
        return null;
    };

    // Decode single digits
    let singleDecodings = [];
    for (let i = 0; i < s.length; i++) {
        let decodedChar = decodeSingle(s[i]);
        if (decodedChar) {
            singleDecodings.push(decodedChar);
        } else {
            return "error"; // Invalid single digit
        }
    }
    results.push(singleDecodings);

    // Decode double digits
    let doubleDecodings = [];
    for (let i = 0; i < s.length - 1; i++) {
        let decodedChar = decodeDouble(s.substr(i, 2));
        if (decodedChar) {
            doubleDecodings.push(decodedChar);
        }
    }
    if (doubleDecodings.length > 0) {
        results.push(doubleDecodings);
    }

    return results.length;
};

// Test cases
console.log(numDecodings("12")); // [['A', 'B'], ['L']]
console.log(numDecodings("226")); // [['B', 'B', 'F'], ['V', 'F']]
console.log(numDecodings("06")); // 0


console.log(numDecodings("123"));