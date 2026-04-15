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
  noiseTime = 8 + frameCount/100;
  background(220);
  generateTerrain();
}

function generateTerrain(){
  fill(255);
  //using a loop, construct a number
  //of side by side rectangles of 
  //random height, to be 2D terrain
  let highest = 0;
  let highestX = 0;
  let numRect = 0;
  let totalHeight = 0;
  let average;
  for(let x = 0; x < width; x+=rectWidth){
    //generate random() (negative) height
    //eventually replace this with using noise()
    // let rectHeight = random(0, height*0.75);
    let rectHeight = noise(noiseTime);
    numRect ++;
    rectHeight = map(rectHeight, 0, 1, 0, height*0.85);
    if (rectHeight > highest){
      highest = rectHeight;
      highestX = x;
    }
    rect(x,height,rectWidth,-rectHeight);
    totalHeight = totalHeight + rectHeight;
    average = totalHeight / numRect;
    noiseTime += noiseSpeed;
  }
  drawFlag(highestX, height - highest);
  fill(0);
  line(0, height - average, width, height - average);
}

function keyPressed(){
 // right makes it wider and left makes it thinner
  if (keyCode === LEFT_ARROW){
    if(rectWidth > 1){
      rectWidth -= 1;
    }
  }
  else if (keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
  generateTerrain();
}

function drawFlag(x,y){
  //how to draw flag
  fill(0);
  rect(x, y, 3, -50);
  triangle(x + 3, y - 50, x + 3, y - 30, x + 20, y - 35)
}