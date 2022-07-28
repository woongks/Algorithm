def palindrome(str):
  q = [char.lower() for char in str if char.isalpha()]
  st = [char.lower() for char in str if char.isalpha()]
  while q:
    if q.pop(0) != st.pop():
      return False
  return True


print(palindrome("madam I'm adam"))
print(palindrome("madam I am adam"))