"use strict";
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = high - low;
        let guess = list[mid];
        if (guess == item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
let list = [1, 4, 7, 9];
console.log(binarySearch(list, 7));
