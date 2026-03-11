// Interactive Scene
// Mariyya
// 2/11/2026
//

// Global variables

let centerX;
let centerY;

let currentBack = 0

let tSize = 50

// Sets things up

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2
  centerY = height/2
}

// Draws all the important things such as
// Background (and changes its colour)
// The objects in the scene

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
  mar();
  rect(1, 750, 5000, 500)
  igloo();
  cloud(); // The protagonist
}

// Changes the background colour variable when the mouse is clicked

function mousePressed() {
  if(mouseButton === CENTER){}
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

// Shape and position of igloo

function igloo(){
  circle(centerX, centerY+200, 350)
  square(centerX+1, centerY+150, 230)
}

// Shape, position, and mouse controls of the cloud

function cloud(){
  circle(mouseX, centerY - 200, 100)
  circle(mouseX + 50, centerY + 10 - 200, 70)
  circle(mouseX - 50, centerY + 10 - 200, 70)
}

// Colour and position of my name
// If a key is pressed, it grows

function mar(){
  fill('#052159')
  textSize(tSize)
  text('Mariyya', centerX - 50, centerY - 300)
  fill(255)
  if(keyIsPressed === true) {
    tSize  += 10
  }
}
        

