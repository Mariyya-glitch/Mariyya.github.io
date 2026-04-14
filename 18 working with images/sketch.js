// Working with images
// Mariyya
// 4/14/2026
// How to load images
// How to play animations

let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0; //pinwheel current index

async function loadAssets(){
  //load lions
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //pinwheel images
  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER); //center reference images
  //noCursor();
}

function draw() {
  background(220);
  lion();
  pinwheel();

} //screen updates here

function pinwheel(){
  image(pinImages[current], width/2, height * 0.7);
  current = (current + 1) % 9;
  
  //ERROR you can't animate with a FOR loop
  //for(let i = 0; i <= 8; i++){
  //  image(pinImages[i], width/2, height * 0.7);
  //}
}

function lion(){
  // update state variables based on mouse movement
  if (movedX < 0) dir = "left";
  else if (movedX > 0) dir = "right";

  // interpreting the state variable
  if(dir === "left"){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
}