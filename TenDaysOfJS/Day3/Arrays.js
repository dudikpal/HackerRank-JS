const result = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] !== nums[i - 1]) {
            return nums[i - 1];
        }
    }
    return nums[0];
}

console.log(result([2, 3, 6, 6, 5]));
console.log(result([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]));