/**
 * Question 11
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.
 */

    function maxArea(height: number[]): number {
    
    // 2 pointer
    // max area=0
    //while L < R
    //if L< R
        //max area > Rindex -Lindex * minHeight(L,R) ?max :  Rindex -Lindex * minHeight(L,R)
        // move L++
    // else 
        ////max area > Rindex -Lindex * minHeight(L,R) ?max :  Rindex -Lindex * minHeight(L,R)
    // move R++
    
    let L = 0
    let R = height.length -1
    let max_area =0
    
    while(L < R){
        
        let area = (R - L) * Math.min(height[L],height[R])
        console.log(`${R} - ${L} * ${Math.min(height[L],height[R])} `, area)
        max_area = Math.max(max_area,area)
        
        height[L] < height[R] ? L++  : R--
        
      
    }
    
    return max_area

};