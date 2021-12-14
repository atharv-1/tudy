canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
widthofline=5;


var mouseEvent="empty";
var last_position_of_x,last_position_of_y;



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";   
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";

}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_Y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_x,current_position_Y);
ctx.stroke();
 }
 last_position_of_x=current_position_x;
 last_position_of_y=current_position_Y;   

}
//codes for class class 83//
//codes for touch events which will be aplicable for mobile and tablet//
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
//codes for event touch start//
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("x="+last_position_of_x);
    console.log("y="+last_position_of_y);
}
//codes for event touch move//
canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
console.log("my_touchmove");
current_position_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_Y=e.touches[0].clientY-canvas.offsetTop;



ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_x,current_position_Y);
ctx.stroke();
last_position_of_x=current_position_x;
last_position_of_y=current_position_Y;

}