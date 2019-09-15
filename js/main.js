const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const img = document.querySelector(".img img");
console.log(leftArrow)

leftArrow.addEventListener("click", function(){
    decreaseIndex();
    showSlide();
});

rightArrow.addEventListener("click", function () {
    increaseIndex();
    showSlide();
 });

const slides = ["./images/black_chair.png", "./images/red_chair.png", "./images/orange_chair.png"];
let index = 0;

function increaseIndex(){
    index++;
    if(index > 2){
        index = 0;
    }
}
function decreaseIndex(){
    index--;
    if (index < 0){
        index = 2;
    }
}

function showSlide(){
    img.setAttribute("src", slides[index]);
}