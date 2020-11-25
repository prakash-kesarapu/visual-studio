function isPrime(n)
{ 
    
    if (n <= 1) 
        return false; 

    for ( i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 
n=100
sum=0
for(let s=1;s<=n;s++)
{
    if(isPrime(s))
    continue;
    sum=sum+s;
}
console.log(sum)