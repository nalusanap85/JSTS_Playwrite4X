
let a = 5;
let b = 5;
let c = 5;

if (a===b && b===c)
{
    console.log("All sides are equal- Equilateral triangle");
}
else if (a===b || b===c || a===c)
{
console.log("two sides are equal - Isosceles triangle");
}

else 
{
    console.log("All three sides are different - Scalene triangle");
}