console.log("" == 0); // // true, "" coerced to Number → 0
console.log("0" == 0);  // true, "0" coerced to Number → 0
console.log("" == "0"); // false, both strings, compared as-is


console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log(5 != "5");  // false, 5 is equal to "5" when coerced
console.log(5 !== "5"); // true, 5 is not strictly equal to "5"

// Additional comparisons
console.log(null == undefined); // true, null and undefined are considered equal in non-strict comparison
console.log(null === undefined); // false, null and undefined are not strictly equal        

// Comparison with NaN
console.log(NaN == NaN); // false, NaN is not equal to anything, including itself
console.log(NaN === NaN); // false, same reason as above        

// Comparison with objects
let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 == obj2); // false, different object references
console.log(obj1 === obj2); // false, different object references   

// Comparison with arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2); // false, different array references
console.log(arr1 === arr2); // false, different array references    

// Comparison with functions
function func1() { return 1; }  
function func2() { return 1; }
console.log(func1 == func2); // false, different function references
console.log(func1 === func2); // false, different function references

// Comparison with booleans
console.log(true == 1); // true, true coerced to Number → 1
console.log(false == 0); // true, false coerced to Number → 0   
