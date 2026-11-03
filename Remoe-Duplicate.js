let str = "Hello World";

let repeat = "";

for (i = 0; i < str.length; i++) 
    {
    if (repeat.includes(str[i])) 
        {

    }
    else {
        repeat = repeat + str[i];
    }

}

console.log(repeat);
