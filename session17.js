let openBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("modal");
let closeBtn = document.querySelector('.close-btn');
// mo modal
openBtn.addEventListener("click", function(){
modal.style.display = "block";
});

closeBtn.addEventListener("click", function(){
  modal.style.display = "none";
});

window.addEventListener("click", function(e){
if(e.target === modal){
  modal.style.display ="none";
}
});
