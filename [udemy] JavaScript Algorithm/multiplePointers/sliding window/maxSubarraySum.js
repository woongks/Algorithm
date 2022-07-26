```
write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
```;

// naive solution

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// sliding window

function maxSubarraySum2(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let temp = 0;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(max, temp);
  }
  return max;
}
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function maxSubarraySum3(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  let max = 0;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += arr[i];
    max = temp;
  }
  for (let i = 1; i <= arr.length - n; i++) {
    temp = temp - arr[i - 1] + arr[n + i - 1];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum3([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
