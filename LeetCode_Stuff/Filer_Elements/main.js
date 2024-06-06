const filter = (arr, fn) => {
    let filteredArr = [];
    for(let i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}


const filter_small = (arr, fn) => {
    let filteredArr = [];

    arr.forEach((element, i) => {
        (fn(element, i)) ? filteredArr.push(element) : -1;
    });
    return filteredArr;
}