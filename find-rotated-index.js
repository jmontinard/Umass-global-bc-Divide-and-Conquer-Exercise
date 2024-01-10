function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot]) {
        return binarySearch(arr, num, 0, pivot);
    }
    return binarySearch(arr, num, pivot + 1, arr.length - 1);
}

function binarySearch(arr, num, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) return mid;
        else if (arr[start] <= arr[mid]) start = mid + 1;
        else end = mid - 1;
    }
}

// The findRotatedIndex function is designed to find the index of a given number (num) in a rotated sorted array (arr).

// findRotatedIndex function: This function first finds the pivot (the highest element) in the rotated array using the findPivot helper function. If the target number is between the first element and the pivot, it performs a binary search in the left half of the array. Otherwise, it performs a binary search in the right half of the array. The binary search is done by the binarySearch helper function.

// binarySearch function: This function performs a binary search in the array within the range specified by start and end. If num is found at the middle index, it returns the middle index. If num is less than the middle element, it moves the end pointer to the left of the middle index. If num is greater than the middle element, it moves the start pointer to the right of the middle index. If num is not found, it returns -1.

// findPivot function: This function finds the pivot (the highest element) in the rotated array. If the array has only one element or is sorted in ascending order (not rotated), it returns 0. It uses a binary search approach where if the middle element is greater than the next element, it returns the middle index as the pivot. If the first element is less than or equal to the middle element, it moves the start pointer to the right of the middle index, meaning the pivot is in the right half. Otherwise, it moves the end pointer to the left of the middle index, meaning the pivot is in the left half.

// Both functions have a time complexity of O(log N) because they use binary search, which divides the array in half in each iteration of the loop. This makes them efficient for large arrays.

module.exports = findRotatedIndex