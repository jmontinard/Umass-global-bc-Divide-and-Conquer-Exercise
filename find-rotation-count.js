function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // check if mid is pivot
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else {
            if (arr[start] <= arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return 0;
}



// The findRotationCount function is designed to find the number of times a sorted array has been rotated.

// This function uses a binary search approach to find the pivot point (the point of rotation) in the array. The pivot point is the only point in a rotated array where the next number is less than the current one.


// The function starts with two pointers, start and end, at the beginning and end of the array, respectively.

// It enters a while loop that continues until start is less than or equal to end.

// In each iteration of the loop, it calculates the middle index (mid) of the current range.

// It then checks if the element at mid is greater than the element at mid + 1. If it is, it means mid is the pivot point and the array has been rotated mid + 1 times. So it returns mid + 1.

// If mid is not the pivot point, it checks if the element at start is less than or equal to the element at mid. If it is, it means the left half of the range is sorted and the pivot point is in the right half. So it moves the start pointer to mid + 1.

// If the element at start is greater than the element at mid, it means the pivot point is in the left half. So it moves the end pointer to mid - 1.

// The loop continues until it finds the pivot point or until start is greater than end.

// If it doesn't find a pivot point (which means the array is not rotated), it returns 0.

// This function has a time complexity of O(log N) because it uses binary search, which halves the search space in each step. This makes it efficient for large arrays.


module.exports = findRotationCount