let arr= [5, 1, 2, 1, 3, 2];

let freq={};

for(let i=0; i<arr.length; i++ )

    {
     let num=arr[i];

     if (freq [num])
     {freq[num]++;}
     else {freq[num]=1;}

}

     console.log(freq);

     for(let num in freq)
     {
        console.log(num + " number appear " + freq[num] + " times");
    }
    

