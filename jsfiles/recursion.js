// function using recursion
var myRecursiveProductFunction=function(myNumber)
{
    if(myNumber<=1)
    {
        return 1
    }
       
    else
        return (myNumber*myRecursiveProductFunction(myNumber-1))
    }
    console.log(myRecursiveProductFunction(3))

    // function using loops
    var myProductFunction =function(myNumber)
    {
        let productValue=1;
        for(let i=1;i<=myNumber;i++) {
            productValue =productValue*i;
            console.log(productValue,`loop value ${i}`)
        }
       
        return productValue
    }
    console.log(myProductFunction(3),'loop')
