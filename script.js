const japanese = document.getElementById("japanese");

japanese.addEventListener("mouseenter", () => {
    japanese.textContent = "にほんご";
    japanese.style.fontFamily = "Shizuru, cursive";
});

japanese.addEventListener("mouseleave", () => {
    japanese.textContent = "Japanese";
    japanese.style.fontFamily = "Playwrite IE, cursive";

});