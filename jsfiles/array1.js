let names =['prakash','deepak','sai','ganesh']
let loopfunction = function(item, index){
    console.log(`Index:${item} and value:${index}`)
}
names.forEach(loopfunction)
names.push("suri")
console.log(names)
names[names.length]
console.log(names)
names[6]='lemon'
console.log(names)
names.pop()
console.log(names)
console.log(typeof(names))
console.log(names.toString())
console.log(names.join("*"))
console.log(names.shift())
names.unshift("teja")
console.log(names)
names[3]="kohli";
console.log(names)
names[names.length]="dhoni"
console.log(names)
names.sort()
console.log(names)
names.reverse()
console.log(names)
let fruits =names
console.log(fruits)
let color =names.slice(3)
console.log(color)
console.log(names.sort(function(a,b){return a-b}));


