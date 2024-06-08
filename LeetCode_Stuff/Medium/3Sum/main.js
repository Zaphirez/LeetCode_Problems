const threeSum = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; ++i) {
     for (let j = i+1; j <  arr.length; ++j) {
        for (let k = j+1; k < arr.length; ++k) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                newArr.push([arr[i], arr[j], arr[k]].sort((a,b) => a - b));
            } else {
                continue;
            }
        }
     }
    }

    // Sorting the Array either by length or by the first element of the Array
    newArr.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        }

        for (let i = 0; i < a.length; ++i) {
            if (a[i]!= b[i]) {
                return a[i] - b[i];
            }
        }
        return 0;
    });

    // Check the Array for Duplicates
    function removeDuplicates(arr) {
        const uniqueSet = new Set();
        const uniqueArr = [];

        for (let i = 0; i < arr.length; ++i) {
            const curr = arr[i];
            const key = JSON.stringify(curr);

            if (!uniqueSet.has(key)) {
                uniqueSet.add(key);
                uniqueArr.push(curr);
            }
        }
        return uniqueArr;
    }
    return removeDuplicates(newArr);
};

// this is obv a brute force solution i may get back and attempt to use some algorithms or improve the code at some point, for now it works like it is and im happy