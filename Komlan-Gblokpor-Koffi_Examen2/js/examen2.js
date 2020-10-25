

var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100,95, 0, 2* Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("An",275,150);