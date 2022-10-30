/**
 * Question  338
 * Counting bits
 * https://leetcode.com/problems/counting-bits/
 */

function countBits(n: number): number[] {
    
    if(n == 0){
        return [0]
    }
    let dp = new Array(n).fill(0)
    let offset =1
    
    for(let i =1; i< n+1  ; i++ ){
        
        if(offset *2 == i){
            offset = i
        }

         dp[i] = 1 + dp[i - offset]
            
        
    }
        
        return dp
    
};

