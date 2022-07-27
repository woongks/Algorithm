```
write a function called isSubsequence which takes in two strings and checks whethers the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
```;

function isSubsequence(str1, str2) {
  let pointer = 0;
  let pointer2 = 0;
  while (pointer2 < str2.length) {
    if (str1[pointer] == str2[pointer2]) {
      pointer++;
    }
    pointer2++;
  }
  if (pointer == str1.length) {
    // this can be inside the while loop
    return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
