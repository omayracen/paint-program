var xred = 83;
var xgreen = 22;
var xblue = 30;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640, 480);
  background (28, 137, 173);

var x = 0;
var y = 0;
var c = 50
noStroke ();
  while (y < height+c) {
    while (x<= width+c){
      fill (0, 255, 0);
      circle (x, y, c);
      x= x+2*c;
    }
    x = 0;
    y= y+ 2*c;
  }  

}


function draw() {
var x = 0;
var y = 0;
var c = 50
noStroke ();
  while (y < height+c) {
    while (x<= width+c){
      fill (0, 255, 0);
      circle (x, y, c);
      x= x+2*c;
    }
    x = 0;
    y= y+ 2*c;
  }   
  if (mouseIsPressed == true) {
    stroke(255, 255, 255);
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 50);
  } else {
    xgreen = xgreen - .10;
    noStroke();
    fill(xred, xblue, xgreen);
    ellipse(mouseX, mouseY, 10);
  }

  /*
    if (mouseIsPressed== false) {
      fill (xred, xblue, xgreen);
      }
  */
  xred = xred + .10;
  if (xred > 255) {
    xred = 0;
  }

  xblue = xblue - 1;
  if (xblue <= 0) {
    xblue = 255;
  }


}
 