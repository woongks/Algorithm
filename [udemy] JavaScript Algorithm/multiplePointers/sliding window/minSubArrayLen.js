```
write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passesd to the function. If there isn't one, return 0 instead.
```;

function minSubArrayLen(arr, n) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minimum = Infinity;
  while (left < arr.length) {
    if (sum < n && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= n) {
      minimum = Math.min(minimum, right - left);
      sum -= arr[left];
      left++;
    } else break;
  }
  return minimum == Infinity ? 0 : minimum;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
