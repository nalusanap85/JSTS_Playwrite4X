let num=7;

let count=0;
 for(i=1; i<=num; i++)
    {
if (num % i ==0)
    count++;
}

if(count==2)
{
    console.log(num, "It is a prime number");
}
else {
    console.log(num, "It is not a prime number");
}

