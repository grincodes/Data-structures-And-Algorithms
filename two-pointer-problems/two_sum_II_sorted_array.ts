/**
 * Question
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space
 */


function twoSum(numbers: number[], target: number): number[] {
    
    let lp = 0
    let rp = numbers.length-1
    
    // sum = numbers[lp] + numbers[rp] 
    // if sum < target move lpointer back 
    // if sum> target move rpointer
    
    
    while(lp < rp){
        let sum = numbers[lp] + numbers[rp]
        if(sum == target){
            return [lp+1,rp+1]
         }
        else if(sum < target){
                lp++
                }
        else {
            rp --
        }
                
    }
    
    return [-1,-1]
    
    // for(let i =0 ; i< numbers.length; i++){
    //     sum = numbers[fp] + numbers[lp]
    //     if(sum == target){
    //         break;
    //     }
    //     else if(sum < target){
    //         fp +=1
    //     }
    //     else{
    //         lp-=1
    //     }
    // }
    
    // return [fp+1,lp+1]

};