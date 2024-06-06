var isPalindromeForLoop = function(x) {
    let reversed = [];
    const origin = x.toString().split("")
    // loops reversed to push into reversed Array
    for (let i = origin.length - 1; i >= 0; i--) {
        // Checks if the first Item is a Non Number if so it cant be the same reversed
        if (origin[0] === "-") {
            return false;
        } else {
            reversed.push(origin[i])
        }
    }
    // Joins them and compares to check if they are the same
    if(reversed.join() === origin.join()) {
        return true;
    } else {
        return false;
    }
};

// Faster Solution
const isPalindrome = x => {
    return x.toString().split("").reverse().join("") == x
}

