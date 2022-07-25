```
write a function called sameFrequency. Given two positive integers, findout if the two numbers have the same frequency digits. Your solution must have the following complexities: Time: O(n)

sample input:
  sameFrequency(182, 281) true
  sameFrequency(34, 13) false
```;

function sameFrequency(num1, num2) {
  let freq1 = {};
  let freq2 = {};
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }
  for (let digit of String(num1)) {
    freq1[digit] = freq1[digit] ? freq1[digit] + 1 : 1;
  }
  for (let digit of String(num2)) {
    freq2[digit] = freq2[digit] ? freq2[digit] + 1 : 1;
  }
  for (let key in freq2) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
