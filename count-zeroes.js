function countZeroes() {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return arr.length - mid;
        } else if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0;
}
// The function uses a binary search method to find the first occurrence of 0 in the array. It starts by setting two pointers, left and right, at the start and end of the array. It continues to check the middle element until left is less than or equal to right. If the middle element is 0 and the element before it is 1 or it's the first element, it means we've found the first occurrence of 0. We then return the number of 0s by subtracting the index of the first 0 from the length of the array. If the middle element is 1, we move the left pointer to the right of the middle element. If the middle element is 0 but it's not the first 0, we move the right pointer to the left of the middle element. If no 0 is found, we return 0.

module.exports = countZeroes