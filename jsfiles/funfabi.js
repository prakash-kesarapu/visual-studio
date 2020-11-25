let fibgeneration = function(maxNum)
{
    let fib0 =0;
    let fib1 =1;
    let holder=0;
    console.log(fib0)
    console.log(fib1)
    for( i=1;i<=maxNum-2;i++)
    {
    holder=fib0;
    fib0=fib1;
    fib1=fib1+holder;
    }
}
    let result =fibgeneration(3)
    console.log(result)
