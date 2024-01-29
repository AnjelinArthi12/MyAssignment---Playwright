/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]*/

let moveZeros = [0, 10, 2, 13, 0, 5, 9];
let lenArr = moveZeros.length;
let nonZeroArr = [];

for (let i = 0; i < lenArr; i++) {
    if (moveZeros[i] !== 0) {
        nonZeroArr.push(moveZeros[i]);
    }
}

for (let i = nonZeroArr.length; i < lenArr; i++) {
    nonZeroArr.push(0);
}

console.log(nonZeroArr);


/*2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.*/

/*let interSet1=[2,5,1]
let interSet2=[9,5,1,7]
let concatSet3=interSet1.concat(interSet2);
let uniqueSet4=new Set(concatSet3)
concatSet3=Array.from(uniqueSet4)
console.log(concatSet3)*/
let Set1=[2,5,1];
let Set2=[9,5,1,7];
let Set3=new Set();
for(i=0;i<Set1.length;i++){
    for(j=0;j<Set2.length;j++){
        if (Set1[i]==Set2[j]){
            Set3.add(Set2[j])
        }
    }
}
let Set4=[...Set3];
console.log(Set4);


/*3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1*/

let nums=[15,21,65,89,10,2];
let minNum=Math.min(...nums);
let maxNum=Math.max(...nums);
console.log(`Maximum Element:${maxNum}, Index:`,nums.indexOf(maxNum),`Minimum Element:${minNum}, Index:`,nums.indexOf(minNum));


/*4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
let inputArray=[1, 2, 3, 4, 2, 5, 6, 1, 6];
let arraySet=new Set(inputArray);
uniqueArray=Array.from(arraySet);
console.log(uniqueArray);

/*
1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count*/

const numOccur=[2,4,5,2,1,2];
let occurances=0;
function numOccurances(k){
    for(let i=0;i<numOccur.length;i++){
        if(numOccur[i]==k){
            occurances+=1;
            
        }
    }
    return occurances
}
console.log(numOccurances(2))

/*2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/


const arrayAdd = [2,4,7,8,11,14];
const target=18;
for(let a=0;a<arrayAdd.length;a++){
    for(let b=0;b<arrayAdd.length;b++){
        if (arrayAdd[a]+arrayAdd[b]==18){
            console.log(`(${a},${b})`)
        }
    }
}

