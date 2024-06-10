const reduce = (nums, fn, init) => {
    for (let i = 0; i < nums.length; ++i) {
        init = fn(init, nums[i]);
    }
    return init;
}

const reduce_small = (nums, fn, init) => {
    nums.forEach((element) => {
        init = fn(init,element);
    })
    return init;
}