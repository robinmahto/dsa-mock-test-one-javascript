/*
First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.

*/

function findUniqueStr(str){

   let uniqueChar = new Map();
   for (let i = 0; i < str.length; i++) {
    const char = str[i];
    uniqueChar.set(char, (uniqueChar.get(char) || 0) + 1);
  }

  // find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (uniqueChar.get(char) === 1) {
      return i;
    }
  }

  return -1; 
}

// example 1
let str1 = "leetcode";
console.log(findUniqueStr(str1)); // output : 0

// example 2
let str2 = "loveleetcode";
console.log(findUniqueStr(str2)); // output : 2

// example 3
let str3 = "aabb";
console.log(findUniqueStr(str3)); // output : -1