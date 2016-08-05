var xred = 83;
var xgreen = 22;
var xblue = 30;


function circle (x, y, diameter) {
ellipse (x, y, diameter, diameter);
}

function setup() {
  createCanvas (640, 480);
  
}

function draw() {
  noStroke ();
  
  if (mouseIsPressed== true){
    fill (255, 255, 255);
    ellipse (mouseX, mouseY, 50);}
    if (mouseIsPressed== false) {
      fill (xred, xblue, xgreen);
      }
  
  xred= xred + .10;
  if (xred > 255) {
  xred= xred - .05}
  
  xblue= xblue - 1;
  if (xblue <= 0){
  xblue= 255;}
  
  xgreen= xgreen- .10;
  noStroke();
  fill (xred, xgreen, xblue);
  ellipse (mouseX, mouseY, 50);
}

