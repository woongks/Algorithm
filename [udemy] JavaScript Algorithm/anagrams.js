```
given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed rearranging the letters of another, such as cinema, formed from iceman.
```;

function validAnagram(str1, str2) {
  // make it all lowercase
  // apply a frequency counter
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let letter of str1) {
    freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
    // freqCounter1[letter] ? freqCounter1[letter] += 1 : freqCounter1[letter] = 1 is possible
  }
  for (let letter of str2) {
    freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
  }
  console.log(freqCounter1, freqCounter2);
  for (let key in freqCounter1) {
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
