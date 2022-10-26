"use strict";
function factorial(num) {
    //base
    if (num == 0 || num == 1) {
        return 1;
    }
    let base = num;
    base *= factorial(num - 1);
    return base;
}
console.log(factorial(3));
// using divide and conquer
function sumOfArr(arr) {
    if (arr.length == 0) {
        return 0;
    }
    //using array destructuring
    let [head, ...tail] = arr;
    let total = head + sumOfArr(tail);
    return total;
}
console.log(sumOfArr([2, 3, 4, 5, 6]));
// cool note haskel dont have loops so you need to use recursion
// sort binarysearch with recurssion
function binarySearchRecurssion(list, item) {
    if (list.length == 0 || (list.length == 1 && list[0] != item)) {
        return null;
    }
    let mid = list.length - 1;
    let guess = list[mid];
    let newList = [];
    if (guess == item) {
        return mid;
    }
    else if (guess > item) {
        newList = list.slice(0, mid);
    }
    else {
        newList = list.slice(mid, list.length);
    }
    let res = binarySearchRecurssion(newList, item);
    return res;
}
let _list = [1, 4, 7, 9];
console.log(binarySearchRecurssion(_list, 7));
