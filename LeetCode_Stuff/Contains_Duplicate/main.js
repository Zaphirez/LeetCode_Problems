const containsDuplicate = nums =>{
    nums = nums.sort((a,b) => a - b);
    var last
    for (e of nums) {
        if (e != last){
            last = e;
            continue;
        } else {
            return true;
        }
    }
    return false
}