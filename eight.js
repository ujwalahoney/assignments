function show(no)
{
    var ind;
    for(ind=1;ind<=no;ind++)
    {
        if((ind%3==0)&&(ind%5==0))
        {
            document.write("FizzBuzz ");
        }
        else if(ind%3==0){
            document.write("Fizz ");
        }
        else if(ind%5==0)
        {
            document.write("Buzz ");
        }
        else{
            document.write(ind+" ")
        }
    }
}