//count for vowel & consonent of hellow world

//declare string
let str= "Hello World";
//initialize counter. Initially both counter are 0
let vowel= 0;
let consonenet= 0;
//for loop
for(i=0; i<str.length; i++)
{
    //convert to lowercase, as we want to treat upper case & lower case equally.
    let char=str[i].toLowerCase();
    if ("aeiou".includes(char))
    {
        vowel++;
    }
    else if (char >= "a" && char <= "z")
    {
        consonenet++;
    }

    
}
    console.log("Vowels=", vowel , "Consonants=", consonenet); //console.log("consonenets=", consonenet);