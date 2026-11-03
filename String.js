let x= "Hi";
console.log(typeof x); // string
console.log(x.length); // 2
console.log(x[0]); // "H"
console.log(x[1]); // "i"       
console.log(x.toUpperCase()); // "HI"
console.log(x.toLowerCase()); // "hi"   
console.log(x.indexOf("i")); // 1
console.log(x.lastIndexOf("i")); // 1
console.log(x.includes("H")); // true
console.log(x.startsWith("H")); // true
console.log(x.endsWith("i")); // true   


x += " Nalini";
console.log(x); // "HiNalini"
