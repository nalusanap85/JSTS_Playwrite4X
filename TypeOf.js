console.log(typeof "hello");
console.log(typeof 123); // number
console.log(typeof 31.4); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are technically objects in JavaScript)
console.log(typeof function(){}); // function
console.log(typeof Symbol()); // symbol
console.log(typeof BigInt(123)); // bigint
console.log(typeof NaN); // number (NaN is a special numeric value that represents "Not-a-Number")  
console.log(typeof Infinity); // number (Infinity is a special numeric value that represents positive infinity)