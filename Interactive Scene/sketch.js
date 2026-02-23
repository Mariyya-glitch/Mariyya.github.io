// Interactive Scene
// Mariyya
// 2/11/2026
//
// - describe what you did to take this project "above and beyond"

let centerX;
let centerY;

let currentBack = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2
  centerY = height/2
}

function draw() {

  if (currentBack === 0) {
    background('#F0FCFF')
  } else if (currentBack === 1){
    background('#7DC1FA')
  } else if (currentBack === 2){
    background('#618CB0')
  } else if (currentBack === 3){
    background('#2A4252')
  }
  noStroke();
  rect(1, 750, 5000, 500)
  igloo();
}

function mouseClicked() {
  if (currentBack === 0){
    currentBack = 1
  } else if (currentBack === 1){
    currentBack = 2
  } else if (currentBack === 2){
    currentBack = 3
  } else if (currentBack === 3){
    currentBack = 0
  }
}

function igloo(){
  circle(centerX, centerY+200, 350)
  square(centerX+1, centerY+150, 230)
}