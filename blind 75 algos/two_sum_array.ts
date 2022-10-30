/**
 * https://leetcode.com/problems/two-sum/
 * Question 1 - two sum
 */

function twoSum(nums: number[], target: number): number[] {

    let prev = new Map()
    let res:number[] = []
    
     for(let i =0; i < nums.length ; i++){
        let diff = target - nums[i] 
         if(prev.has(diff)){
             res =  [prev.get(diff),i]
            }
            let n = nums[i]
            prev.set(n,i)
        
    }
    
    return res
    
    
};