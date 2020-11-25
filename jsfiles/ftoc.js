let convertfartocenti =function(forh)
{
    return ((forh-32)*5/9)
}
let convertcentitofar =function(centi)
{
    return((centi*9/5)+32)
}
console.log(convertfartocenti(125));
var result=convertcentitofar(55)
console.log(result,"result fof convertcentitofa")
// console.log(convertcentitofar)
