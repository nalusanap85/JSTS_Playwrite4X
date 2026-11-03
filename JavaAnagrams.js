let str1="hello"; //silent
let str2="word"; //listen

word1 = str1.split("").sort().join(""); 
//if upperase is include in teh word, use below code-
//word1=str1.tolowercase().eplaceall(" "," ").split("").sort().join("")
word2 =str2.split("").sort().join("");

if(word1===word2)
{
    console.log("YES, it is anagram");
}else{
    console.log("NO, it is not anagram");
}



