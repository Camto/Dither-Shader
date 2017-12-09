///<reference path="update.ts" />
var canvas;
var pencil;
var leaf;
window.onload = () => {
    canvas = document.getElementById("Dither-Shader-Canvas");
    pencil = canvas.getContext("2d");
    pencil.imageSmoothingEnabled = false;
    leaf = new Image();
    leaf.src = "PICS/leaf.png";
    setInterval(update, 1000 / 30);
};
