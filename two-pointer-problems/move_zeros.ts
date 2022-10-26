/**
 * Question 
 * https://leetcode.com/problems/move-zeroes/
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

/**
 Do not return anything, modify nums in-place instead.
 */



//My solution : 93.79% faster and 52.7% memory
 function moveZeroes(nums: number[]): void {
    

//         // Base : checks if a value is pointing to zero
//         // check if the second pointer points to zero
//         //if yes swap them and move both pointers by 1
//         //if no move second pointer by one and check base
//         move 

    
    let lp = 0;
    let rp =1;
     let temp =0;
    for(let i = 0; i < nums.length -1; i++){
        if(nums[lp] ==0 && nums[rp]==0){
            //move rp by 
            rp ++
        }
        else {
            
            if(nums[lp] ==0 && nums[rp]!=0){
                  //swap values
                temp = nums[lp]
                nums[lp] = nums[rp]
                nums[rp] = temp
            }
          
            
            //move both lp and rp
            rp ++
            lp ++
         
        } 
        
    }
    

};


//45% , 30%
// function moveZeroes(nums: number[]): void {
    
//     let n = nums.length
    
//     if(n < 2) return
 
//     let L = 0
//     let R =1
    
//     while(R<n){
//         if(nums[L] != 0){
//             L++
//             R++
//         }
//         else if(nums[R] ==0){
//             R++
//         }
//         else {
//             let temp = nums[L]
//              nums[L] = nums[R]
//             nums[R] = temp
//         }
//     }  

// };