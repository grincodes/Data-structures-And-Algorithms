/**
 * Question 39
 * https://leetcode.com/problems/combination-sum/
 */

function combinationSum(candidates: number[], target: number): number[][] {
    const res:number[][] = [];
    const dfs = (arr:number[],sum:number = 0,index = 0)=>{
        if(sum===target){
            res.push(arr);
            return;
        }
        if(sum>target || index>=candidates.length)
            return;
        dfs([...arr, candidates[index]], sum+candidates[index],index);
        dfs([...arr],sum,index+1);
    }

    dfs([]);
    return res;
};


