/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let string = "Enroll and learn playwright"
console.log(string.length-string.lastIndexOf(" ")-1) //prints the length of the last word in the string

function isAnagram(string1,string2){
    let word1=string1.length
    let word2=string2.length
    if (word1!==word2){
        return "false"
    }
    word1=string1.toLowerCase().split('').sort().join('')
    word2=string2.toLowerCase().split('').sort().join('')
    if (word1==word2){
        console.log('isAnagram')
    }else{
        console.log('isNotAnagram')
    }
    
}

isAnagram('Listen','Silent')

function isPalindrome(palString){
    
    if (palString===palString.split('').reverse().join('')){
        return "The given string is palindrome"
    }else{
        return "The given string is not palindrome"
    }

}

console.log(isPalindrome('madam'))