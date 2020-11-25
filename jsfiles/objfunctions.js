let myBook ={
    title : 'football',
    author : 'ronaldo',
    year : '1970'
}
let mySecond ={
    title : 'cricket',
    author : 'kohli',
    year : '1980'
}
let myThird ={
    title : 'tennis',
    author : 'rafal',
    yaer : '1990'
}
let getBook = function(book)
{
    return (`${book.title} by ${book.author} in ${book.year}`)
}
console.log(getBook(myBook))
console.log(getBook(mySecond))
console.log(getBook(myThird))
