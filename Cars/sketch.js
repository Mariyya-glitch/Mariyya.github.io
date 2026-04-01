// cars cars cars
// Mariyya
// 3/30/2026
//
// Global variables


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  fill(0);
  rect(0, windowHeight/2 + 150, windowWidth, -300);
  dottedLine();
}

function dottedLine(){
  let dotX = 0;
  fill(255, 204, 0);
  rect(dotX, windowHeight/2 + 15, 50, -5);
}