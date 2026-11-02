let change = document.getElementById("change")
let on = document.getElementById("on")
let off = document.getElementById("off")
on.addEventListener("click",()=>{
change.src = "./images/on.png";

})
off.addEventListener("click",()=>{
    change.src = "./images/off.png";
})
