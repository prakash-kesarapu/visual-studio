let amstrong = function(n)
{
    let r;
    let sum =0;
    let temp=n;
    while (n>0)
    {
        r =n%10;
        sum =sum+(r*r*r);
        n= Math.floor (n/10);
    }
    if (temp==sum)
    return amstrong;
    else 
    return notamstrong;
}
  let result = amstrong(153)
  console.log(result)