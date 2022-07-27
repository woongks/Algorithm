```
write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
```;

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      // compare max because you might go through same repeating chars again.
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

```
iterate through each of the characters in a string.
while iterating, we are going to store each character in an object.
its key will be the string, and the value will be its position in a string (index + 1).
every start of the iteration will be a code checking if the new character is already in the object.
If it exists, we will recount the longest substring from its position.

For example, if we have the word 'applepie', the letter 'p' is repeated in the second and the third index. So the second 'p' should already exist in the object as 'p': 2. 

So the streak will start new from an index of 2. 

```;

console.log(findLongestSubstring("rithmschool"));
