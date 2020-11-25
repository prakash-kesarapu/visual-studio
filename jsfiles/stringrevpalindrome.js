let string = 'Malayalam';
let strn1=string.toLowerCase();
let temp=strn1;
let y='';

for(i=string.length-1;i>=0;i--)
{
     x =string.charAt(i)
    y=y+x
}
if(temp==strn1)
{
console.log("palindrome")
}
else
console.log("not palindrome")