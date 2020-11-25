function myFunction(){
let first =document.createElement("li")
let sec =document.createTextNode("it is changed")
first.appendChild(sec)
document.getElementById("hai").appendChild(first)
}