//using concept of indexOf and filter

const arr=[1, 2, 3, 2, 4, 1];
let duplicate = " ";

for (let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
       if (arr[j]===arr[i])
        duplicate +=arr[i] + " "
}
console.log(duplicate);

//let duplicate= arr.filter((item, index) =>arr.indexOf(item)!==index );
// console.log(duplicate);

// using join method we will get output without array, mentioned below
// console.log(duplicate.join(","));  => output is 2,1

//let duplicate= arr.filter((item, index) =>arr.indexOf(item)!==item );