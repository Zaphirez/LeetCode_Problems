const test1 = [-2,1,-3,4,-1,2,1,-5,4];
const test2 = [1]
const test3 = [5,4,-1,7,8]

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


console.log(maxSubArray(test3))