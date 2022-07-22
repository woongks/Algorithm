# Things To Remember

<br />

1. Most primitives (booleans, numbers, undefined, null) have constant space. Strings require O(n) space.

<br />

2. Reference types are generally O(n) ( n is length for arrays number of keys for objects).

<br />

3. Objects are unordered, key-value pairs.

<br />

4. when to use objects

- when you don't need order
- when you need fast access/ insertion and removal

<br />

5. Big O of Objects

- Insertion: O(1)
- Removal: O(1)
- Searching: O(n) (for certain value)
- Access: O(1)

<br />

6. Objects are an excellent choice when you don't need any ordering.

<br />

7. Big O of Object Methods

- Object.keys: O(n)
- Object.values: O(n)
- Object.entries: O(n)
- hasOwnProperty: O(1)

<br />

8. Arrays are ordered lists.

<br />

9. When to use arrays.

- When you need order
- when you need fast access/ insertion and removal (sort of)

<br />

10. Big O of Arrays

- insertion: depends
- removal: depends
- searching: O(n)
- access: O(1)

<br />

11. Big O of Array Operations

- push: O(1)
- pop: O(1)
- shift: O(n)
- unshift: O(n)
- concat: O(n)
- slice: O(n)
- splice: O(n)
- sort: O(n log n)
- forEach/map/filter/reduce/etc.: O(n)
