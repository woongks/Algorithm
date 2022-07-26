```
write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

time: O(n)
```;

function averagePair(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let average = (array[left] + array[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(averagePair([-1, 0, 3, 4, 5, 6], 3));
