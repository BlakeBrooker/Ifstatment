function setup() {
var canvas = createCanvas (800, 800) ;
canvas.parent ("p5container");
}

function draw() {
background (220);
if (mouseX > 0 && mouseX < width/2) {
console. log ('this is left')
textSize (32);
text('left', mouseX, height/2);
fill(645, 102, 153);
}

if (mouseX >400 && mouseX <width) {
console. log ('this is right') textSize (32);
text ('right', mouseX, height/2);
fill (450, 182, 376);
}


let value = 0;
function draw() 
fill(value);
rect (25, 25, 50, 50);

function keyPressed() {
    if (value === 0) {
        value = 255;
    } else {
        value = 0 ;
    }
}