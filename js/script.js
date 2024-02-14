let openButton=document.getElementById("open-btn");
let closeButton=document.getElementById("close-btn");
let modal = document.querySelector(".modal");

openButton.addEventListener("click", function(){
    modal.classList.add("display");
    modal.classList.remove("close-modal");
    modal.classList.remove("hidden")
});

closeButton.addEventListener("click",function(){
   modal.classList.remove("display");
   modal.classList.add("close-modal");
   setTimeout(hiddenDisplay, 2500);
});
function hiddenDisplay(){
    modal.classList.add("hidden");
    clearInterval();
}