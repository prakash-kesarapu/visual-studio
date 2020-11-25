let colors =['red', 'blue', 'green', 'brown', 'pink']
console.log(colors)
console.log(colors[3])
let array = colors[colors.length-3]
console.log(array)
colors.pop()
colors.push("yellow")
colors.shift()
colors.unshift("orange")
colors.slice(2,colors.lenghth-1)
let result = function (items,index){
console.log(`value:${items} and valuue:${index}`)
}
colors.forEach (result)
