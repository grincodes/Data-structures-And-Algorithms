/**
 * Question 26 :
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

//my solution : 48 , 62 memory
// function removeDuplicates(nums: number[]): number {
//     // maintains two pointer
//     // one is a seeker 
//     // the other holds value for comparism
//     let L = 0
//     let R = 1
//     let n = nums.length
//     if(n<2) return n
    
//     while(R< n){
//         if(nums[L] ==nums[R]){
//             R++
//         }
//         else {
//              L++
//              nums[L] = nums[R]  
//         }
//     }
    

    
//     let s = new Set(nums)
//     return s.size
// };

function removeDuplicates(nums: number[]): number {
    // maintains two pointer
    // one is a seeker 
    // the other holds value for comparism
    let L = 0
    let R = 1
    let n = nums.length
    if(n<2) return n
    
    while(R< n){
        if(nums[L] ==nums[R]){
            R++
        }
        else {
             L++
             nums[L] = nums[R]  
        }
    }
    
    return L+ 1
    
};


/**
 * 
 * Question 80
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * 
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */


function removeDuplicates(nums: number[]): number {
    // maintains two pointer
    // one is a seeker 
    // the other holds value for comparism
    let L = 0
    let R = 1
    let n = nums.length
    if(n<3) return n
    let c = 0
    
    while(R< n){
        if(nums[L] !=nums[R]){
            c =0
             L++
             nums[L] = nums[R] 
           }
        else if(nums[L] ==nums[R] && c <1){
            c++
            nums[++L] = nums[R]
        }
        R++
    }
    
    return L+ 1
    
};
