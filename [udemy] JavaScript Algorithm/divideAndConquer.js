```
divide and conquer

this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

this pattern can tremendously decrease time complexity.
``````
given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
```;

// naive solution (Linear search)

function search(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

// refactor (binary search)

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < n) {
      min = middle + 1;
    } else if (currentElement > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
