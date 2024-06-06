const chunk = (arr, size) => {
    if(size <= 0) return [];
    const returnedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        returnedArr.push(arr.slice(i, i + size));
    }
    return returnedArr;
};