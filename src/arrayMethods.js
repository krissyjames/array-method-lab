// NOTE: If an input is invalid, simply return the string "Invalid input"


// Write a function called swapFirstAndLast that takes in an array as a parameter.
// Swap the values of the first and last index without using array destructuring.
// Return the updated array

function swapFirstAndLast(swapArray) {
    if ((Array.isArray(swapArray) === false) || (swapArray.length <= 1))  {
        return "Invalid input";
    }
    if (Array.isArray(swapArray) && swapArray.length > 1) {
        let temp = swapArray[0];
        swapArray[0] = swapArray[swapArray.length-1];
        swapArray[swapArray.length-1] = temp;
        return swapArray;
    }
    }


// Write a function called squareFirstIndex that takes in an array as a parameter.
// Return the square of a number held at the first index.
function squareFirstIndex(squareArray) {
    if ((Array.isArray(squareArray) === false) || (squareArray.length <= 1) || (typeof(squareArray[0]) == "string")) {
        return "Invalid input";
    }
    if (Array.isArray(squareArray) && squareArray.length > 1) {
        return squareArray[0] * squareArray[0];
    }
}

// Write a function called getLongerArray that takes in two arrays as parameters.
// Use a ternary operator and return the array that is longer.
function getLongerArray(arr1, arr2) {
    if ((Array.isArray(arr1) === false) || (Array.isArray(arr2) === false))  {
        return "Invalid input";
    }
    let longerString = (arr1.length > arr2.length) ? arr1 : arr2;
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return longerString; 
    }
}





// Write a function called arrayHasValue that takes in a value and an array.
// Return a boolean if the value exists in the array.

function arrayHasValue(value, arr) {
    if ((Array.isArray(arr) === false) || (arr.length <= 1) || (typeof(value) != "number")) {
        return "Invalid input";
    } else if ((Array.isArray(arr)) && (arr.length > 1) && (typeof(value) == "number")) {
        return arr.includes(value);
    }
}






// Write a function called getLastIndexOf that takes an array and a value as parameters.
// Return the highest index number where that value was found (ie the furthest point it exists in the array)

function getLastIndexOf(arr, value) {
    if ((Array.isArray(arr) === false) || (arr.length <= 1) || (typeof(value) != "number")) {
        return "Invalid input";
    } else if ((Array.isArray(arr)) && (arr.length > 1) && (typeof(value) == "number")) {
        return arr.lastIndexOf(value);
    } 

    
}





// Write a function called getNumberOfTimes that takes in an array and a string.
// Return a count of how many times the string exists in the array.

// function getNumberOfTimes(arr, str) {
//     if ((Array.isArray(arr) === false) || (arr.length <= 1) || (typeof(str) != "string")) {
//     return "Invalid input";
//     }
//     let count = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] == str) {
//             count++;
//         }
//     if ((Array.isArray(arr)) && (arr.length > 1) && (typeof(str) == "string")) {
//         return count;
//     }}
// }
// myArray = ["cat", "dog", "cat"]
// console.log(getNumberOfTimes(myArray, "cat"))


// Write a function called findAboveFreezing that takes in an array
// Return a string literal that says "Temperature found was ---- degrees Farenheit."
function findAboveFreezing(arr) {
    if ((Array.isArray(arr) === false) || (arr.length <= 1)){
        return "Invalid input";
    } if ((Array.isArray(arr)) && (arr.length > 1)) {
        for (let i =0; i <=arr.length; i++) {
            if (arr[i] > 32) {
                return arr[i];
            }
        }
    }
}

// Write a function called returnString that takes an array as a parameter.
// Return the array as a string with an ampersand as the separator.







// Write a function called sortArrayBasedOnNumber that takes in an array and a number.
// Arrays must only contain one data type.
// If the number is odd, return the array sorted in descending order.
// If the number is even, return the array sorted in ascending order






// Write a function called concatArrays that takes in two arrays as parameters.
// Return the concatonation of the two arrays in order as long as neither holds a string as a value at any index.








// Write a function called popAndShift that takes in an array as a parameter.
// Example input versus output:
// Original input array: ["yelow", "green", "blue", "red"]
// Intended output array: ["red", "yellow", "green", "blue"]







// Write a function called oddValuesAtEvenIndex that takes an array as a parameter
// Return a new array that contains all the odd values of the original array that were located at an even index.







// Write a function called getUpperCase that takes in an array as a parameter.
// Translate all strings in the array to upper case.
// Return only an array of only the string values.








// Write a function called deleteAllOddValues that takes in an array.
// Use the delete() array method to delete any odd numbers from the array, including any values that can be coerced into numbers.
// Return the updated array.









// Write a function called getCatNumber that takes in an array of nested arrays as a first parameter, and a string of a cat's name a the second parameter.
// Return the age of the first cat found with that name.







// Stretch Goal #1:
// Write a function called getPaginationArray that takes in an array and a page number as parameters.
// Only five items from the array can be shown on a given web page when pagination is clicked. They must be grouped in their original order.
// Return a new array. At each index of the new array will be the five items shown for each page of pagination.







// Stretch Goal #2:
// Write a function called sparseToDense that takes in an array.
// If the array is sparse, return a dense version of the array.
// If the array is already dense, return the original array.







// Stretch Goal #3:
// Write a function called findAndConvertTemp that takes in an array of arrays, as well as a temperature as parameters. Both the array and the temperature are in Farenheit.
// Find the first temperature in the array that exceeds the input parameter.
// Return the string literal `Temperature was ----- degrees Celcius on date ------."

module.exports = {
    swapFirstAndLast,
    squareFirstIndex,
    getLongerArray,
    arrayHasValue,
    getLastIndexOf,
    // getNumberOfTimes,
    findAboveFreezing,
};


