var jump = function(nums) {
    var count = 0;
    var hasJump = 0;
    var max = 0;
    for(var i = 0; i < nums.length; i++){
        if(hasJump < i){
            count++;
            hasJump = max;
        }
        max = Math.max(max, nums[i] + i);       
    }
    return count;
    
};