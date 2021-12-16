
const myContextMenu = document.querySelector(".context-menu");


window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    myContextMenu.classList.add("visible");
    myContextMenu.style.top = e.clientY + "px";
    myContextMenu.style.left = e.clientX + "px";

})
window.addEventListener("click", function(e) {
    e.preventDefault();
    myContextMenu.classList.remove("visible");
})

myContextMenu.addEventListener("click", function(e) {

})