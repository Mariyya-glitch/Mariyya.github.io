// Price Scanner
// Mariyya
// 3/23/2026
//

let items = [];

let basePrice = {price: 20, x: 100};

let provinces = newMap();

let currentProv = "SK";

function setup() {
  createCanvas(windowWidth, windowHeight);
  provinces.set("SK", {tax: 1.11});
  provinces.set("AB", {tax: 1.05});
  provinces.set("ON", {tax: 1.13});
  for (let i = 0; i < 20; i++){
    
  }
}

function draw() {
  background(220);
}

function keyPressed() {
  if (currentProv === 'SK'){
    currentProv = "AB";
  } else if (currentProv === 'AB'){
    currentProv = "ON";
  } else if (currentProv === "ON"){
    currentProv = "SK";
  }
}