const maxSubArray = nums => {
    let ans = nums[0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        ans = Math.max(ans, sum);
        if (sum<0) {
            sum = 0;
        }
    }
    return ans;
}