/**
 * House Robber 1
 * https://leetcode.com/problems/house-robber/
 */

function rob(nums: number[]): number {
     let rob1,rob2,temp
     rob1 = rob2 = temp = 0;
    
   
    //[rob1,rob2,n+rob1,n+rob2, n+(n+rob1)]
    nums.map((n)=>{
       
          temp = Math.max(n+rob1,rob2)
          rob1 = rob2
          rob2 =temp
    })
    
    
    
    return rob2
};