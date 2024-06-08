var once = function(fn) {
    let executed = false; // Keep track of the calls of fn
    return function(...args){
        if(!executed) {
            executed = true;
            return fn(...args); // Call fn and return its results
        } else {
            return undefined; // Subsequent calls return undefined
        }
    }
};