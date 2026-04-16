// cars cars cars
// Mariyya
// 3/30/2026
//
// Global variables

let myVehicle;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#054403');
  drawRoad();
}

function drawRoad(){
  //function that draws road
  fill(0);
  rect(0, windowHeight/2 + 150, windowWidth, -300);
  dottedLine();
}

function dottedLine(){
  //loop that draws a dotted line
  let dotX = 0;
  fill(255, 204, 0);
  while(dotX < 1000){
    rect(dotX, windowHeight/2 + 10, 50, -5);
    dotX += 20;
  }
}

class vehicle{
  //constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.c = color(random(225), random(225), random(225));

    this.vehicle = [];
  }
  
  //class methods
  createVehicle(){
    this.vehicle.push();
  }

  display(){
    fill(this.c);
    rect(this.x, this.y, 10, 5);
  }
}