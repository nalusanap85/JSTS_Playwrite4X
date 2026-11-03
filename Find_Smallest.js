const arr=[12, 34, 10, 1];

let smallest= arr[0];

for (i=1; i<arr.length; i++)
{
    if(arr[i] < smallest)
        smallest = arr[i];
}

console.log(smallest);
