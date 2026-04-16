// 2D Array Basics
// Mariyya
// 4/15/2026
//
// 0 (black)  255 (white)
// grid is 6 x 5



let grid = [
  [0,   0,   0,   255,  0,  255],
  [255, 0, 255,   0,    255,  0],
  [0,   0,   0,   0,    0,  255],
  [255, 255, 255, 255,  255,  0],
  [0,   255, 0,   0,    0,  255]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
  textSize(20);
  fill(255,0,0);
  text(getCurrentX()+","+getCurrentY(),mouseX, mouseY)
  win();
}

function flip(x,y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function mousePressed(){
//only do a flip if mouse if on canvas
  if(mouseX < width && mouseY < height){
    
    let x = getCurrentX();
    let y = getCurrentY();

    // ALWAYS:
    flip(x,y);

    // IF THEY EXIST:
    // flip the cardinal (NSEW) neighbours
    // If the shift key is down, only one square will change
    if(!keyIsDown(SHIFT) && !!mousePressed){
      if(x-1 >= 0) flip(x-1, y);
      if(x-1 >= 0) flip(x+1, y);
      if(y-1 >= 0) flip(x, y-1);
      if(y-1 >= 0) flip(x, y+1);
    }
  }
}

function win(){
  //if all the squares are white or black, win text will appear
  let gridColor = 0;
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      gridColor = gridColor + grid[y][x];

    }
  }
  if(gridColor === 0){
    textSize(40);
    fill(255, 0, 0);
    text('You Win', 50, 50);
  }
}

function renderGrid(){
  // intepret the data stored in 2D array (grid) and
  // draw a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){
  //determine the current col position of mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / tileSize);
}

function getCurrentY(){
  //determine the current row position of mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / tileSize);
}