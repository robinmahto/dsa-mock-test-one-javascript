/*
Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
a. 1 <= nums.length <= 10^4
b. -2^31 <= nums[i] <= 2^31 - 1
*/

function moveZeros(nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }

    while (left < nums.length) {
        nums[left] = 0;
        left++;
    }
    return nums;
}

// example 1
let nums = [0, 1, 0, 3, 12];
let result = moveZeros(nums);
console.log(result) // output : [1,3,12,0,0]

// example 2
let num = [0];
console.log(moveZeros(num)) // output : [0]