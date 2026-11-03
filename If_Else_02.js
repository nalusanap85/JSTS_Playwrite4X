let age =20;
 if (age >=18)
 {
    console.log("Register for Goa trip");

    if (age > 21)
    {
        console.log("Allow to drink");
    }
    else
    {
        console.log("Drink not allowed");
    }
 }
 else
 {
    console.log("Not allowed for Goa trip");
 }

 //There’s a difference between declaring a variable and assigning it a value. 
 // Your code has let age;, so age is declared, but its value is undefined.
 // When JavaScript evaluates age >= 18, undefined is converted to NaN; 
 // that comparison is false, so the else block runs 
 // and prints the text you wrote: “Not allowed for Goa trip.”