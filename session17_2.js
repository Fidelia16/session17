let btn = document.querySelector(".button");
let div = document.querySelector(".div");
let btn2 = document.querySelector(".button2");

btn.onclick = function(){
    div.classList.add("toggle");
    div.classList.remove("toggle2");
}
btn2.onclick = function(){
    div.classList.add("toggle2");
    div.classList.remove("toggle");
}

