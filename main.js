"use strict";
window.addEventListener("load", handleLoad);
let canvas;
let ctx;
let game;
function handleLoad(_event) {
    canvas = document.getElementById("gameCanvas");
    canvas.height = window.innerHeight + 2;
    ctx = canvas.getContext("2d");
    game = new Game(canvas);
    gameLoop();
    addContent(document.getElementById("Projects"));
    setUpGallery();
    addEventListeners();
}
function addEventListeners() {
    document.addEventListener("keydown", handleKeyInput);
}
function scrollToHome() {
    let home = document.getElementById("Home");
    window.scrollTo(0, home.offsetTop - (window.innerHeight * 0.25));
}
function setUpGallery() {
    createGalleryItem();
    function createGalleryItem() {
        console.log(document.querySelector("#Projects #Gallery"));
    }
}
function gameLoop() {
    game.update();
    requestAnimationFrame(gameLoop);
}
function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function addContent(_element) {
    for (let i = 0; i < 80; i++) {
        _element.innerHTML = _element.innerHTML + "hihi hoho jsjsjsjjshhbs bbhhaga lorem ipsum blablabla jhahhaha jjjjj lalalalal skksskkkw";
    }
}
function handleKeyInput(_event) {
    if (_event.key === "ArrowUp" || _event.key === " " || _event.key === "a") {
        game.jump();
    }
}
function openModal(_event) {
    console.log("Open modal");
}
