///<reference path="update.ts" />

var canvas:HTMLCanvasElement;
var pencil:CanvasRenderingContext2D;

var leaf:HTMLImageElement;

window.onload = () => {
	
	canvas = document.getElementById("Dither-Shader-Canvas");
	pencil = canvas.getContext("2d");
	pencil.imageSmoothingEnabled = false;
	
	leaf = new Image();
	leaf.src = "PICS/Leaf.png";
	
	setInterval(update, 1000/30);
	
};