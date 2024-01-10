function sortedFrequency(arr, num) {
    let first = firstOccurrence(arr, num);
    if (first === -1) return first;
    let last = lastOccurrence(arr, num);
    return last - first + 1;
}

function firstOccurrence(arr, num) {
    let idx = -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            idx = mid;
            end = mid - 1;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return idx;
}

function lastOccurrence(arr, num) {
    let idx = -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            idx = mid;
            start = mid + 1;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return idx;
}

// The sortedFrequency function is designed to find the frequency of a given number (num) in a sorted array (arr).

// sortedFrequency function: This function uses two helper functions, firstOccurrence and lastOccurrence, to find the first and last occurrence of the target number in the array. The main function then returns the difference between the indices of the last and first occurrence (plus 1) as the frequency of the target number. If the target number is not found (firstOccurrence returns -1), it returns -1.

// firstOccurrence function: This function performs a binary search to find the first occurrence of num in the array. It maintains a variable idx to keep track of the current index of num. During the search, if num is found at the middle index, it updates idx to the middle index and moves the end pointer to the left of the middle index to continue searching for earlier occurrences of num. If num is greater than the middle element, it moves the start pointer to the right of the middle index. If num is less than the middle element, it moves the end pointer to the left of the middle index. The function returns idx, which is the index of the first occurrence of num.

// lastOccurrence function: This function is similar to firstOccurrence, but it's designed to find the last occurrence of num. When num is found at the middle index, it updates idx to the middle index and moves the start pointer to the right of the middle index to continue searching for later occurrences of num.

// The time complexity of these functions is O(log N) because they use binary search, which divides the array in half in each iteration of the loop. This makes them efficient for large arrays.

module.exports = sortedFrequency