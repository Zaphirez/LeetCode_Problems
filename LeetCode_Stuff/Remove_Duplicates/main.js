const removeDuplicates = nums => {
    var k = 1;
    for (let i = 0; i < nums.length; ++i) {
       if(nums[i] !== nums[k - 1]){
        nums[k] = nums[i];
        k++
       }    
    }
    return k;
}