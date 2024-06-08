const majorityElement = nums => {
    let candidate = null;
    let count = 0;

    for(let i =0; i < nums.length; ++i) {
        if (count === 0) {
            candidate = nums[i];
        }
        count += (nums[i] === candidate) ? 1 : -1;
    }

    count = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === candidate) {
            count++;
        }
    }
    if(count > nums.length / 2) {
        return candidate
    }
}