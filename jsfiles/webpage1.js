console.log("hello")
let firstElement = document.createElement("li")
let secondElement = document.createTextNode("prakash")
firstElement.appendChild(secondElement)
document.getElementById("first").appendChild(firstElement)
function myFunction(){
    let one =document.createElement("LI")
    let two =document.createTextNode("these are cricket players")
    one.appendChild(two)
    document.getElementById("new").appendChild(one)
}