let s1 = document.querySelector(".square1");
let s2 = document.querySelector(".square2");
let s3 = document.querySelector(".square3");
let body = document.body;

function removeBgClasses() {
    body.classList.remove("backgroundYellow", "backgroundGreen", "backgroundGray");
}

s1.addEventListener("mouseover", function () {
    removeBgClasses();
    body.classList.add("backgroundYellow");
});

s2.addEventListener("mouseover", function () {
    removeBgClasses();
    body.classList.add("backgroundGreen");
});

s3.addEventListener("mouseover", function () {
    removeBgClasses();
    body.classList.add("backgroundGray");
});

body.addEventListener("mouseout", function () {
    removeBgClasses();
});
