let cars =[
    {type: "valvo", year:2016},
    {type: "saab" , year:2001},
    {type: "bmw" , year:2010}
];
cars.sort(function(a,b){return a.year - b.year});
console.log(cars)
cars.sort()
console.log(cars)
let mySort = function(a,b)
{
    if(a.type>b.type)
    return 1
    else 
    return -1
}
cars.sort(mySort);
console.log(cars)