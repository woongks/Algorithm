```
implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
```;

// using while

function countUniqueValues(arr) {
  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return arr.length ? left + 1 : 0;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// using for

function countUniqueValues2(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.length ? i + 1 : 0;
}

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
