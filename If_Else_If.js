let score= 86;

if(score>100 || score<=0)
{
    console.log("Invalid score");

}
else 
    {
        if (score >=90 && score <=100)
            {
                console.log(`Score is: ${score}, Grade is- A+`);
            }
        else if (score >=80 && score <90)
        {
            console.log(`Score is: ${score}, Grade is - A`);
        }
        else if (score >=70 && score <80)
        {
            console.log("B+");
        }
        else if (score >=60 && score <70)
        {
            console.log("B");
        }
        else if (score >=50 && score <60)
        {
            console.log("C");
        }
        else
        {
            console.log("Fail");
        }

    }