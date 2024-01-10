function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If the middle element is less than or equal to x
        if (arr[mid] <= x) {
            // Update floor to the current mid
            floor = arr[mid];
            // Move the start to the right of mid
            start = mid + 1;
        } else {
            // If the middle element is greater than x
            // Move the end to the left of mid
            end = mid - 1;
        }
    }

    return floor;
}

// In this function, we initialize floor to -1 to handle cases where no floor exists (i.e., when all elements in the array are greater than x). We then perform a binary search:

// If the middle element is less than or equal to x, we update floor to the current middle element and move start to the right of mid since there could be larger elements to the right of mid that are still less than or equal to x.
// If the middle element is greater than x, we move end to the left of mid since all elements to the right of mid (including mid) are greater than x.
// The time complexity of this function is O(log N) because we eliminate half of the elements in the array in each iteration of the while loop, similar to a binary search.



module.exports = findFloor