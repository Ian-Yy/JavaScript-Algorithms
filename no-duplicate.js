/*
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
Create a function that transforms an array into a set.

Examples
noDuplicate([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

noDuplicate([4, 4, 4, 4]) ➞ [4]

noDuplicate([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

Notes
Note: For this question, output an array, not a set. These are two distinctly different data structures in Javascript (although they can be converted from one to the other).

Note: After completing the solution run ```npm run no-duplicate-test``` to check if your solution passes all the tests

source: eadabit.com
*/

function noDuplicate(arr) {
  // Do not change anything above this line.
  // Write your code here.
  return [...new Set(arr)];
}
// Do not change anything below this line.

module.exports = noDuplicate;
