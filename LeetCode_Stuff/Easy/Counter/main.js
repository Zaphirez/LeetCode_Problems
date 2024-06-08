// First Solution
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Second Attempt to make it shorter
let createCounter = (n) => () => n++;