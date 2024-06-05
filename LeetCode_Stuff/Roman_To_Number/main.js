const romanToInt = str => {
    const RomanMap = new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000]
    ]);
    // IV, IX, XL, XC, CD, CM are Exceptions

    let romanNums = str.split(""); 
    var counter = 0;

    for(let i = 0; i < romanNums.length; i++) {
        var curr = romanNums[i]
        var next = romanNums[i + 1];

        // Checking if we have an exception!
        if(curr === "I" || curr === "X" || curr === "C") {
            if(RomanMap.has(curr.concat(next))) {
                counter += RomanMap.get(curr.concat(next));
                // Skipping the next since its part of the exception
                i++
                continue;
            } else {
                // If the Check fails we just add the normal Case of the Current Letter to the Counter
                counter += RomanMap.get(curr);
                continue;
            }
        // If it isnt a Letter that can have an Exception add it to the Counter 
        } else {
            counter += RomanMap.get(curr);
        }
    }
    return counter;
};