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
  },,

  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • BFS • Binary Tree",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
      notes: [],
    },
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
      { input: "root = [1]", output: "[[1]]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  // Write your solution here
  
}

// Test cases
let tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(JSON.stringify(levelOrder(tree1))); // Expected: [[3],[9,20],[15,7]]

let tree2 = new TreeNode(1);
console.log(JSON.stringify(levelOrder(tree2))); // Expected: [[1]]

console.log(JSON.stringify(levelOrder(null))); // Expected: []`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    # Write your solution here
    pass

# Test cases
tree1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(levelOrder(tree1))  # Expected: [[3],[9,20],[15,7]]

tree2 = TreeNode(1)
print(levelOrder(tree2))  # Expected: [[1]]

print(levelOrder(None))  # Expected: []`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println("[[3],[9,20],[15,7]]");
        System.out.println("[[1]]");
        System.out.println("[]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]\n[[1]]\n[]",
      python: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
      java: "[[3],[9,20],[15,7]]\n[[1]]\n[]",
    },
  },,

  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • DFS • BST • Binary Tree",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      notes: [
        "The left subtree of a node contains only nodes with keys less than the node's key.",
        "The right subtree of a node contains only nodes with keys greater than the node's key.",
        "Both the left and right subtrees must also be binary search trees.",
      ],
    },
    examples: [
      { input: "root = [2,1,3]", output: "true" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false", explanation: "The root node's value is 5 but its right child's value is 4." },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-2³¹ ≤ Node.val ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  // Write your solution here
  
}

// Test cases
let tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Expected: true

let tree2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(tree2)); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    # Write your solution here
    pass

# Test cases
tree1 = TreeNode(2, TreeNode(1), TreeNode(3))
print(isValidBST(tree1))  # Expected: True

tree2 = TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)))
print(isValidBST(tree2))  # Expected: False`,
      java: `class Solution {
    public static boolean isValidBST(TreeNode root) {
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

  "kth-smallest-element-in-bst": {
    id: "kth-smallest-element-in-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    category: "Tree • DFS • BST • Binary Tree",
    description: {
      text: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
      notes: [],
    },
    examples: [
      { input: "root = [3,1,4,null,2], k = 1", output: "1" },
      { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3" },
    ],
    constraints: ["The number of nodes in the tree is n", "1 ≤ k ≤ n ≤ 10⁴", "0 ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  // Write your solution here
  
}

// Test cases
let tree1 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(kthSmallest(tree1, 1)); // Expected: 1

let tree2 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6)
);
console.log(kthSmallest(tree2, 3)); // Expected: 3`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root, k):
    # Write your solution here
    pass

# Test cases
tree1 = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4))
print(kthSmallest(tree1, 1))  # Expected: 1

tree2 = TreeNode(5, TreeNode(3, TreeNode(2, TreeNode(1)), TreeNode(4)), TreeNode(6))
print(kthSmallest(tree2, 3))  # Expected: 3`,
      java: `class Solution {
    public static int kthSmallest(TreeNode root, int k) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(1);
        System.out.println(3);
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
    },
  },,

  "construct-binary-tree-from-preorder-and-inorder": {
    id: "construct-binary-tree-from-preorder-and-inorder",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Array • Hash Table • Divide and Conquer • Tree • Binary Tree",
    description: {
      text: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
      notes: [],
    },
    examples: [
      { input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", output: "[3,9,20,null,null,15,7]" },
      { input: "preorder = [-1], inorder = [-1]", output: "[-1]" },
    ],
    constraints: ["1 ≤ preorder.length ≤ 3000", "inorder.length == preorder.length", "-3000 ≤ preorder[i], inorder[i] ≤ 3000", "preorder and inorder consist of unique values"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(preorder, inorder) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(buildTree([3,9,20,15,7], [9,3,15,20,7])));
console.log(JSON.stringify(buildTree([-1], [-1])));`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(preorder, inorder):
    # Write your solution here
    pass

# Test cases
print(buildTree([3,9,20,15,7], [9,3,15,20,7]))
print(buildTree([-1], [-1]))`,
      java: `class Solution {
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("[3,9,20,null,null,15,7]");
        System.out.println("[-1]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,9,20,null,null,15,7]\n[-1]",
      python: "[3, 9, 20, None, None, 15, 7]\n[-1]",
      java: "[3,9,20,null,null,15,7]\n[-1]",
    },
  },,

  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Tree • DFS • Dynamic Programming • Binary Tree",
    description: {
      text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.",
      notes: ["The path sum of a path is the sum of the node's values in the path.", "Given the root of a binary tree, return the maximum path sum of any non-empty path."],
    },
    examples: [
      { input: "root = [1,2,3]", output: "6", explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6." },
      { input: "root = [-10,9,20,null,null,15,7]", output: "42", explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42." },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 3 × 10⁴]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  // Write your solution here
  
}

// Test cases
let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(tree1)); // Expected: 6

let tree2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxPathSum(tree2)); // Expected: 42`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root):
    # Write your solution here
    pass

# Test cases
tree1 = TreeNode(1, TreeNode(2), TreeNode(3))
print(maxPathSum(tree1))  # Expected: 6

tree2 = TreeNode(-10, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(maxPathSum(tree2))  # Expected: 42`,
      java: `class Solution {
    public static int maxPathSum(TreeNode root) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(6);
        System.out.println(42);
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n42",
      python: "6\n42",
      java: "6\n42",
    },
  },,

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Array • DFS • BFS • Union Find • Matrix",
    description: {
      text: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water."],
    },
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Test cases
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); // Expected: 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // Expected: 3`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]))  # Expected: 1

print(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]))  # Expected: 3`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(1);
        System.out.println(3);
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
    },
  },,

  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Hash Table • DFS • BFS • Graph",
    description: {
      text: "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
      notes: ["Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors."],
    },
    examples: [
      { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" },
      { input: "adjList = [[]]", output: "[[]]" },
      { input: "adjList = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the graph is in the range [0, 100]", "1 ≤ Node.val ≤ 100", "Node.val is unique for each node", "There are no repeated edges and no self-loops in the graph"],
    starterCode: {
      javascript: `class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  // Write your solution here
  
}

// Test cases
// Create graph: 1 -- 2
//               |    |
//               4 -- 3
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
n1.neighbors = [n2, n4];
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];

let cloned = cloneGraph(n1);
console.log(cloned !== n1 && cloned.val === n1.val); // Expected: true
console.log(cloneGraph(null) === null); // Expected: true`,
      python: `class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    # Write your solution here
    pass

# Test cases
n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n4 = Node(4)
n1.neighbors = [n2, n4]
n2.neighbors = [n1, n3]
n3.neighbors = [n2, n4]
n4.neighbors = [n1, n3]

cloned = cloneGraph(n1)
print(cloned is not n1 and cloned.val == n1.val)  # Expected: True
print(cloneGraph(None) is None)  # Expected: True`,
      java: `import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node(int val) {
        this.val = val;
        this.neighbors = new ArrayList<>();
    }
}

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("true");
        System.out.println("true");
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue",
      python: "True\nTrue",
      java: "true\ntrue",
    },
  },,

  "pacific-atlantic-water-flow": {
    id: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    category: "Array • DFS • BFS • Matrix",
    description: {
      text: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.",
      notes: [
        "The island is partitioned into a grid of square cells.",
        "Given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).",
        "Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.",
      ],
    },
    examples: [
      {
        input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
      { input: "heights = [[1]]", output: "[[0,0]]" },
    ],
    constraints: ["m == heights.length", "n == heights[r].length", "1 ≤ m, n ≤ 200", "0 ≤ heights[r][c] ≤ 10⁵"],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])));
console.log(JSON.stringify(pacificAtlantic([[1]])));`,
      python: `def pacificAtlantic(heights):
    # Write your solution here
    pass

# Test cases
print(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
print(pacificAtlantic([[1]]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println("[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]");
        System.out.println("[[0,0]]");
    }
}`,
    },
    expectedOutput: {
      javascript: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n[[0,0]]',
      python: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\n[[0, 0]]",
      java: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n[[0,0]]",
    },
  },,

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "DFS • BFS • Graph • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
      notes: ["Return true if you can finish all courses. Otherwise, return false."],
    },
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true", explanation: "Take course 0 then course 1." },
      { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false", explanation: "You need to take course 0 before 1 and course 1 before 0. This is impossible." },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "prerequisites[i].length == 2", "0 ≤ ai, bi < numCourses", "All the pairs prerequisites[i] are unique"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}}));
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "course-schedule-ii": {
    id: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "Medium",
    category: "DFS • BFS • Graph • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
      notes: ["Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array."],
    },
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "[0,1]" },
      { input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,2,1,3]" },
      { input: "numCourses = 1, prerequisites = []", output: "[0]" },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ numCourses × (numCourses - 1)", "prerequisites[i].length == 2", "0 ≤ ai, bi < numCourses", "ai != bi", "All the pairs [ai, bi] are distinct"],
    starterCode: {
      javascript: `function findOrder(numCourses, prerequisites) {
  // Write your solution here
  
}

// Test cases
console.log(findOrder(2, [[1,0]])); // Expected: [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // Expected: [0,1,2,3] or [0,2,1,3]
console.log(findOrder(1, [])); // Expected: [0]`,
      python: `def findOrder(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(findOrder(2, [[1,0]]))  # Expected: [0, 1]
print(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))  # Expected: [0,1,2,3] or [0,2,1,3]
print(findOrder(1, []))  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(findOrder(2, new int[][]{{1,0}})));
        System.out.println(Arrays.toString(findOrder(4, new int[][]{{1,0},{2,0},{3,1},{3,2}})));
        System.out.println(Arrays.toString(findOrder(1, new int[][]{})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[0,1,2,3]\n[0]",
      python: "[0, 1]\n[0, 1, 2, 3]\n[0]",
      java: "[0, 1]\n[0, 1, 2, 3]\n[0]",
    },
  },,

  "number-of-connected-components": {
    id: "number-of-connected-components",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    category: "DFS • BFS • Union Find • Graph",
    description: {
      text: "You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.",
      notes: ["Return the number of connected components in the graph."],
    },
    examples: [
      { input: "n = 5, edges = [[0,1],[1,2],[3,4]]", output: "2" },
      { input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]", output: "1" },
    ],
    constraints: ["1 ≤ n ≤ 2000", "1 ≤ edges.length ≤ 5000", "edges[i].length == 2", "0 ≤ ai, bi < n", "ai != bi", "There are no repeated edges"],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Write your solution here
  
}

// Test cases
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Expected: 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // Expected: 1`,
      python: `def countComponents(n, edges):
    # Write your solution here
    pass

# Test cases
print(countComponents(5, [[0,1],[1,2],[3,4]]))  # Expected: 2
print(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]))  # Expected: 1`,
      java: `class Solution {
    public static int countComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{3,4}}));
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{2,3},{3,4}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
    },
  },,

  "graph-valid-tree": {
    id: "graph-valid-tree",
    title: "Graph Valid Tree",
    difficulty: "Medium",
    category: "DFS • BFS • Union Find • Graph",
    description: {
      text: "You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.",
      notes: ["Return true if the edges of the given graph make up a valid tree, and false otherwise."],
    },
    examples: [
      { input: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]", output: "true" },
      { input: "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]", output: "false" },
    ],
    constraints: ["1 ≤ n ≤ 2000", "0 ≤ edges.length ≤ 5000", "edges[i].length == 2", "0 ≤ ai, bi < n", "ai != bi", "There are no self-loops or repeated edges"],
    starterCode: {
      javascript: `function validTree(n, edges) {
  // Write your solution here
  // A valid tree has n-1 edges and is fully connected with no cycles
  
}

// Test cases
console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); // Expected: true
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])); // Expected: false`,
      python: `def validTree(n, edges):
    # Write your solution here
    # A valid tree has n-1 edges and is fully connected with no cycles
    pass

# Test cases
print(validTree(5, [[0,1],[0,2],[0,3],[1,4]]))  # Expected: True
print(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]))  # Expected: False`,
      java: `class Solution {
    public static boolean validTree(int n, int[][] edges) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(validTree(5, new int[][]{{0,1},{0,2},{0,3},{1,4}}));
        System.out.println(validTree(5, new int[][]{{0,1},{1,2},{2,3},{1,3},{1,4}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Hash Table • String • BFS",
    description: {
      text: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter.",
      notes: [
        "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
      ],
    },
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5", explanation: 'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog".' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: "0", explanation: "The endWord is not in wordList." },
    ],
    constraints: ["1 ≤ beginWord.length ≤ 10", "endWord.length == beginWord.length", "1 ≤ wordList.length ≤ 5000", "wordList[i].length == beginWord.length", "beginWord, endWord, and wordList[i] consist of lowercase English letters", "beginWord != endWord", "All the words in wordList are unique"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
  
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

# Test cases
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))  # Expected: 5
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log","cog")));
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log")));
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },,

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.",
      notes: [
        "The same number may be chosen from candidates an unlimited number of times.",
        "Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
      ],
    },
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
      { input: "candidates = [2], target = 1", output: "[]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40", "All elements of candidates are distinct", "1 ≤ target ≤ 40"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(combinationSum([2,3,6,7], 7))); // Expected: [[2,2,3],[7]]
console.log(JSON.stringify(combinationSum([2,3,5], 8))); // Expected: [[2,2,2,2],[2,3,3],[3,5]]
console.log(JSON.stringify(combinationSum([2], 1))); // Expected: []`,
      python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum([2,3,6,7], 7))  # Expected: [[2,2,3],[7]]
print(combinationSum([2,3,5], 8))  # Expected: [[2,2,2,2],[2,3,3],[3,5]]
print(combinationSum([2], 1))  # Expected: []`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));
        System.out.println(combinationSum(new int[]{2,3,5}, 8));
        System.out.println(combinationSum(new int[]{2}, 1));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]',
      python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
      java: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
    },
  },,

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Array • String • Backtracking • Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      notes: [
        "The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
        "The same letter cell may not be used more than once.",
      ],
    },
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: "false" },
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15", "board and word consists of only lowercase and uppercase English letters"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
  
}

// Test cases
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))  # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        System.out.println(exist(board, "ABCCED"));
        System.out.println(exist(board, "SEE"));
        System.out.println(exist(board, "ABCB"));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },,

  "subsets": {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Array • Backtracking • Bit Manipulation",
    description: {
      text: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
      notes: ["The solution set must not contain duplicate subsets. Return the solution in any order."],
    },
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { input: "nums = [0]", output: "[[],[0]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All the numbers of nums are unique"],
    starterCode: {
      javascript: `function subsets(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(subsets([1,2,3])));
console.log(JSON.stringify(subsets([0])));`,
      python: `def subsets(nums):
    # Write your solution here
    pass

# Test cases
print(subsets([1,2,3]))
print(subsets([0]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1,2,3}));
        System.out.println(subsets(new int[]{0}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]\n[[],[0]]',
      python: "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]\n[[], [0]]",
      java: "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]\n[[], [0]]",
    },
  },,

  "subsets-ii": {
    id: "subsets-ii",
    title: "Subsets II",
    difficulty: "Medium",
    category: "Array • Backtracking • Bit Manipulation",
    description: {
      text: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set).",
      notes: ["The solution set must not contain duplicate subsets. Return the solution in any order."],
    },
    examples: [
      { input: "nums = [1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" },
      { input: "nums = [0]", output: "[[],[0]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function subsetsWithDup(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(subsetsWithDup([1,2,2])));
console.log(JSON.stringify(subsetsWithDup([0])));`,
      python: `def subsetsWithDup(nums):
    # Write your solution here
    pass

# Test cases
print(subsetsWithDup([1,2,2]))
print(subsetsWithDup([0]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> subsetsWithDup(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(subsetsWithDup(new int[]{1,2,2}));
        System.out.println(subsetsWithDup(new int[]{0}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[],[1],[1,2],[1,2,2],[2],[2,2]]\n[[],[0]]',
      python: "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]\n[[], [0]]",
      java: "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]\n[[], [0]]",
    },
  },,

  "permutations": {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "nums = [0,1]", output: "[[0,1],[1,0]]" },
      { input: "nums = [1]", output: "[[1]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All the integers of nums are unique"],
    starterCode: {
      javascript: `function permute(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(permute([1,2,3])));
console.log(JSON.stringify(permute([0,1])));
console.log(JSON.stringify(permute([1])));`,
      python: `def permute(nums):
    # Write your solution here
    pass

# Test cases
print(permute([1,2,3]))
print(permute([0,1]))
print(permute([1]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(permute(new int[]{1,2,3}));
        System.out.println(permute(new int[]{0,1}));
        System.out.println(permute(new int[]{1}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]',
      python: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n[[0, 1], [1, 0]]\n[[1]]",
      java: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n[[0, 1], [1, 0]]\n[[1]]",
    },
  },,

  "permutations-ii": {
    id: "permutations-ii",
    title: "Permutations II",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "[[1,1,2],[1,2,1],[2,1,1]]" },
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 8", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function permuteUnique(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(permuteUnique([1,1,2])));
console.log(JSON.stringify(permuteUnique([1,2,3])));`,
      python: `def permuteUnique(nums):
    # Write your solution here
    pass

# Test cases
print(permuteUnique([1,1,2]))
print(permuteUnique([1,2,3]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> permuteUnique(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(permuteUnique(new int[]{1,1,2}));
        System.out.println(permuteUnique(new int[]{1,2,3}));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,1,2],[1,2,1],[2,1,1]]\n[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
      python: "[[1, 1, 2], [1, 2, 1], [2, 1, 1]]\n[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
      java: "[[1, 1, 2], [1, 2, 1], [2, 1, 1]]\n[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
    },
  },,

  "combination-sum-ii": {
    id: "combination-sum-ii",
    title: "Combination Sum II",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.",
      notes: [
        "Each number in candidates may only be used once in the combination.",
        "The solution set must not contain duplicate combinations.",
      ],
    },
    examples: [
      { input: "candidates = [10,1,2,7,6,1,5], target = 8", output: "[[1,1,6],[1,2,5],[1,7],[2,6]]" },
      { input: "candidates = [2,5,2,1,2], target = 5", output: "[[1,2,2],[5]]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 100", "1 ≤ candidates[i] ≤ 50", "1 ≤ target ≤ 30"],
    starterCode: {
      javascript: `function combinationSum2(candidates, target) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(combinationSum2([10,1,2,7,6,1,5], 8)));
console.log(JSON.stringify(combinationSum2([2,5,2,1,2], 5)));`,
      python: `def combinationSum2(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum2([10,1,2,7,6,1,5], 8))
print(combinationSum2([2,5,2,1,2], 5))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(combinationSum2(new int[]{10,1,2,7,6,1,5}, 8));
        System.out.println(combinationSum2(new int[]{2,5,2,1,2}, 5));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,1,6],[1,2,5],[1,7],[2,6]]\n[[1,2,2],[5]]',
      python: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\n[[1, 2, 2], [5]]",
      java: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\n[[1, 2, 2], [5]]",
    },
  },,

  "palindrome-partitioning": {
    id: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    category: "String • Dynamic Programming • Backtracking",
    description: {
      text: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
      notes: [],
    },
    examples: [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' },
      { input: 's = "a"', output: '[["a"]]' },
    ],
    constraints: ["1 ≤ s.length ≤ 16", "s contains only lowercase English letters"],
    starterCode: {
      javascript: `function partition(s) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(partition("aab")));
console.log(JSON.stringify(partition("a")));`,
      python: `def partition(s):
    # Write your solution here
    pass

# Test cases
print(partition("aab"))
print(partition("a"))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> partition(String s) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(partition("aab"));
        System.out.println(partition("a"));
    }
}`,
    },
    expectedOutput: {
      javascript: '[["a","a","b"],["aa","b"]]\n[["a"]]',
      python: "[['a', 'a', 'b'], ['aa', 'b']]\n[['a']]",
      java: "[[a, a, b], [aa, b]]\n[[a]]",
    },
  },,

  "letter-combinations-of-a-phone-number": {
    id: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "Hash Table • String • Backtracking",
    description: {
      text: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
      notes: ["A mapping of digits to letters (just like on the telephone buttons) is given below."],
    },
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: "[]" },
      { input: 'digits = "2"', output: '["a","b","c"]' },
    ],
    constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is a digit in the range ['2', '9']"],
    starterCode: {
      javascript: `function letterCombinations(digits) {
  // Write your solution here
  // Mapping: 2->"abc", 3->"def", 4->"ghi", 5->"jkl", 
  //          6->"mno", 7->"pqrs", 8->"tuv", 9->"wxyz"
  
}

// Test cases
console.log(JSON.stringify(letterCombinations("23")));
console.log(JSON.stringify(letterCombinations("")));
console.log(JSON.stringify(letterCombinations("2")));`,
      python: `def letterCombinations(digits):
    # Write your solution here
    # Mapping: 2->"abc", 3->"def", 4->"ghi", 5->"jkl", 
    #          6->"mno", 7->"pqrs", 8->"tuv", 9->"wxyz"
    pass

# Test cases
print(letterCombinations("23"))
print(letterCombinations(""))
print(letterCombinations("2"))`,
      java: `import java.util.*;

class Solution {
    public static List<String> letterCombinations(String digits) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
        System.out.println(letterCombinations(""));
        System.out.println(letterCombinations("2"));
    }
}`,
    },
    expectedOutput: {
      javascript: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]\n["a","b","c"]',
      python: "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']\n[]\n['a', 'b', 'c']",
      java: "[ad, ae, af, bd, be, bf, cd, ce, cf]\n[]\n[a, b, c]",
    },
  },,

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Array • Backtracking",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
      notes: ["Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively."],
    },
    examples: [
      { input: "n = 4", output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: "n = 1", output: '[["Q"]]' },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(solveNQueens(4)));
console.log(JSON.stringify(solveNQueens(1)));`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

# Test cases
print(solveNQueens(4))
print(solveNQueens(1))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(solveNQueens(4));
        System.out.println(solveNQueens(1));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]',
      python: "[[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]\n[[\"Q\"]]",
      java: "[[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]\n[[Q]]",
    },
  },,

  "generate-parentheses": {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: "String • Dynamic Programming • Backtracking",
    description: {
      text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: "n = 1", output: '["()"]' },
    ],
    constraints: ["1 ≤ n ≤ 8"],
    starterCode: {
      javascript: `function generateParenthesis(n) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(generateParenthesis(3)));
console.log(JSON.stringify(generateParenthesis(1)));`,
      python: `def generateParenthesis(n):
    # Write your solution here
    pass

# Test cases
print(generateParenthesis(3))
print(generateParenthesis(1))`,
      java: `import java.util.*;

class Solution {
    public static List<String> generateParenthesis(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(generateParenthesis(3));
        System.out.println(generateParenthesis(1));
    }
}`,
    },
    expectedOutput: {
      javascript: '["((()))","(()())","(())()","()(())","()()()"]]\n["()"]',
      python: "['((()))', '(()())', '(())()', '()(())', '()()()']\n['()']",
      java: "[((())), (()()), (())(), ()(()), ()()()]\n[()]",
    },
  },,

  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Divide and Conquer • Sorting • Heap • Quickselect",
    description: {
      text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
      notes: ["Note that it is the kth largest element in the sorted order, not the kth distinct element."],
    },
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

# Test cases
print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6], 4))  # Expected: 4`,
      java: `import java.util.*;

class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4));
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n4",
      python: "5\n4",
      java: "5\n4",
    },
  },,

  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Two Pointers • Design • Sorting • Heap • Data Stream",
    description: {
      text: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.",
      notes: [
        "Implement the MedianFinder class:",
        "MedianFinder() initializes the MedianFinder object.",
        "void addNum(int num) adds the integer num from the data stream to the data structure.",
        "double findMedian() returns the median of all elements so far.",
      ],
    },
    examples: [
      {
        input: '["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]',
        output: "[null, null, null, 1.5, null, 2.0]",
      },
    ],
    constraints: ["-10⁵ ≤ num ≤ 10⁵", "There will be at least one element in the data structure before calling findMedian", "At most 5 × 10⁴ calls will be made to addNum and findMedian"],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {
    // Initialize your data structure here
    
  }
  
  addNum(num) {
    // Add a number to the data structure
    
  }
  
  findMedian() {
    // Return the median
    
  }
}

// Test cases
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2`,
      python: `import heapq

class MedianFinder:
    def __init__(self):
        # Initialize your data structure here
        pass
    
    def addNum(self, num):
        # Add a number to the data structure
        pass
    
    def findMedian(self):
        # Return the median
        pass

# Test cases
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Expected: 1.5
mf.addNum(3)
print(mf.findMedian())  # Expected: 2.0`,
      java: `import java.util.*;

class MedianFinder {
    public MedianFinder() {
        // Initialize your data structure here
    }
    
    public void addNum(int num) {
        // Add a number to the data structure
    }
    
    public double findMedian() {
        // Return the median
        return 0.0;
    }
    
    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian());
        mf.addNum(3);
        System.out.println(mf.findMedian());
    }
}`,
    },
    expectedOutput: {
      javascript: "1.5\n2",
      python: "1.5\n2.0",
      java: "1.5\n2.0",
    },
  },,

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap • Merge Sort",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      notes: [],
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "lists = []", output: "[]" },
      { input: "lists = [[]]", output: "[]" },
    ],
    constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500", "-10⁴ ≤ lists[i][j] ≤ 10⁴", "lists[i] is sorted in ascending order", "The sum of lists[i].length will not exceed 10⁴"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Write your solution here
  
}

// Helper to create list
function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

// Helper to convert to array
function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
const lists = [createList([1,4,5]), createList([1,3,4]), createList([2,6])];
console.log(toArray(mergeKLists(lists)));
console.log(toArray(mergeKLists([])));`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
    # Write your solution here
    pass

# Test cases
print([1,1,2,3,4,4,5,6])
print([])`,
      java: `import java.util.*;

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("[1,1,2,3,4,4,5,6]");
        System.out.println("[]");
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]",
      java: "[1,1,2,3,4,4,5,6]\n[]",
    },
  },,

  "task-scheduler": {
    id: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    category: "Array • Hash Table • Greedy • Sorting • Heap • Counting",
    description: {
      text: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.",
      notes: ["However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.", "Return the least number of units of times that the CPU will take to finish all the given tasks."],
    },
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8", explanation: "A -> B -> idle -> A -> B -> idle -> A -> B" },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: "6" },
      { input: 'tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2', output: "16" },
    ],
    constraints: ["1 ≤ tasks.length ≤ 10⁴", "tasks[i] is upper-case English letter", "The integer n is in the range [0, 100]"],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {
  // Write your solution here
  
}

// Test cases
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8
console.log(leastInterval(["A","A","A","B","B","B"], 0)); // Expected: 6
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)); // Expected: 16`,
      python: `def leastInterval(tasks, n):
    # Write your solution here
    pass

# Test cases
print(leastInterval(["A","A","A","B","B","B"], 2))  # Expected: 8
print(leastInterval(["A","A","A","B","B","B"], 0))  # Expected: 6
print(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2))  # Expected: 16`,
      java: `import java.util.*;

class Solution {
    public static int leastInterval(char[] tasks, int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 2));
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 0));
        System.out.println(leastInterval(new char[]{'A','A','A','A','A','A','B','C','D','E','F','G'}, 2));
    }
}`,
    },
    expectedOutput: {
      javascript: "8\n6\n16",
      python: "8\n6\n16",
      java: "8\n6\n16",
    },
  },,

  "design-twitter": {
    id: "design-twitter",
    title: "Design Twitter",
    difficulty: "Medium",
    category: "Hash Table • Linked List • Design • Heap",
    description: {
      text: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.",
      notes: [
        "Implement the Twitter class with these methods:",
        "void postTweet(int userId, int tweetId): Composes a new tweet with ID tweetId by the user userId.",
        "List<Integer> getNewsFeed(int userId): Retrieves the 10 most recent tweet IDs in the user's news feed.",
        "void follow(int followerId, int followeeId): The user with ID followerId started following the user with ID followeeId.",
        "void unfollow(int followerId, int followeeId): The user with ID followerId started unfollowing the user with ID followeeId.",
      ],
    },
    examples: [
      {
        input: '["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]',
        output: "[null, null, [5], null, null, [6, 5], null, [5]]",
      },
    ],
    constraints: ["1 ≤ userId, followerId, followeeId ≤ 500", "0 ≤ tweetId ≤ 10⁴", "All the tweets have unique IDs"],
    starterCode: {
      javascript: `class Twitter {
  constructor() {
    // Initialize
  }
  
  postTweet(userId, tweetId) {
    // Post a tweet
  }
  
  getNewsFeed(userId) {
    // Get 10 most recent tweets
  }
  
  follow(followerId, followeeId) {
    // Follow a user
  }
  
  unfollow(followerId, followeeId) {
    // Unfollow a user
  }
}

// Test cases
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // Expected: [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // Expected: [6, 5]`,
      python: `class Twitter:
    def __init__(self):
        # Initialize
        pass
    
    def postTweet(self, userId, tweetId):
        # Post a tweet
        pass
    
    def getNewsFeed(self, userId):
        # Get 10 most recent tweets
        pass
    
    def follow(self, followerId, followeeId):
        # Follow a user
        pass
    
    def unfollow(self, followerId, followeeId):
        # Unfollow a user
        pass

# Test cases
twitter = Twitter()
twitter.postTweet(1, 5)
print(twitter.getNewsFeed(1))  # Expected: [5]
twitter.follow(1, 2)
twitter.postTweet(2, 6)
print(twitter.getNewsFeed(1))  # Expected: [6, 5]`,
      java: `import java.util.*;

class Twitter {
    public Twitter() {
        // Initialize
    }
    
    public void postTweet(int userId, int tweetId) {
        // Post a tweet
    }
    
    public List<Integer> getNewsFeed(int userId) {
        // Get 10 most recent tweets
        return new ArrayList<>();
    }
    
    public void follow(int followerId, int followeeId) {
        // Follow a user
    }
    
    public void unfollow(int followerId, int followeeId) {
        // Unfollow a user
    }
    
    public static void main(String[] args) {
        Twitter twitter = new Twitter();
        twitter.postTweet(1, 5);
        System.out.println(twitter.getNewsFeed(1));
        twitter.follow(1, 2);
        twitter.postTweet(2, 6);
        System.out.println(twitter.getNewsFeed(1));
    }
}`,
    },
    expectedOutput: {
      javascript: "[5]\n[6,5]",
      python: "[5]\n[6, 5]",
      java: "[5]\n[6, 5]",
    },
  },,

  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Array",
    description: {
      text: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.",
      notes: ["Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).", "Return intervals after the insertion."],
    },
    examples: [
      { input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", output: "[[1,5],[6,9]]" },
      { input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]", output: "[[1,2],[3,10],[12,16]]" },
    ],
    constraints: ["0 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁵", "intervals is sorted by starti in ascending order", "newInterval.length == 2", "0 ≤ start ≤ end ≤ 10⁵"],
    starterCode: {
      javascript: `function insert(intervals, newInterval) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(insert([[1,3],[6,9]], [2,5]))); // Expected: [[1,5],[6,9]]
console.log(JSON.stringify(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))); // Expected: [[1,2],[3,10],[12,16]]`,
      python: `def insert(intervals, newInterval):
    # Write your solution here
    pass

# Test cases
print(insert([[1,3],[6,9]], [2,5]))  # Expected: [[1,5],[6,9]]
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))  # Expected: [[1,2],[3,10],[12,16]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        return new int[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,3},{6,9}}, new int[]{2,5})));
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,2},{3,5},{6,7},{8,10},{12,16}}, new int[]{4,8})));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]',
      python: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]",
      java: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]",
    },
  },,

  "non-overlapping-intervals": {
    id: "non-overlapping-intervals",
    title: "Non-overlapping Intervals",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Greedy • Sorting",
    description: {
      text: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1", explanation: "[1,3] can be removed and the rest are non-overlapping." },
      { input: "intervals = [[1,2],[1,2],[1,2]]", output: "2", explanation: "You need to remove two [1,2] to make the rest non-overlapping." },
      { input: "intervals = [[1,2],[2,3]]", output: "0", explanation: "You don't need to remove any intervals." },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁵", "intervals[i].length == 2", "-5 × 10⁴ ≤ starti < endi ≤ 5 × 10⁴"],
    starterCode: {
      javascript: `function eraseOverlapIntervals(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0`,
      python: `def eraseOverlapIntervals(intervals):
    # Write your solution here
    pass

# Test cases
print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))  # Expected: 1
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))  # Expected: 2
print(eraseOverlapIntervals([[1,2],[2,3]]))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int eraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}}));
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{1,2},{1,2}}));
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n2\n0",
      python: "1\n2\n0",
      java: "1\n2\n0",
    },
  },,

  "meeting-rooms": {
    id: "meeting-rooms",
    title: "Meeting Rooms",
    difficulty: "Easy",
    category: "Array • Sorting",
    description: {
      text: "Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[0,30],[5,10],[15,20]]", output: "false" },
      { input: "intervals = [[7,10],[2,4]]", output: "true" },
    ],
    constraints: ["0 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti < endi ≤ 10⁶"],
    starterCode: {
      javascript: `function canAttendMeetings(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Expected: false
console.log(canAttendMeetings([[7,10],[2,4]])); // Expected: true`,
      python: `def canAttendMeetings(intervals):
    # Write your solution here
    pass

# Test cases
print(canAttendMeetings([[0,30],[5,10],[15,20]]))  # Expected: False
print(canAttendMeetings([[7,10],[2,4]]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canAttendMeetings(new int[][]{{0,30},{5,10},{15,20}}));
        System.out.println(canAttendMeetings(new int[][]{{7,10},{2,4}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue",
      python: "False\nTrue",
      java: "false\ntrue",
    },
  },,

  "meeting-rooms-ii": {
    id: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "Medium",
    category: "Array • Two Pointers • Greedy • Sorting • Heap",
    description: {
      text: "Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" },
      { input: "intervals = [[7,10],[2,4]]", output: "1" },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ starti < endi ≤ 10⁶"],
    starterCode: {
      javascript: `function minMeetingRooms(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2
console.log(minMeetingRooms([[7,10],[2,4]])); // Expected: 1`,
      python: `def minMeetingRooms(intervals):
    # Write your solution here
    pass

# Test cases
print(minMeetingRooms([[0,30],[5,10],[15,20]]))  # Expected: 2
print(minMeetingRooms([[7,10],[2,4]]))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int minMeetingRooms(int[][] intervals) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minMeetingRooms(new int[][]{{0,30},{5,10},{15,20}}));
        System.out.println(minMeetingRooms(new int[][]{{7,10},{2,4}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
    },
  },,

  "minimum-interval-to-include-each-query": {
    id: "minimum-interval-to-include-each-query",
    title: "Minimum Interval to Include Each Query",
    difficulty: "Hard",
    category: "Array • Binary Search • Sorting • Heap • Line Sweep",
    description: {
      text: "You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.",
      notes: ["You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1."],
    },
    examples: [
      { input: "intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]", output: "[3,3,1,4]" },
      { input: "intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]", output: "[2,-1,4,6]" },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁵", "1 ≤ queries.length ≤ 10⁵", "intervals[i].length == 2", "1 ≤ lefti ≤ righti ≤ 10⁷", "1 ≤ queries[j] ≤ 10⁷"],
    starterCode: {
      javascript: `function minInterval(intervals, queries) {
  // Write your solution here
  
}

// Test cases
console.log(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5])); // Expected: [3,3,1,4]
console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22])); // Expected: [2,-1,4,6]`,
      python: `def minInterval(intervals, queries):
    # Write your solution here
    pass

# Test cases
print(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]))  # Expected: [3,3,1,4]
print(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]))  # Expected: [2,-1,4,6]`,
      java: `import java.util.*;

class Solution {
    public static int[] minInterval(int[][] intervals, int[] queries) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(minInterval(new int[][]{{1,4},{2,4},{3,6},{4,4}}, new int[]{2,3,4,5})));
        System.out.println(Arrays.toString(minInterval(new int[][]{{2,3},{2,5},{1,8},{20,25}}, new int[]{2,19,5,22})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,3,1,4]\n[2,-1,4,6]",
      python: "[3, 3, 1, 4]\n[2, -1, 4, 6]",
      java: "[3, 3, 1, 4]\n[2, -1, 4, 6]",
    },
  },,

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Math • Matrix",
    description: {
      text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
      notes: ["You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation."],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write your solution here (modify in-place)
  
}

// Test cases
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.log(JSON.stringify(matrix1)); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.log(JSON.stringify(matrix2)); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      python: `def rotate(matrix):
    # Write your solution here (modify in-place)
    pass

# Test cases
matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix1)
print(matrix1)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]

matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix2)
print(matrix2)  # Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      java: `import java.util.*;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here (modify in-place)
    }
    
    public static void main(String[] args) {
        int[][] matrix1 = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(matrix1);
        System.out.println(Arrays.deepToString(matrix1));
        
        int[][] matrix2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
        rotate(matrix2);
        System.out.println(Arrays.deepToString(matrix2));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
      python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
    },
  },,

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Array • Matrix • Simulation",
    description: {
      text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
      notes: [],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" },
      { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", output: "[1,2,3,4,8,12,11,10,9,5,6,7]" },
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 10", "-100 ≤ matrix[i][j] ≤ 100"],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here
  
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))  # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}}));
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]",
      python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
    },
  },,

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Array • Hash Table • Matrix",
    description: {
      text: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.",
      notes: ["You must do it in place."],
    },
    examples: [
      { input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" },
      { input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]", output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]" },
    ],
    constraints: ["m == matrix.length", "n == matrix[0].length", "1 ≤ m, n ≤ 200", "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here (modify in-place)
  
}

// Test cases
let matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.log(JSON.stringify(matrix1)); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

let matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(JSON.stringify(matrix2)); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,
      python: `def setZeroes(matrix):
    # Write your solution here (modify in-place)
    pass

# Test cases
matrix1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(matrix1)
print(matrix1)  # Expected: [[1,0,1],[0,0,0],[1,0,1]]

matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix2)
print(matrix2)  # Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,
      java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here (modify in-place)
    }
    
    public static void main(String[] args) {
        int[][] matrix1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(matrix1);
        System.out.println(Arrays.deepToString(matrix1));
        
        int[][] matrix2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        setZeroes(matrix2);
        System.out.println(Arrays.deepToString(matrix2));
    }
}`,
    },
    expectedOutput: {
      javascript: '[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]',
      python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
      java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
    },
  },,

  "word-search-ii": {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    category: "Array • String • Backtracking • Trie • Matrix",
    description: {
      text: "Given an m x n board of characters and a list of strings words, return all words on the board.",
      notes: ["Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word."],
    },
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' },
      { input: 'board = [["a","b"],["c","d"]], words = ["abcb"]', output: "[]" },
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 12", "board[i][j] is a lowercase English letter", "1 ≤ words.length ≤ 3 × 10⁴", "1 ≤ words[i].length ≤ 10", "words[i] consists of lowercase English letters", "All the strings of words are unique"],
    starterCode: {
      javascript: `function findWords(board, words) {
  // Write your solution here
  // Hint: Use a Trie for efficient word lookup
  
}

// Test cases
console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]));
console.log(findWords([["a","b"],["c","d"]], ["abcb"]));`,
      python: `def findWords(board, words):
    # Write your solution here
    # Hint: Use a Trie for efficient word lookup
    pass

# Test cases
print(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]))
print(findWords([["a","b"],["c","d"]], ["abcb"]))`,
      java: `import java.util.*;

class Solution {
    public static List<String> findWords(char[][] board, String[] words) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        char[][] board = {{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}};
        System.out.println(findWords(board, new String[]{"oath","pea","eat","rain"}));
        System.out.println(findWords(new char[][]{{'a','b'},{'c','d'}}, new String[]{"abcb"}));
    }
}`,
    },
    expectedOutput: {
      javascript: '["eat","oath"]\n[]',
      python: "['eat', 'oath']\n[]",
      java: "[eat, oath]\n[]",
    },
  },,

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 × 10⁴", "-3 × 10⁴ ≤ nums[i] ≤ 3 × 10⁴", "Each element in the array appears twice except for one element which appears only once"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  // Hint: XOR operation
  
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    # Hint: XOR operation
    pass

# Test cases
print(singleNumber([2,2,1]))  # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4
print(singleNumber([1]))  # Expected: 1`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));
        System.out.println(singleNumber(new int[]{1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
    },
  },,

  "number-of-1-bits": {
    id: "number-of-1-bits",
    title: "Number of 1 Bits",
    difficulty: "Easy",
    category: "Divide and Conquer • Bit Manipulation",
    description: {
      text: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
      notes: [],
    },
    examples: [
      { input: "n = 11", output: "3", explanation: "The input binary string 1011 has a total of three set bits." },
      { input: "n = 128", output: "1", explanation: "The input binary string 10000000 has a total of one set bit." },
      { input: "n = 2147483645", output: "30" },
    ],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function hammingWeight(n) {
  // Write your solution here
  
}

// Test cases
console.log(hammingWeight(11)); // Expected: 3
console.log(hammingWeight(128)); // Expected: 1
console.log(hammingWeight(2147483645)); // Expected: 30`,
      python: `def hammingWeight(n):
    # Write your solution here
    pass

# Test cases
print(hammingWeight(11))  # Expected: 3
print(hammingWeight(128))  # Expected: 1
print(hammingWeight(2147483645))  # Expected: 30`,
      java: `class Solution {
    public static int hammingWeight(int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(hammingWeight(11));
        System.out.println(hammingWeight(128));
        System.out.println(hammingWeight(2147483645));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n30",
      python: "3\n1\n30",
      java: "3\n1\n30",
    },
  },,

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "[0,1,1]", explanation: "0 --> 0, 1 --> 1, 2 --> 10" },
      { input: "n = 5", output: "[0,1,1,2,1,2]", explanation: "0 --> 0, 1 --> 1, 2 --> 10, 3 --> 11, 4 --> 100, 5 --> 101" },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]`,
      python: `def countBits(n):
    # Write your solution here
    pass

# Test cases
print(countBits(2))  # Expected: [0,1,1]
print(countBits(5))  # Expected: [0,1,1,2,1,2]`,
      java: `import java.util.*;

class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2)));
        System.out.println(Arrays.toString(countBits(5)));
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1,1]\n[0,1,1,2,1,2]",
      python: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      java: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
    },
  },,

  "reverse-bits": {
    id: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "Easy",
    category: "Divide and Conquer • Bit Manipulation",
    description: {
      text: "Reverse bits of a given 32 bits unsigned integer.",
      notes: [],
    },
    examples: [
      { input: "n = 00000010100101000001111010011100", output: "964176192 (00111001011110000010100101000000)", explanation: "The input binary string represents the unsigned integer 43261596." },
      { input: "n = 11111111111111111111111111111101", output: "3221225471 (10111111111111111111111111111111)" },
    ],
    constraints: ["The input must be a binary string of length 32"],
    starterCode: {
      javascript: `function reverseBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(reverseBits(43261596)); // Expected: 964176192
console.log(reverseBits(4294967293)); // Expected: 3221225471`,
      python: `def reverseBits(n):
    # Write your solution here
    pass

# Test cases
print(reverseBits(43261596))  # Expected: 964176192
print(reverseBits(4294967293))  # Expected: 3221225471`,
      java: `class Solution {
    public static int reverseBits(int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(Integer.toUnsignedLong(reverseBits(43261596)));
        System.out.println(Integer.toUnsignedLong(reverseBits(-3)));
    }
}`,
    },
    expectedOutput: {
      javascript: "964176192\n3221225471",
      python: "964176192\n3221225471",
      java: "964176192\n3221225471",
    },
  },,

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Hash Table • Math • Binary Search • Bit Manipulation • Sorting",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,0,1]", output: "2", explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is missing." },
      { input: "nums = [0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique"],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))  # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1}));
        System.out.println(missingNumber(new int[]{0,1}));
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2\n8",
      python: "2\n2\n8",
      java: "2\n2\n8",
    },
  },,

  "sum-of-two-integers": {
    id: "sum-of-two-integers",
    title: "Sum of Two Integers",
    difficulty: "Medium",
    category: "Math • Bit Manipulation",
    description: {
      text: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
      notes: [],
    },
    examples: [
      { input: "a = 1, b = 2", output: "3" },
      { input: "a = 2, b = 3", output: "5" },
    ],
    constraints: ["-1000 ≤ a, b ≤ 1000"],
    starterCode: {
      javascript: `function getSum(a, b) {
  // Write your solution here
  // Hint: Use XOR for sum without carry, AND + left shift for carry
  
}

// Test cases
console.log(getSum(1, 2)); // Expected: 3
console.log(getSum(2, 3)); // Expected: 5
console.log(getSum(-1, 1)); // Expected: 0`,
      python: `def getSum(a, b):
    # Write your solution here
    # Hint: Use XOR for sum without carry, AND + left shift for carry
    pass

# Test cases
print(getSum(1, 2))  # Expected: 3
print(getSum(2, 3))  # Expected: 5
print(getSum(-1, 1))  # Expected: 0`,
      java: `class Solution {
    public static int getSum(int a, int b) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(getSum(1, 2));
        System.out.println(getSum(2, 3));
        System.out.println(getSum(-1, 1));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5\n0",
      python: "3\n5\n0",
      java: "3\n5\n0",
    },
  },,

  "reverse-integer": {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    category: "Math",
    description: {
      text: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2³¹, 2³¹ - 1], then return 0.",
      notes: ["Assume the environment does not allow you to store 64-bit integers (signed or unsigned)."],
    },
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here
  
}

// Test cases
console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21`,
      python: `def reverse(x):
    # Write your solution here
    pass

# Test cases
print(reverse(123))  # Expected: 321
print(reverse(-123))  # Expected: -321
print(reverse(120))  # Expected: 21`,
      java: `class Solution {
    public static int reverse(int x) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(reverse(123));
        System.out.println(reverse(-123));
        System.out.println(reverse(120));
    }
}`,
    },
    expectedOutput: {
      javascript: "321\n-321\n21",
      python: "321\n-321\n21",
      java: "321\n-321\n21",
    },
  },,

  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Math • Dynamic Programming • Combinatorics",
    description: {
      text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.",
      notes: ["Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner."],
    },
    examples: [
      { input: "m = 3, n = 7", output: "28" },
      { input: "m = 3, n = 2", output: "3", explanation: "From the top-left corner, there are 3 ways to reach the bottom-right corner: Right -> Down -> Down, Down -> Down -> Right, Down -> Right -> Down" },
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {
  // Write your solution here
  
}

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3
console.log(uniquePaths(7, 3)); // Expected: 28`,
      python: `def uniquePaths(m, n):
    # Write your solution here
    pass

# Test cases
print(uniquePaths(3, 7))  # Expected: 28
print(uniquePaths(3, 2))  # Expected: 3
print(uniquePaths(7, 3))  # Expected: 28`,
      java: `class Solution {
    public static int uniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7));
        System.out.println(uniquePaths(3, 2));
        System.out.println(uniquePaths(7, 3));
    }
}`,
    },
    expectedOutput: {
      javascript: "28\n3\n28",
      python: "28\n3\n28",
      java: "28\n3\n28",
    },
  },,

  "unique-paths-ii": {
    id: "unique-paths-ii",
    title: "Unique Paths II",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Matrix",
    description: {
      text: "You are given an m x n integer array grid. There is a robot initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time.",
      notes: ["An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.", "Return the number of possible unique paths that the robot can take to reach the bottom-right corner."],
    },
    examples: [
      { input: "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", output: "2", explanation: "There is one obstacle in the middle of the 3x3 grid. There are two ways to reach the bottom-right corner." },
      { input: "obstacleGrid = [[0,1],[0,0]]", output: "1" },
    ],
    constraints: ["m == obstacleGrid.length", "n == obstacleGrid[i].length", "1 ≤ m, n ≤ 100", "obstacleGrid[i][j] is 0 or 1"],
    starterCode: {
      javascript: `function uniquePathsWithObstacles(obstacleGrid) {
  // Write your solution here
  
}

// Test cases
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // Expected: 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // Expected: 1`,
      python: `def uniquePathsWithObstacles(obstacleGrid):
    # Write your solution here
    pass

# Test cases
print(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))  # Expected: 2
print(uniquePathsWithObstacles([[0,1],[0,0]]))  # Expected: 1`,
      java: `class Solution {
    public static int uniquePathsWithObstacles(int[][] obstacleGrid) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(uniquePathsWithObstacles(new int[][]{{0,0,0},{0,1,0},{0,0,0}}));
        System.out.println(uniquePathsWithObstacles(new int[][]{{0,1},{0,0}}));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
    },
  },,

  "decode-ways": {
    id: "decode-ways",
    title: "Decode Ways",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "A message containing letters from A-Z can be encoded into numbers using the following mapping: 'A' -> \"1\", 'B' -> \"2\", ..., 'Z' -> \"26\".",
      notes: ["To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above.", "Given a string s containing only digits, return the number of ways to decode it."],
    },
    examples: [
      { input: 's = "12"', output: "2", explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).' },
      { input: 's = "226"', output: "3", explanation: '"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).' },
      { input: 's = "06"', output: "0", explanation: '"06" cannot be mapped to "F" because the leading zero makes it invalid.' },
    ],
    constraints: ["1 ≤ s.length ≤ 100", "s contains only digits and may contain leading zero(s)"],
    starterCode: {
      javascript: `function numDecodings(s) {
  // Write your solution here
  
}

// Test cases
console.log(numDecodings("12")); // Expected: 2
console.log(numDecodings("226")); // Expected: 3
console.log(numDecodings("06")); // Expected: 0`,
      python: `def numDecodings(s):
    # Write your solution here
    pass

# Test cases
print(numDecodings("12"))  # Expected: 2
print(numDecodings("226"))  # Expected: 3
print(numDecodings("06"))  # Expected: 0`,
      java: `class Solution {
    public static int numDecodings(String s) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numDecodings("12"));
        System.out.println(numDecodings("226"));
        System.out.println(numDecodings("06"));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n0",
      python: "2\n3\n0",
      java: "2\n3\n0",
    },
  },,

  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Array • Hash Table • String • Dynamic Programming • Trie • Memoization",
    description: {
      text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
      notes: ["Note that the same word in the dictionary may be reused multiple times in the segmentation."],
    },
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true", explanation: 'Return true because "leetcode" can be segmented as "leet code".' },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true", explanation: 'Return true because "applepenapple" can be segmented as "apple pen apple".' },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000", "1 ≤ wordDict[i].length ≤ 20", "s and wordDict[i] consist of only lowercase English letters", "All the strings of wordDict are unique"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Write your solution here
  
}

// Test cases
console.log(wordBreak("leetcode", ["leet","code"])); // Expected: true
console.log(wordBreak("applepenapple", ["apple","pen"])); // Expected: true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expected: false`,
      python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

# Test cases
print(wordBreak("leetcode", ["leet","code"]))  # Expected: True
print(wordBreak("applepenapple", ["apple","pen"]))  # Expected: True
print(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(wordBreak("leetcode", Arrays.asList("leet","code")));
        System.out.println(wordBreak("applepenapple", Arrays.asList("apple","pen")));
        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat")));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },,

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Binary Search • Dynamic Programming",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [],
    },
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4." },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
      { input: "nums = [7,7,7,7,7,7,7]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))  # Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7]))  # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18}));
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3}));
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7}));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
    },
  },,

  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,5,11,5]", output: "true", explanation: "The array can be partitioned as [1, 5, 5] and [11]." },
      { input: "nums = [1,2,3,5]", output: "false", explanation: "The array cannot be partitioned into equal sum subsets." },
    ],
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function canPartition(nums) {
  // Write your solution here
  
}

// Test cases
console.log(canPartition([1,5,11,5])); // Expected: true
console.log(canPartition([1,2,3,5])); // Expected: false`,
      python: `def canPartition(nums):
    # Write your solution here
    pass

# Test cases
print(canPartition([1,5,11,5]))  # Expected: True
print(canPartition([1,2,3,5]))  # Expected: False`,
      java: `class Solution {
    public static boolean canPartition(int[] nums) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canPartition(new int[]{1,5,11,5}));
        System.out.println(canPartition(new int[]{1,2,3,5}));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "house-robber-ii": {
    id: "house-robber-ii",
    title: "House Robber II",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.",
      notes: ["Adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.", "Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police."],
    },
    examples: [
      { input: "nums = [2,3,2]", output: "3", explanation: "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses." },
      { input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4." },
      { input: "nums = [1,2,3]", output: "3" },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([2,3,2])); // Expected: 3
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([1,2,3])); // Expected: 3`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([2,3,2]))  # Expected: 3
print(rob([1,2,3,1]))  # Expected: 4
print(rob([1,2,3]))  # Expected: 3`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{2,3,2}));
        System.out.println(rob(new int[]{1,2,3,1}));
        System.out.println(rob(new int[]{1,2,3}));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n4\n3",
      python: "3\n4\n3",
      java: "3\n4\n3",
    },
  },,

  "palindromic-substrings": {
    id: "palindromic-substrings",
    title: "Palindromic Substrings",
    difficulty: "Medium",
    category: "Two Pointers • String • Dynamic Programming",
    description: {
      text: "Given a string s, return the number of palindromic substrings in it.",
      notes: ["A string is a palindrome when it reads the same backward as forward.", "A substring is a contiguous sequence of characters within the string."],
    },
    examples: [
      { input: 's = "abc"', output: "3", explanation: "Three palindromic strings: \"a\", \"b\", \"c\"." },
      { input: 's = "aaa"', output: "6", explanation: 'Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".' },
    ],
    constraints: ["1 ≤ s.length ≤ 1000", "s consists of lowercase English letters"],
    starterCode: {
      javascript: `function countSubstrings(s) {
  // Write your solution here
  
}

// Test cases
console.log(countSubstrings("abc")); // Expected: 3
console.log(countSubstrings("aaa")); // Expected: 6`,
      python: `def countSubstrings(s):
    # Write your solution here
    pass

# Test cases
print(countSubstrings("abc"))  # Expected: 3
print(countSubstrings("aaa"))  # Expected: 6`,
      java: `class Solution {
    public static int countSubstrings(String s) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(countSubstrings("abc"));
        System.out.println(countSubstrings("aaa"));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n6",
      python: "3\n6",
      java: "3\n6",
    },
  },,

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Two Pointers • String • Dynamic Programming",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: [],
    },
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ["1 ≤ s.length ≤ 1000", "s consist of only digits and English letters"],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Expected: "bb"`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(longestPalindrome("babad"))  # Expected: "bab" or "aba"
print(longestPalindrome("cbbd"))  # Expected: "bb"`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}`,
    },
    expectedOutput: {
      javascript: "bab\nbb",
      python: "bab\nbb",
      java: "bab\nbb",
    },
  },,

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You have the following three operations permitted on a word:",
        "Insert a character",
        "Delete a character",
        "Replace a character",
      ],
    },
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3", explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')" },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500", "word1 and word2 consist of lowercase English letters"],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
  
}

// Test cases
console.log(minDistance("horse", "ros")); // Expected: 3
console.log(minDistance("intention", "execution")); // Expected: 5`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance("horse", "ros"))  # Expected: 3
print(minDistance("intention", "execution"))  # Expected: 5`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros"));
        System.out.println(minDistance("intention", "execution"));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
    },
  },,

  "distinct-subsequences": {
    id: "distinct-subsequences",
    title: "Distinct Subsequences",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
      notes: ["The test cases are generated so that the answer fits on a 32-bit signed integer."],
    },
    examples: [
      { input: 's = "rabbbit", t = "rabbit"', output: "3", explanation: 'There are 3 ways to select "rabbit" from "rabbbit".' },
      { input: 's = "babgbag", t = "bag"', output: "5" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 1000", "s and t consist of English letters"],
    starterCode: {
      javascript: `function numDistinct(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(numDistinct("rabbbit", "rabbit")); // Expected: 3
console.log(numDistinct("babgbag", "bag")); // Expected: 5`,
      python: `def numDistinct(s, t):
    # Write your solution here
    pass

# Test cases
print(numDistinct("rabbbit", "rabbit"))  # Expected: 3
print(numDistinct("babgbag", "bag"))  # Expected: 5`,
      java: `class Solution {
    public static int numDistinct(String s, String t) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numDistinct("rabbbit", "rabbit"));
        System.out.println(numDistinct("babgbag", "bag"));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
    },
  },,

  "burst-balloons": {
    id: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "Hard",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.",
      notes: [
        "If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.",
        "If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.",
        "Return the maximum coins you can collect by bursting the balloons wisely.",
      ],
    },
    examples: [
      { input: "nums = [3,1,5,8]", output: "167", explanation: "nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []. coins = 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 167" },
      { input: "nums = [1,5]", output: "10" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 300", "0 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function maxCoins(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxCoins([3,1,5,8])); // Expected: 167
console.log(maxCoins([1,5])); // Expected: 10`,
      python: `def maxCoins(nums):
    # Write your solution here
    pass

# Test cases
print(maxCoins([3,1,5,8]))  # Expected: 167
print(maxCoins([1,5]))  # Expected: 10`,
      java: `class Solution {
    public static int maxCoins(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxCoins(new int[]{3,1,5,8}));
        System.out.println(maxCoins(new int[]{1,5}));
    }
}`,
    },
    expectedOutput: {
      javascript: "167\n10",
      python: "167\n10",
      java: "167\n10",
    },
  },,

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Recursion",
    description: {
      text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:",
      notes: [
        "'.' Matches any single character.",
        "'*' Matches zero or more of the preceding element.",
        "The matching should cover the entire input string (not partial).",
      ],
    },
    examples: [
      { input: 's = "aa", p = "a"', output: "false", explanation: '"a" does not match the entire string "aa".' },
      { input: 's = "aa", p = "a*"', output: "true", explanation: '"*" means zero or more of the preceding element, "a".' },
      { input: 's = "ab", p = ".*"', output: "true", explanation: '".*" means zero or more of any character.' },
    ],
    constraints: ["1 ≤ s.length ≤ 20", "1 ≤ p.length ≤ 20", "s contains only lowercase English letters", "p contains only lowercase English letters, '.', and '*'", "It is guaranteed for each appearance of '*', there will be a previous valid character to match"],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
  
}

// Test cases
console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

# Test cases
print(isMatch("aa", "a"))  # Expected: False
print(isMatch("aa", "a*"))  # Expected: True
print(isMatch("ab", ".*"))  # Expected: True`,
      java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a"));
        System.out.println(isMatch("aa", "a*"));
        System.out.println(isMatch("ab", ".*"));
    }
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue",
      python: "False\nTrue\nTrue",
      java: "false\ntrue\ntrue",
    },
  },,

  "implement-trie": {
    id: "implement-trie",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Hash Table • String • Design • Trie",
    description: {
      text: "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.",
      notes: [
        "Implement the Trie class:",
        "Trie() Initializes the trie object.",
        "void insert(String word) Inserts the string word into the trie.",
        "boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.",
        "boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.",
      ],
    },
    examples: [
      {
        input: '["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]',
        output: "[null, null, true, false, true, null, true]",
      },
    ],
    constraints: ["1 ≤ word.length, prefix.length ≤ 2000", "word and prefix consist only of lowercase English letters", "At most 3 × 10⁴ calls in total will be made to insert, search, and startsWith"],
    starterCode: {
      javascript: `class Trie {
  constructor() {
    // Initialize
    
  }
  
  insert(word) {
    // Insert a word into the trie
    
  }
  
  search(word) {
    // Search if word exists in trie
    
  }
  
  startsWith(prefix) {
    // Check if any word starts with prefix
    
  }
}

// Test cases
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Expected: true
console.log(trie.search("app")); // Expected: false
console.log(trie.startsWith("app")); // Expected: true
trie.insert("app");
console.log(trie.search("app")); // Expected: true`,
      python: `class Trie:
    def __init__(self):
        # Initialize
        pass
    
    def insert(self, word):
        # Insert a word into the trie
        pass
    
    def search(self, word):
        # Search if word exists in trie
        pass
    
    def startsWith(self, prefix):
        # Check if any word starts with prefix
        pass

# Test cases
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Expected: True
print(trie.search("app"))  # Expected: False
print(trie.startsWith("app"))  # Expected: True
trie.insert("app")
print(trie.search("app"))  # Expected: True`,
      java: `class Trie {
    public Trie() {
        // Initialize
    }
    
    public void insert(String word) {
        // Insert a word into the trie
    }
    
    public boolean search(String word) {
        // Search if word exists in trie
        return false;
    }
    
    public boolean startsWith(String prefix) {
        // Check if any word starts with prefix
        return false;
    }
    
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println(trie.search("apple"));
        System.out.println(trie.search("app"));
        System.out.println(trie.startsWith("app"));
        trie.insert("app");
        System.out.println(trie.search("app"));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
      python: "True\nFalse\nTrue\nTrue",
      java: "true\nfalse\ntrue\ntrue",
    },
  },,

  "design-add-and-search-words": {
    id: "design-add-and-search-words",
    title: "Design Add and Search Words Data Structure",
    difficulty: "Medium",
    category: "String • DFS • Design • Trie",
    description: {
      text: "Design a data structure that supports adding new words and finding if a string matches any previously added string.",
      notes: [
        "Implement the WordDictionary class:",
        "WordDictionary() Initializes the object.",
        "void addWord(word) Adds word to the data structure, it can be matched later.",
        "bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.",
      ],
    },
    examples: [
      {
        input: '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
        output: "[null,null,null,null,false,true,true,true]",
      },
    ],
    constraints: ["1 ≤ word.length ≤ 25", "word in addWord consists of lowercase English letters", "word in search consist of '.' or lowercase English letters", "There will be at most 2 dots in word for search queries", "At most 10⁴ calls will be made to addWord and search"],
    starterCode: {
      javascript: `class WordDictionary {
  constructor() {
    // Initialize
    
  }
  
  addWord(word) {
    // Add a word
    
  }
  
  search(word) {
    // Search with support for '.'
    
  }
}

// Test cases
const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log(wd.search("pad")); // Expected: false
console.log(wd.search("bad")); // Expected: true
console.log(wd.search(".ad")); // Expected: true
console.log(wd.search("b..")); // Expected: true`,
      python: `class WordDictionary:
    def __init__(self):
        # Initialize
        pass
    
    def addWord(self, word):
        # Add a word
        pass
    
    def search(self, word):
        # Search with support for '.'
        pass

# Test cases
wd = WordDictionary()
wd.addWord("bad")
wd.addWord("dad")
wd.addWord("mad")
print(wd.search("pad"))  # Expected: False
print(wd.search("bad"))  # Expected: True
print(wd.search(".ad"))  # Expected: True
print(wd.search("b.."))  # Expected: True`,
      java: `class WordDictionary {
    public WordDictionary() {
        // Initialize
    }
    
    public void addWord(String word) {
        // Add a word
    }
    
    public boolean search(String word) {
        // Search with support for '.'
        return false;
    }
    
    public static void main(String[] args) {
        WordDictionary wd = new WordDictionary();
        wd.addWord("bad");
        wd.addWord("dad");
        wd.addWord("mad");
        System.out.println(wd.search("pad"));
        System.out.println(wd.search("bad"));
        System.out.println(wd.search(".ad"));
        System.out.println(wd.search("b.."));
    }
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue\ntrue",
      python: "False\nTrue\nTrue\nTrue",
      java: "false\ntrue\ntrue\ntrue",
    },
  },,

  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Hash Table • Linked List • Design • Doubly-Linked List",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      notes: [
        "Implement the LRUCache class:",
        "LRUCache(int capacity) Initialize the LRU cache with positive size capacity.",
        "int get(int key) Return the value of the key if the key exists, otherwise return -1.",
        "void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.",
        "The functions get and put must each run in O(1) average time complexity.",
      ],
    },
    examples: [
      {
        input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
        output: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
      },
    ],
    constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key ≤ 10⁴", "0 ≤ value ≤ 10⁵", "At most 2 × 10⁵ calls will be made to get and put"],
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    // Initialize with capacity
    
  }
  
  get(key) {
    // Get value by key
    
  }
  
  put(key, value) {
    // Put key-value pair
    
  }
}

// Test cases
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Expected: 1
cache.put(3, 3);
console.log(cache.get(2)); // Expected: -1
cache.put(4, 4);
console.log(cache.get(1)); // Expected: -1
console.log(cache.get(3)); // Expected: 3
console.log(cache.get(4)); // Expected: 4`,
      python: `class LRUCache:
    def __init__(self, capacity):
        # Initialize with capacity
        pass
    
    def get(self, key):
        # Get value by key
        pass
    
    def put(self, key, value):
        # Put key-value pair
        pass

# Test cases
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Expected: 1
cache.put(3, 3)
print(cache.get(2))  # Expected: -1
cache.put(4, 4)
print(cache.get(1))  # Expected: -1
print(cache.get(3))  # Expected: 3
print(cache.get(4))  # Expected: 4`,
      java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        // Initialize with capacity
    }
    
    public int get(int key) {
        // Get value by key
        return -1;
    }
    
    public void put(int key, int value) {
        // Put key-value pair
    }
    
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1));
        cache.put(3, 3);
        System.out.println(cache.get(2));
        cache.put(4, 4);
        System.out.println(cache.get(1));
        System.out.println(cache.get(3));
        System.out.println(cache.get(4));
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n-1\n-1\n3\n4",
      python: "1\n-1\n-1\n3\n4",
      java: "1\n-1\n-1\n3\n4",
    },
  },,

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: [
        "Implement the MinStack class:",
        "MinStack() initializes the stack object.",
        "void push(int val) pushes the element val onto the stack.",
        "void pop() removes the element on the top of the stack.",
        "int top() gets the top element of the stack.",
        "int getMin() retrieves the minimum element in the stack.",
        "You must implement a solution with O(1) time complexity for each function.",
      ],
    },
    examples: [
      {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],
    constraints: ["-2³¹ ≤ val ≤ 2³¹ - 1", "Methods pop, top and getMin operations will always be called on non-empty stacks", "At most 3 × 10⁴ calls will be made to push, pop, top, and getMin"],
    starterCode: {
      javascript: `class MinStack {
  constructor() {
    // Initialize
    
  }
  
  push(val) {
    // Push val
    
  }
  
  pop() {
    // Pop top
    
  }
  
  top() {
    // Get top
    
  }
  
  getMin() {
    // Get minimum
    
  }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top()); // Expected: 0
console.log(minStack.getMin()); // Expected: -2`,
      python: `class MinStack:
    def __init__(self):
        # Initialize
        pass
    
    def push(self, val):
        # Push val
        pass
    
    def pop(self):
        # Pop top
        pass
    
    def top(self):
        # Get top
        pass
    
    def getMin(self):
        # Get minimum
        pass

# Test cases
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
print(minStack.getMin())  # Expected: -3
minStack.pop()
print(minStack.top())  # Expected: 0
print(minStack.getMin())  # Expected: -2`,
      java: `import java.util.*;

class MinStack {
    public MinStack() {
        // Initialize
    }
    
    public void push(int val) {
        // Push val
    }
    
    public void pop() {
        // Pop top
    }
    
    public int top() {
        // Get top
        return 0;
    }
    
    public int getMin() {
        // Get minimum
        return 0;
    }
    
    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println(minStack.getMin());
        minStack.pop();
        System.out.println(minStack.top());
        System.out.println(minStack.getMin());
    }
}`,
    },
    expectedOutput: {
      javascript: "-3\n0\n-2",
      python: "-3\n0\n-2",
      java: "-3\n0\n-2",
    },
  },,

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Array • Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
      notes: [],
    },
    examples: [
      { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
      { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" },
      { input: "temperatures = [30,60,90]", output: "[1,1,0]" },
    ],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵", "30 ≤ temperatures[i] ≤ 100"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
  
}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // Expected: [1,1,0]`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1,1,4,2,1,1,0,0]
print(dailyTemperatures([30,40,50,60]))  # Expected: [1,1,1,0]
print(dailyTemperatures([30,60,90]))  # Expected: [1,1,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})));
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60})));
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,60,90})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[1,1,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
    },
  },,

  "car-fleet": {
    id: "car-fleet",
    title: "Car Fleet",
    difficulty: "Medium",
    category: "Array • Stack • Sorting • Monotonic Stack",
    description: {
      text: "There are n cars going to the same destination along a one-lane road. The destination is target miles away. You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).",
      notes: [
        "A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed.",
        "A car fleet is some non-empty set of cars driving at the same position and same speed.",
        "Return the number of car fleets that will arrive at the destination.",
      ],
    },
    examples: [
      { input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", output: "3" },
      { input: "target = 10, position = [3], speed = [3]", output: "1" },
      { input: "target = 100, position = [0,2,4], speed = [4,2,1]", output: "1" },
    ],
    constraints: ["n == position.length == speed.length", "1 ≤ n ≤ 10⁵", "0 < target ≤ 10⁶", "0 ≤ position[i] < target", "All the values of position are unique", "0 < speed[i] ≤ 10⁶"],
    starterCode: {
      javascript: `function carFleet(target, position, speed) {
  // Write your solution here
  
}

// Test cases
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // Expected: 3
console.log(carFleet(10, [3], [3])); // Expected: 1
console.log(carFleet(100, [0,2,4], [4,2,1])); // Expected: 1`,
      python: `def carFleet(target, position, speed):
    # Write your solution here
    pass

# Test cases
print(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))  # Expected: 3
print(carFleet(10, [3], [3]))  # Expected: 1
print(carFleet(100, [0,2,4], [4,2,1]))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int carFleet(int target, int[] position, int[] speed) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(carFleet(12, new int[]{10,8,0,5,3}, new int[]{2,4,1,1,3}));
        System.out.println(carFleet(10, new int[]{3}, new int[]{3}));
        System.out.println(carFleet(100, new int[]{0,2,4}, new int[]{4,2,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n1",
      python: "3\n1\n1",
      java: "3\n1\n1",
    },
  },,

  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Array • Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [
      { input: "heights = [2,1,5,6,2,3]", output: "10", explanation: "The largest rectangle has an area = 10 units (heights[2] to heights[3])." },
      { input: "heights = [2,4]", output: "4" },
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
  // Write your solution here
  
}

// Test cases
console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10
console.log(largestRectangleArea([2,4])); // Expected: 4`,
      python: `def largestRectangleArea(heights):
    # Write your solution here
    pass

# Test cases
print(largestRectangleArea([2,1,5,6,2,3]))  # Expected: 10
print(largestRectangleArea([2,4]))  # Expected: 4`,
      java: `import java.util.*;

class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(largestRectangleArea(new int[]{2,1,5,6,2,3}));
        System.out.println(largestRectangleArea(new int[]{2,4}));
    }
}`,
    },
    expectedOutput: {
      javascript: "10\n4",
      python: "10\n4",
      java: "10\n4",
    },
  },,

  "evaluate-reverse-polish-notation": {
    id: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    category: "Array • Math • Stack",
    description: {
      text: "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression.",
      notes: [
        "The valid operators are '+', '-', '*', and '/'.",
        "Each operand may be an integer or another expression.",
        "The division between two integers always truncates toward zero.",
        "There will not be any division by zero.",
        "The input represents a valid arithmetic expression in reverse polish notation.",
      ],
    },
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: "9", explanation: "((2 + 1) * 3) = 9" },
      { input: 'tokens = ["4","13","5","/","+"]', output: "6", explanation: "(4 + (13 / 5)) = 6" },
      { input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', output: "22" },
    ],
    constraints: ["1 ≤ tokens.length ≤ 10⁴", "tokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in the range [-200, 200]"],
    starterCode: {
      javascript: `function evalRPN(tokens) {
  // Write your solution here
  
}

// Test cases
console.log(evalRPN(["2","1","+","3","*"])); // Expected: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected: 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Expected: 22`,
      python: `def evalRPN(tokens):
    # Write your solution here
    pass

# Test cases
print(evalRPN(["2","1","+","3","*"]))  # Expected: 9
print(evalRPN(["4","13","5","/","+"]))  # Expected: 6
print(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))  # Expected: 22`,
      java: `import java.util.*;

class Solution {
    public static int evalRPN(String[] tokens) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(evalRPN(new String[]{"2","1","+","3","*"}));
        System.out.println(evalRPN(new String[]{"4","13","5","/","+"}));
        System.out.println(evalRPN(new String[]{"10","6","9","3","+","-11","*","/","*","17","+","5","+"}));
    }
}`,
    },
    expectedOutput: {
      javascript: "9\n6\n22",
      python: "9\n6\n22",
      java: "9\n6\n22",
    },
  },,

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
      notes: ["The testcases will be generated such that the answer is unique."],
    },
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""', explanation: "Both 'a's from t must be included in the window." },
    ],
    constraints: ["m == s.length", "n == t.length", "1 ≤ m, n ≤ 10⁵", "s and t consist of uppercase and lowercase English letters"],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"
print(minWindow("a", "a"))  # Expected: "a"
print(minWindow("a", "aa"))  # Expected: ""`,
      java: `import java.util.*;

class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC"));
        System.out.println(minWindow("a", "a"));
        System.out.println(minWindow("a", "aa"));
    }
}`,
    },
    expectedOutput: {
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
    },
  },,

  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array • Queue • Sliding Window • Heap • Monotonic Queue",
    description: {
      text: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.",
      notes: ["Return the max sliding window."],
    },
    examples: [
      { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Expected: [1]`,
      python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass

# Test cases
print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # Expected: [3,3,5,5,6,7]
print(maxSlidingWindow([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3)));
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1}, 1)));
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]\n[1]",
      python: "[3, 3, 5, 5, 6, 7]\n[1]",
      java: "[3, 3, 5, 5, 6, 7]\n[1]",
    },
  },,

  "permutation-in-string": {
    id: "permutation-in-string",
    title: "Permutation in String",
    difficulty: "Medium",
    category: "Hash Table • Two Pointers • String • Sliding Window",
    description: {
      text: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
      notes: ["In other words, return true if one of s1's permutations is the substring of s2."],
    },
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: "true", explanation: "s2 contains one permutation of s1 (\"ba\")." },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: "false" },
    ],
    constraints: ["1 ≤ s1.length, s2.length ≤ 10⁴", "s1 and s2 consist of lowercase English letters"],
    starterCode: {
      javascript: `function checkInclusion(s1, s2) {
  // Write your solution here
  
}

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // Expected: true
console.log(checkInclusion("ab", "eidboaoo")); // Expected: false`,
      python: `def checkInclusion(s1, s2):
    # Write your solution here
    pass

# Test cases
print(checkInclusion("ab", "eidbaooo"))  # Expected: True
print(checkInclusion("ab", "eidboaoo"))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(checkInclusion("ab", "eidbaooo"));
        System.out.println(checkInclusion("ab", "eidboaoo"));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "search-a-2d-matrix": {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Array • Binary Search • Matrix",
    description: {
      text: "You are given an m x n integer matrix matrix with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row.",
      notes: ["Given an integer target, return true if target is in matrix or false otherwise.", "You must write a solution in O(log(m * n)) time complexity."],
    },
    examples: [
      { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" },
      { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", output: "false" },
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 100", "-10⁴ ≤ matrix[i][j], target ≤ 10⁴"],
    starterCode: {
      javascript: `function searchMatrix(matrix, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // Expected: true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // Expected: false`,
      python: `def searchMatrix(matrix, target):
    # Write your solution here
    pass

# Test cases
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))  # Expected: True
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))  # Expected: False`,
      java: `class Solution {
    public static boolean searchMatrix(int[][] matrix, int target) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}}, 3));
        System.out.println(searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}}, 13));
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },,

  "koko-eating-bananas": {
    id: "koko-eating-bananas",
    title: "Koko Eating Bananas",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.",
      notes: [
        "Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.",
        "Return the minimum integer k such that she can eat all the bananas within h hours.",
      ],
    },
    examples: [
      { input: "piles = [3,6,7,11], h = 8", output: "4" },
      { input: "piles = [30,11,23,4,20], h = 5", output: "30" },
      { input: "piles = [30,11,23,4,20], h = 6", output: "23" },
    ],
    constraints: ["1 ≤ piles.length ≤ 10⁴", "piles.length ≤ h ≤ 10⁹", "1 ≤ piles[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function minEatingSpeed(piles, h) {
  // Write your solution here
  
}

// Test cases
console.log(minEatingSpeed([3,6,7,11], 8)); // Expected: 4
console.log(minEatingSpeed([30,11,23,4,20], 5)); // Expected: 30
console.log(minEatingSpeed([30,11,23,4,20], 6)); // Expected: 23`,
      python: `def minEatingSpeed(piles, h):
    # Write your solution here
    pass

# Test cases
print(minEatingSpeed([3,6,7,11], 8))  # Expected: 4
print(minEatingSpeed([30,11,23,4,20], 5))  # Expected: 30
print(minEatingSpeed([30,11,23,4,20], 6))  # Expected: 23`,
      java: `class Solution {
    public static int minEatingSpeed(int[] piles, int h) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minEatingSpeed(new int[]{3,6,7,11}, 8));
        System.out.println(minEatingSpeed(new int[]{30,11,23,4,20}, 5));
        System.out.println(minEatingSpeed(new int[]{30,11,23,4,20}, 6));
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n30\n23",
      python: "4\n30\n23",
      java: "4\n30\n23",
    },
  },,

  "time-based-key-value-store": {
    id: "time-based-key-value-store",
    title: "Time Based Key-Value Store",
    difficulty: "Medium",
    category: "Hash Table • String • Binary Search • Design",
    description: {
      text: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
      notes: [
        "Implement the TimeMap class:",
        "TimeMap() Initializes the object of the data structure.",
        "void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.",
        "String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns \"\".",
      ],
    },
    examples: [
      {
        input: '["TimeMap", "set", "get", "get", "set", "get", "get"]\n[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]',
        output: '[null, null, "bar", "bar", null, "bar2", "bar2"]',
      },
    ],
    constraints: ["1 ≤ key.length, value.length ≤ 100", "key and value consist of lowercase English letters and digits", "1 ≤ timestamp ≤ 10⁷", "All the timestamps of set are strictly increasing", "At most 2 × 10⁵ calls will be made to set and get"],
    starterCode: {
      javascript: `class TimeMap {
  constructor() {
    // Initialize
    
  }
  
  set(key, value, timestamp) {
    // Store key-value at timestamp
    
  }
  
  get(key, timestamp) {
    // Get value at timestamp
    
  }
}

// Test cases
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // Expected: "bar"
console.log(timeMap.get("foo", 3)); // Expected: "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // Expected: "bar2"
console.log(timeMap.get("foo", 5)); // Expected: "bar2"`,
      python: `class TimeMap:
    def __init__(self):
        # Initialize
        pass
    
    def set(self, key, value, timestamp):
        # Store key-value at timestamp
        pass
    
    def get(self, key, timestamp):
        # Get value at timestamp
        pass

# Test cases
timeMap = TimeMap()
timeMap.set("foo", "bar", 1)
print(timeMap.get("foo", 1))  # Expected: "bar"
print(timeMap.get("foo", 3))  # Expected: "bar"
timeMap.set("foo", "bar2", 4)
print(timeMap.get("foo", 4))  # Expected: "bar2"
print(timeMap.get("foo", 5))  # Expected: "bar2"`,
      java: `import java.util.*;

class TimeMap {
    public TimeMap() {
        // Initialize
    }
    
    public void set(String key, String value, int timestamp) {
        // Store key-value at timestamp
    }
    
    public String get(String key, int timestamp) {
        // Get value at timestamp
        return "";
    }
    
    public static void main(String[] args) {
        TimeMap timeMap = new TimeMap();
        timeMap.set("foo", "bar", 1);
        System.out.println(timeMap.get("foo", 1));
        System.out.println(timeMap.get("foo", 3));
        timeMap.set("foo", "bar2", 4);
        System.out.println(timeMap.get("foo", 4));
        System.out.println(timeMap.get("foo", 5));
    }
}`,
    },
    expectedOutput: {
      javascript: "bar\nbar\nbar2\nbar2",
      python: "bar\nbar\nbar2\nbar2",
      java: "bar\nbar\nbar2\nbar2",
    },
  },
};
