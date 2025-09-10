// ?🎯 1. What is the Canvas API in JavaScript?

//! The Canvas API lets you draw graphics via JavaScript using the <canvas> HTML element. You can render shapes, text, images, and even animations.

// ?💡 Common CanvasRenderingContext2D Methods:

//! Method	Description
// beginPath()	Starts a new path
// moveTo(x, y)	Moves the pen to (x, y) without drawing
// lineTo(x, y)	Draws a straight line from current point to (x, y)
// arc(x, y, radius, startAngle, endAngle [, anticlockwise])	Draws an arc/curve (used to draw circles)
// fill()	Fills the shape with the current fillStyle
// stroke()	Outlines the shape with the current strokeStyle
// rect(x, y, width, height)	Creates a rectangle path
// fillRect(x, y, width, height)	Draws a filled rectangle
// clearRect(x, y, width, height)	Clears a rectangular area
// fillStyle	Sets the fill color
// strokeStyle	Sets the stroke color
// lineWidth	Sets the width of lines


let canvas = document.querySelector("canvas");


// For Rectangle 
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(100, 100, 250, 250);


// For Yellow Circle 
ctx.beginPath()
ctx.arc(220, 220,50,0,Math.PI *2 ,true);
ctx.fillStyle = "yellow"
ctx.fill()
ctx.stroke();

// For Eyes 
ctx.beginPath()
ctx.arc(245, 200, 10, 0, Math.PI * 2, true);
ctx.arc(200, 200, 10, 0, Math.PI * 2, true);
ctx.fillStyle = "black";
ctx.fill();

// For Smile 
ctx.beginPath()
ctx.arc(220,220,40,0,Math.PI,false)
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();
