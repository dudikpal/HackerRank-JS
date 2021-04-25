let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const places = [1, 2, 3, 6, 9, 8, 7, 4];

function clockwise() {
    nums.unshift(nums.pop());
    console.log(nums);
    for (let i = 0; i < places.length; i++) {
        document.querySelector("#btn" + places[i]).innerHTML = nums[i];
        
    }
}