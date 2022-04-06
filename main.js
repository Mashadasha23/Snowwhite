Canvas = document.getElementById("my_canvas");

pen = Canvas.getContext("2d");


var mouseEvent = "";
var last_pos_x,last_pos_y;

color = "purple";
width_line = 5;

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
 mouseEvent="Mouse_down";

last_pos_x = e.clientX-Canvas.offsetLeft;
last_pos_y= e.clientY-Canvas.offsetTop;
   
}

Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
 mouseEvent="Mouse_leave";
}


Canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent="Mouse_Up";
}

Canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
     
      current_pos_x=e.clientX-Canvas.offsetLeft;
      current_pos_y=e.clientY-Canvas.offsetTop;


    if (mouseEvent == "Mouse_down"){
        pen.beginPath();
        pen.strokeStyle = color;
        pen.lineWidth = width_line;
        pen.arc(current_pos_x,current_pos_y, 40, 0, 2*Math.PI);
        pen.stroke();
        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;
       
    }
}


/* Coding reference for Canvas Circle
Canvas = document.getElementById("my_canvas");

pen = Canvas.getContext("2d");


//document.getElementById("my_canvas").getContext('2d').beginPath();
pen.beginPath();
pen.strokeStyle = "green";
pen.lineWidth = 5;
//arc(x,y,radius, start_angle, ending)
// 360 = 2 * 180 degree of angle = 2 * Math.PI 
//PI = 180 degree of angle
pen.arc(300,300,40,0,2 * Math.PI);
pen.stroke();


pen.beginPath();
pen.strokeStyle = "pink";
pen.lineWidth = 6;
pen.arc(400,400,100,0,2 * Math.PI);
pen.stroke();



pen.beginPath();
pen.strokeStyle = "purple";
pen.lineWidth = 5;
pen.arc(400,200,100,0,2 * Math.PI);
pen.stroke();



pen.beginPath();
pen.strokeStyle = "lightblue";
pen.lineWidth = 10;
pen.arc(200,200,50,0,2 * Math.PI);
pen.stroke();



pen.beginPath();
pen.strokeStyle = "red";
pen.lineWidth = 10;
pen.arc(400,500,40,0,2 * Math.PI);
pen.stroke();

Canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){

    pos_x = e.clientX - Canvas.offsetLeft;
    pos_y = e.clientY - Canvas.offsetTop;

    pen.beginPath();
    pen.strokeStyle = "red";
    pen.lineWidth = 10;
    pen.arc(pos_x,pos_y,40,0,2 * Math.PI);
    pen.stroke();


}
*/
