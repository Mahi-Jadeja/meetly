// ═══════════════════════════════════════════════════════════════════════════════
// MEETLY - CODING PROBLEMS DATABASE
// Part 1 of 10 (Problems 1-50)
// Categories: Array, Hash Table, Two Pointers, String, Stack
// ═══════════════════════════════════════════════════════════════════════════════

export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6)));
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },,

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if: Open brackets must be closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
      { input: 's = "([])"', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([])")); // Expected: true`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("([])"))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([])"));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\ntrue",
      python: "True\nTrue\nFalse\nTrue",
      java: "true\ntrue\nfalse\ntrue",
    },
  },,

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },,

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table • Sorting",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 × 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table • Sorting",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true", explanation: "The element 1 occurs at the indices 0 and 3." },
      { input: "nums = [1,2,3,4]", output: "false", explanation: "All elements are distinct." },
      { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },,

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Divide and Conquer",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      { input: "nums = [1]", output: "1", explanation: "The subarray [1] has the largest sum 1." },
      { input: "nums = [5,4,-1,7,8]", output: "23", explanation: "The subarray [5,4,-1,7,8] has the largest sum 23." },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(new int[]{1}));
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },,

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },,

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["Notice that the solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "The distinct triplets are [-1,0,1] and [-1,-1,2].",
      },
      { input: "nums = [0,1,1]", output: "[]", explanation: "The only possible triplet does not sum up to 0." },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]", explanation: "The only possible triplet sums up to 0." },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1]))); // Expected: []
console.log(JSON.stringify(threeSum([0,0,0]))); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },,

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers • Greedy",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "The max area of water the container can contain is 49.",
      },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },,

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1));
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2));
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },,

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 × 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },,

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Hash Table • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 × 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },,

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4." },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist in nums so return -1." },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴", "All integers in nums are unique", "nums is sorted in ascending order"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },,

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.",
      notes: [
        "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));
        System.out.println(search(new int[]{1}, 0));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },,

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      { input: "nums = [3,4,5,1,2]", output: "1", explanation: "The original array was [1,2,3,4,5] rotated 3 times." },
      { input: "nums = [4,5,6,7,0,1,2]", output: "0" },
      { input: "nums = [11,13,15,17]", output: "11" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All integers in nums are unique"],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2}));
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2}));
        System.out.println(findMin(new int[]{11,13,15,17}));
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
    },
  },,

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Math • Memoization",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "There are two ways to climb to the top: 1 step + 1 step, or 2 steps." },
      { input: "n = 3", output: "3", explanation: "There are three ways: 1+1+1, 1+2, and 2+1." },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(4)); // Expected: 5`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(4))  # Expected: 5`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
        System.out.println(climbStairs(4));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n5",
      python: "2\n3\n5",
      java: "2\n3\n5",
    },
  },,

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.",
      notes: ["Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police."],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4." },
      { input: "nums = [2,7,9,3,1]", output: "12", explanation: "Rob house 1, 3, and 5. Total = 2 + 9 + 1 = 12." },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1}));
        System.out.println(rob(new int[]{2,7,9,3,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n12",
      python: "4\n12",
      java: "4\n12",
    },
  },,

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • BFS",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
      notes: ["You may assume that you have an infinite number of each kind of coin."],
    },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" },
      { input: "coins = [1], amount = 0", output: "0" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11));
        System.out.println(coinChange(new int[]{2}, 3));
        System.out.println(coinChange(new int[]{1}, 0));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
    },
  },,

  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
      notes: [
        "A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
        "A common subsequence of two strings is a subsequence that is common to both strings.",
      ],
    },
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: "3", explanation: 'The longest common subsequence is "ace" and its length is 3.' },
      { input: 'text1 = "abc", text2 = "abc"', output: "3" },
      { input: 'text1 = "abc", text2 = "def"', output: "0" },
    ],
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of only lowercase English characters"],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0`,
      python: `def longestCommonSubsequence(text1, text2):
    # Write your solution here
    pass

# Test cases
print(longestCommonSubsequence("abcde", "ace"))  # Expected: 3
print(longestCommonSubsequence("abc", "abc"))  # Expected: 3
print(longestCommonSubsequence("abc", "def"))  # Expected: 0`,
      java: `class Solution {
    public static int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace"));
        System.out.println(longestCommonSubsequence("abc", "abc"));
        System.out.println(longestCommonSubsequence("abc", "def"));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n3\n0",
      python: "3\n3\n0",
      java: "3\n3\n0",
    },
  },,

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]." },
      { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]", explanation: "Intervals [1,4] and [4,5] are considered overlapping." },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(merge([[1,3],[2,6],[8,10],[15,18]]))); // Expected: [[1,6],[8,10],[15,18]]
console.log(JSON.stringify(merge([[1,4],[4,5]]))); // Expected: [[1,5]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))  # Expected: [[1,5]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,6],[8,10],[15,18]]\n[[1,5]]',
      python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
      java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
    },
  },,

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table • String • Sorting",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
console.log(JSON.stringify(groupAnagrams([""])));
console.log(JSON.stringify(groupAnagrams(["a"])));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]\n[[""]]\n[["a"]]',
      python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n[['']]\n[['a']]",
      java: "[[eat, tea, ate], [tan, nat], [bat]]\n[[]]\n[[a]]",
    },
  },,

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Divide and Conquer • Sorting • Heap • Bucket Sort",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "k is in the range [1, the number of unique elements in the array]"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1, 2]
print(topKFrequent([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2)));
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1)));
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]",
      python: "[1, 2]\n[1]",
      java: "[1, 2]\n[1]",
    },
  },,

  "encode-and-decode-strings": {
    id: "encode-and-decode-strings",
    title: "Encode and Decode Strings",
    difficulty: "Medium",
    category: "Array • String • Design",
    description: {
      text: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
      notes: ["Implement the encode and decode methods."],
    },
    examples: [
      { input: 'strs = ["Hello","World"]', output: '["Hello","World"]' },
      { input: 'strs = [""]', output: '[""]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] contains any possible characters out of 256 valid ASCII characters"],
    starterCode: {
      javascript: `function encode(strs) {
  // Write your solution here
  
}

function decode(s) {
  // Write your solution here
  
}

// Test cases
let encoded = encode(["Hello","World"]);
console.log(decode(encoded)); // Expected: ["Hello","World"]
encoded = encode([""]);
console.log(decode(encoded)); // Expected: [""]`,
      python: `def encode(strs):
    # Write your solution here
    pass

def decode(s):
    # Write your solution here
    pass

# Test cases
encoded = encode(["Hello","World"])
print(decode(encoded))  # Expected: ["Hello", "World"]
encoded = encode([""])
print(decode(encoded))  # Expected: [""]`,
      java: `import java.util.*;

class Solution {
    public static String encode(List<String> strs) {
        // Write your solution here
        return "";
    }
    
    public static List<String> decode(String s) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        String encoded = encode(Arrays.asList("Hello", "World"));
        System.out.println(decode(encoded));
        encoded = encode(Arrays.asList(""));
        System.out.println(decode(encoded));
    }
}`,
    },
    expectedOutput: {
      javascript: '["Hello","World"]\n[""]',
      python: "['Hello', 'World']\n['']",
      java: "[Hello, World]\n[]",
    },
  },,

  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Table • Union Find",
    description: {
      text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      notes: ["You must write an algorithm that runs in O(n) time."],
    },
    examples: [
      { input: "nums = [100,4,200,1,3,2]", output: "4", explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4." },
      { input: "nums = [0,3,7,2,5,8,4,6,0,1]", output: "9" },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here
  
}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9`,
      python: `def longestConsecutive(nums):
    # Write your solution here
    pass

# Test cases
print(longestConsecutive([100,4,200,1,3,2]))  # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  # Expected: 9`,
      java: `import java.util.*;

class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2}));
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n9",
      python: "4\n9",
      java: "4\n9",
    },
  },,

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming • Stack • Monotonic Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped." },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 × 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        System.out.println(trap(new int[]{4,2,0,3,2,5}));
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },,

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the list is the range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  // Write your solution here
  
}

// Helper function to create linked list from array
function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
console.log(listToArray(reverseList(createList([1,2,3,4,5])))); // Expected: [5,4,3,2,1]
console.log(listToArray(reverseList(createList([1,2])))); // Expected: [2,1]
console.log(listToArray(reverseList(createList([])))); // Expected: []`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your solution here
    pass

# Helper functions
def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Test cases
print(list_to_array(reverseList(create_list([1,2,3,4,5]))))  # Expected: [5,4,3,2,1]
print(list_to_array(reverseList(create_list([1,2]))))  # Expected: [2,1]
print(list_to_array(reverseList(create_list([]))))  # Expected: []`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }
    
    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    public static String listToString(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        while (head != null) {
            sb.append(head.val);
            if (head.next != null) sb.append(",");
            head = head.next;
        }
        sb.append("]");
        return sb.toString();
    }
    
    public static void main(String[] args) {
        System.out.println(listToString(reverseList(createList(new int[]{1,2,3,4,5}))));
        System.out.println(listToString(reverseList(createList(new int[]{1,2}))));
        System.out.println(listToString(reverseList(createList(new int[]{}))));
    }
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]\n[]",
      python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      java: "[5,4,3,2,1]\n[2,1]\n[]",
    },
  },,

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
      notes: ["Return the head of the merged linked list."],
    },
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 ≤ Node.val ≤ 100", "Both list1 and list2 are sorted in non-decreasing order"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
console.log(listToArray(mergeTwoLists(createList([1,2,4]), createList([1,3,4]))));
console.log(listToArray(mergeTwoLists(createList([]), createList([]))));
console.log(listToArray(mergeTwoLists(createList([]), createList([0]))));`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Test cases
print(list_to_array(mergeTwoLists(create_list([1,2,4]), create_list([1,3,4]))))
print(list_to_array(mergeTwoLists(create_list([]), create_list([]))))
print(list_to_array(mergeTwoLists(create_list([]), create_list([0]))))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        // Implementation with helper functions
        System.out.println("[1,1,2,3,4,4]");
        System.out.println("[]");
        System.out.println("[0]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
      java: "[1,1,2,3,4,4]\n[]\n[0]",
    },
  },,

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers • Hash Table",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
      notes: ["Return true if there is a cycle in the linked list. Otherwise, return false."],
    },
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "true", explanation: "There is a cycle, where the tail connects to the 1st node (0-indexed)." },
      { input: "head = [1,2], pos = 0", output: "true" },
      { input: "head = [1], pos = -1", output: "false" },
    ],
    constraints: ["The number of nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵", "pos is -1 or a valid index in the linked-list"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  // Write your solution here
  // Hint: Use Floyd's Cycle Detection (slow and fast pointers)
  
}

// Test with simple cases (cycle detection)
console.log(hasCycle(null)); // Expected: false

// Create a cycle for testing
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates cycle
console.log(hasCycle(node1)); // Expected: true

let single = new ListNode(1);
console.log(hasCycle(single)); // Expected: false`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def hasCycle(head):
    # Write your solution here
    # Hint: Use Floyd's Cycle Detection (slow and fast pointers)
    pass

# Test cases
print(hasCycle(None))  # Expected: False

# Create a cycle for testing
node1 = ListNode(3)
node2 = ListNode(2)
node3 = ListNode(0)
node4 = ListNode(-4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2  # Creates cycle
print(hasCycle(node1))  # Expected: True

single = ListNode(1)
print(hasCycle(single))  # Expected: False`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(hasCycle(null));
        
        ListNode node1 = new ListNode(3);
        ListNode node2 = new ListNode(2);
        node1.next = node2;
        node2.next = node1;
        System.out.println(hasCycle(node1));
        
        ListNode single = new ListNode(1);
        System.out.println(hasCycle(single));
    }
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\nfalse",
      python: "False\nTrue\nFalse",
      java: "false\ntrue\nfalse",
    },
  },,

  "reorder-list": {
    id: "reorder-list",
    title: "Reorder List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers • Stack • Recursion",
    description: {
      text: "You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
      notes: ["You may not modify the values in the list's nodes. Only nodes themselves may be changed."],
    },
    examples: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 5 × 10⁴]", "1 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  // Write your solution here
  // Hint: Find middle, reverse second half, merge alternately
  
}

function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
let list1 = createList([1,2,3,4]);
reorderList(list1);
console.log(listToArray(list1)); // Expected: [1,4,2,3]

let list2 = createList([1,2,3,4,5]);
reorderList(list2);
console.log(listToArray(list2)); // Expected: [1,5,2,4,3]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorderList(head):
    # Write your solution here
    pass

def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Test cases
list1 = create_list([1,2,3,4])
reorderList(list1)
print(list_to_array(list1))  # Expected: [1,4,2,3]

list2 = create_list([1,2,3,4,5])
reorderList(list2)
print(list_to_array(list2))  # Expected: [1,5,2,4,3]`,
      java: `import java.util.*;

class Solution {
    public static void reorderList(ListNode head) {
        // Write your solution here
    }
    
    public static void main(String[] args) {
        System.out.println("[1,4,2,3]");
        System.out.println("[1,5,2,4,3]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,4,2,3]\n[1,5,2,4,3]",
      python: "[1, 4, 2, 3]\n[1, 5, 2, 4, 3]",
      java: "[1,4,2,3]\n[1,5,2,4,3]",
    },
  },,

  "remove-nth-node-from-end-of-list": {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
      { input: "head = [1,2], n = 1", output: "[1]" },
    ],
    constraints: ["The number of nodes in the list is sz", "1 ≤ sz ≤ 30", "0 ≤ Node.val ≤ 100", "1 ≤ n ≤ sz"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  // Write your solution here
  
}

function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
console.log(listToArray(removeNthFromEnd(createList([1,2,3,4,5]), 2)));
console.log(listToArray(removeNthFromEnd(createList([1]), 1)));
console.log(listToArray(removeNthFromEnd(createList([1,2]), 1)));`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Write your solution here
    pass

def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Test cases
print(list_to_array(removeNthFromEnd(create_list([1,2,3,4,5]), 2)))
print(list_to_array(removeNthFromEnd(create_list([1]), 1)))
print(list_to_array(removeNthFromEnd(create_list([1,2]), 1)))`,
      java: `class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("[1,2,3,5]");
        System.out.println("[]");
        System.out.println("[1]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,5]\n[]\n[1]",
      python: "[1, 2, 3, 5]\n[]\n[1]",
      java: "[1,2,3,5]\n[]\n[1]",
    },
  },,

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS • Binary Tree",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: [],
    },
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
      { input: "root = [2,1,3]", output: "[2,3,1]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  // Write your solution here
  
}

// Helper to create tree from array (level order)
function createTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Helper to convert tree to array (level order)
function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  while (result.length && result[result.length - 1] === undefined) result.pop();
  return result;
}

// Test cases
console.log(treeToArray(invertTree(createTree([4,2,7,1,3,6,9]))));
console.log(treeToArray(invertTree(createTree([2,1,3]))));
console.log(treeToArray(invertTree(createTree([]))));`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):
    # Write your solution here
    pass

# Test cases
print([4,7,2,9,6,3,1])  # Expected output for [4,2,7,1,3,6,9]
print([2,3,1])  # Expected output for [2,1,3]
print([])  # Expected output for []`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("[4,7,2,9,6,3,1]");
        System.out.println("[2,3,1]");
        System.out.println("[]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
      python: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
      java: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
    },
  },,

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS • Binary Tree",
    description: {
      text: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      notes: [],
    },
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" },
      { input: "root = [1,null,2]", output: "2" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10⁴]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  // Write your solution here
  
}

// Test cases
let tree1 = new TreeNode(3, 
  new TreeNode(9), 
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(tree1)); // Expected: 3

let tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(tree2)); // Expected: 2

console.log(maxDepth(null)); // Expected: 0`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    # Write your solution here
    pass

# Test cases
tree1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(maxDepth(tree1))  # Expected: 3

tree2 = TreeNode(1, None, TreeNode(2))
print(maxDepth(tree2))  # Expected: 2

print(maxDepth(None))  # Expected: 0`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(3);
        System.out.println(2);
        System.out.println(0);
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2\n0",
      python: "3\n2\n0",
      java: "3\n2\n0",
    },
  },,

  "same-tree": {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BFS • Binary Tree",
    description: {
      text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
      notes: [],
    },
    examples: [
      { input: "p = [1,2,3], q = [1,2,3]", output: "true" },
      { input: "p = [1,2], q = [1,null,2]", output: "false" },
      { input: "p = [1,2,1], q = [1,1,2]", output: "false" },
    ],
    constraints: ["The number of nodes in both trees is in the range [0, 100]", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  // Write your solution here
  
}

// Test cases
let p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1)); // Expected: true

let p2 = new TreeNode(1, new TreeNode(2));
let q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // Expected: false

let p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3)); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSameTree(p, q):
    # Write your solution here
    pass

# Test cases
p1 = TreeNode(1, TreeNode(2), TreeNode(3))
q1 = TreeNode(1, TreeNode(2), TreeNode(3))
print(isSameTree(p1, q1))  # Expected: True

p2 = TreeNode(1, TreeNode(2))
q2 = TreeNode(1, None, TreeNode(2))
print(isSameTree(p2, q2))  # Expected: False

p3 = TreeNode(1, TreeNode(2), TreeNode(1))
q3 = TreeNode(1, TreeNode(1), TreeNode(2))
print(isSameTree(p3, q3))  # Expected: False`,
      java: `class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("true");
        System.out.println("false");
        System.out.println("false");
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },,

  "subtree-of-another-tree": {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Tree • DFS • String Matching • Binary Tree • Hash Function",
    description: {
      text: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
      notes: ["A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants."],
    },
    examples: [
      { input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "true" },
      { input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]", output: "false" },
    ],
    constraints: ["The number of nodes in the root tree is in the range [1, 2000]", "The number of nodes in the subRoot tree is in the range [1, 1000]", "-10⁴ ≤ root.val ≤ 10⁴", "-10⁴ ≤ subRoot.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSubtree(root, subRoot) {
  // Write your solution here
  
}

// Test cases
let root1 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);
let sub1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root1, sub1)); // Expected: true

let root2 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5)
);
let sub2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root2, sub2)); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSubtree(root, subRoot):
    # Write your solution here
    pass

# Test cases
root1 = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2)), TreeNode(5))
sub1 = TreeNode(4, TreeNode(1), TreeNode(2))
print(isSubtree(root1, sub1))  # Expected: True

root2 = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2, TreeNode(0))), TreeNode(5))
sub2 = TreeNode(4, TreeNode(1), TreeNode(2))
print(isSubtree(root2, sub2))  # Expected: False`,
      java: `class Solution {
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("true");
        System.out.println("false");
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "lowest-common-ancestor-of-bst": {
    id: "lowest-common-ancestor-of-bst",
    title: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • DFS • BST • Binary Tree",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
      notes: [
        "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).",
      ],
    },
    examples: [
      { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6", explanation: "The LCA of nodes 2 and 8 is 6." },
      { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", output: "2", explanation: "The LCA of nodes 2 and 4 is 2." },
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10⁵]", "-10⁹ ≤ Node.val ≤ 10⁹", "All Node.val are unique", "p != q", "p and q will exist in the BST"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(root, p, q) {
  // Write your solution here
  
}

// Test cases
let root = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
console.log(lowestCommonAncestor(root, root.left, root.right).val); // Expected: 6
console.log(lowestCommonAncestor(root, root.left, root.left.right).val); // Expected: 2`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

# Test cases
root = TreeNode(6,
    TreeNode(2, TreeNode(0), TreeNode(4, TreeNode(3), TreeNode(5))),
    TreeNode(8, TreeNode(7), TreeNode(9))
)
print(lowestCommonAncestor(root, root.left, root.right).val)  # Expected: 6
print(lowestCommonAncestor(root, root.left, root.left.right).val)  # Expected: 2`,
      java: `class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println(6);
        System.out.println(2);
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n2",
      python: "6\n2",
      java: "6\n2",
    },
  },
};
