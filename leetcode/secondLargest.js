// // Finding the second largest element in an array

// // ==================== BRUTE FORCE APPROACH ====================
// // Time Complexity: O(n log n) - due to sorting
// // Space Complexity: O(1) or O(n) depending on sort algorithm
// function secondLargestBruteForce(arr) {
//   if (arr.length < 2) return null;
  
//   // Sort array in descending order
//   const sorted = arr.sort((a, b) => b - a);
  
//   // Get second element
//   return sorted[1];
// }

// // ==================== TIME EFFICIENT APPROACH ====================
// // Time Complexity: O(n) - single pass through array
// // Space Complexity: O(1) - only two variables
// function secondLargestOptimal(arr) {
//   if (arr.length < 2) return null;
  
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
  
//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;  // Previous largest becomes second largest
//       largest = num;            // Update largest
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;      // Update second largest
//     }
//   }
  
//   return secondLargest === -Infinity ? null : secondLargest;
// }

// // ==================== ALTERNATIVE EFFICIENT APPROACH ====================
// // Using Array methods - O(n) with cleaner code
// function secondLargestWithSet(arr) {
//   if (arr.length < 2) return null;
  
//   // Remove duplicates using Set
//   const unique = Array.from(new Set(arr)).sort((a, b) => b - a);
  
//   return unique.length >= 2 ? unique[1] : null;
// }

// // ==================== TEST CASES ====================
// const testArrays = [
//   [1, 5, 3, 9, 2],
//   [10, 20, 15],
//   [5],
//   [1, 1, 1, 1],
//   [100, 50, 75, 25, 90],
//   [-1, -5, -3, -2]
// ];

// console.log("=== BRUTE FORCE APPROACH ===");
// testArrays.forEach(arr => {
//   console.log(`Array: [${arr}] => Second Largest: ${secondLargestBruteForce([...arr])}`);
// });

// console.log("\n=== TIME EFFICIENT APPROACH (OPTIMAL) ===");
// testArrays.forEach(arr => {
//   console.log(`Array: [${arr}] => Second Largest: ${secondLargestOptimal(arr)}`);
// });

// console.log("\n=== ALTERNATIVE APPROACH (WITH SET) ===");
// testArrays.forEach(arr => {
//   console.log(`Array: [${arr}] => Second Largest: ${secondLargestWithSet(arr)}`);
// }); 

// my brute force approach

// const arr =[100, 50, 75, 25, 90,100];
const arr =[100, 50,100];
function findSecondLargestNumber(arr) {
    if(arr.length < 2) return
    // converting the array to a unique array


    let uniqueArray = Array.from(new Set(arr)).sort((a,b)=> b-a)
    console.log("unique array is ",uniqueArray);

    return uniqueArray[1]


    
} 
console.log("second largest number is ",findSecondLargestNumber(arr));
