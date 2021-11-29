/** From algoexpert: https://www.algoexpert.io/questions/Validate%20Subsequence
 *  A subsequence of an array is an ordered subset of the array's elements having the same sequential ordering as the original array.
 *  Determine if array A is a subsequence of array B.
 */
function isValidSubsequence(array, sequence) {
  // To continue searches in-place rather than restarting
  let arrayIndex = -1;
  let foundMatch = false;

  // Using C style loops so we can start at custom inner index and keep track of outer index quickly.
  // Outer loop checks target sequence in order, once.
  for (let i = 0; i < sequence.length; i++) {

    foundMatch = false;
    // Inner loop starts at array of last match
    for (let j = arrayIndex + 1; j < array.length; j++) {
      if (array[j] === sequence[i]) {
        arrayIndex = j;
        foundMatch = true;
        break; // Takes us to next element in sequence, breaks out of reading further array elements.
      };
    };

    if (!foundMatch) {
      console.log(`didn't find match for sequence[i]=${sequence[i]} in array ${array} starting at ${arrayIndex}`);
      break;
    } else {
      console.log(`Found match for sequence[${i}]=${sequence[i]} in array[${arrayIndex}]=${array[arrayIndex]}`)
    }
  };

  return foundMatch;
};

// test
const arr = [5, 1, 25, 22, 6, -1, 8, 10];
const sub = [1, 6, -1, 10];

console.log(isValidSubsequence(arr, sub), " should be TRUE");
console.log(isValidSubsequence(arr, [1, 2, 3]), " should be FALSE");
console.log(isValidSubsequence([1, 4, 3], [1, 2, 3]), " should be FALSE");
console.log(isValidSubsequence([1, 2, 3, 4], [1, 2, 3]), " should be TRUE");