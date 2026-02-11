// Drawing with shapes exercise
// Mariyya
// 2/10/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let centerX;
let centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2
  centerY = height/2
}

function draw() {
  background(220);
  noStroke();
  fill(0,200,100);
  circle(centerX, centerY, 100)
  rect(centerX - 50, centerY + 5, 100, 50)
  rect(centerX - 50, centerY + 5, 10, 80)
  rect(centerX + 40, centerY + 5, 10, 80)
  fill(0)
  circle(centerX + 25, centerY, 10)
  circle(centerX - 25, centerY, 10)
  rect(centerX, centerY + 20, 25, 3)
  rect(centerX, centerY + 20, -25, 3)
}
