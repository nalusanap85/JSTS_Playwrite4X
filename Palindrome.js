let str="racecar";

let reverse="";

for(i=str.length-1; i>=0; i--)
{
    reverse= reverse + str[i];
}
if (str===reverse)
{
    console.log(str, "is a palindrome");
}else 
    {
        console.log(str, "is not a palindrome");
}
