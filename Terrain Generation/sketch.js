// Sketch Generation
// Mariyya
// 3/11/2026
//

let rectWidth = 5;
let noiseTime = 8;
let noiseSpeed = .04;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noiseTime = 8;
  background(220);
  generateTerrain();
  drawFlag();
}

function generateTerrain(){
  //using a loop, construct a number
  //of side by side rectangles of 
  //random height, to be 2D terrain
  for(let x = 0; x < width; x+=rectWidth){
    //generate random() (negative) height
    //eventually replace this with using noise()
    // let rectHeight = random(0, height*0.75);
    let rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, 0, height*0.85);
    rect(x,height,rectWidth,-rectHeight);
    
    noiseTime += noiseSpeed;
  }
}

function keyPressed(){
 
  if (keyCode === LEFT_ARROW){
    if(rectWidth > 1){
      rectWidth -= 1;
    }
  }
  else if (keyCode === RIGHT_ARROW){
    rectWidth += 1;
    print("a");
  }
  generateTerrain();
}

function drawFlag(x,y){
  rect(50,-50,5,50);
}