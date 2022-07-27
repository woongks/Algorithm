```
implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

examples:
  areThereDuplicates(1, 2, 3) false
```;

function areThereDuplicates(...nums) {
  const numbers = [...nums];
  numbers.sort();
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] == numbers[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
