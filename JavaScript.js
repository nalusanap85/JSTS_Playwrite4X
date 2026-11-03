let str= "JavaScript";

let vowel=0;
let consonant=0;


for(i=0; i<str.length; i++)
{
    let char = str[i].toLowerCase();

    if ("aeiou".includes(char))
    {
        vowel++;
    }
    else if(char>="a" && char<="z")
    {
        consonant++;
    }
}
console.log("Vowels=", vowel);
console.log("consonant=", consonant);