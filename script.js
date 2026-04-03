const japanese = document.getElementById("japanese");  
const hiragana = document.getElementById("hiragana");
const katakana = document.getElementById("katakana");
const kanji = document.getElementById("kanji");
const body = document.querySelector("body");


japanese.style.fontFamily = "Playwrite IE, cursive";

japanese.addEventListener("mouseenter", () => {
    japanese.textContent = "にほんご";
    japanese.style.fontFamily = "Shizuru, cursive";
});

japanese.addEventListener("mouseleave", () => {
    japanese.textContent = "Japanese";
    japanese.style.fontFamily = "Playwrite IE, cursive";

});

hiragana.addEventListener("mouseenter", () => {
    hiragana.textContent = "ひらがな";
    hiragana.style.fontFamily = "Shizuru, cursive";
});

katakana.addEventListener("mouseenter", () => {
    katakana.textContent = "カタカナ";
    katakana.style.fontFamily = "Shizuru, cursive";
});    

kanji.addEventListener("mouseenter", () => {
    kanji.textContent = "かんじ";
    kanji.style.fontFamily = "Shizuru, cursive";
});

hiragana.addEventListener("mouseleave", () => {
    hiragana.textContent = "Hiragana";
    hiragana.style.fontFamily = "Jost, sans-serif";
});

katakana.addEventListener("mouseleave", () => {
    katakana.textContent = "Katakana";
    katakana.style.fontFamily = "Jost, sans-serif";
});             

kanji.addEventListener("mouseleave", () => {
    kanji.textContent = "Kanji";
    kanji.style.fontFamily = "Jost, sans-serif";
});

hiragana.addEventListener("click", () => {
    window.location.href = "./pages/hiragana.html";
});

katakana.addEventListener("click", () => {
    window.location.href = "./pages/katakana.html";
});

kanji.addEventListener("click", () => {
    window.location.href = "./pages/kanji.html";
});