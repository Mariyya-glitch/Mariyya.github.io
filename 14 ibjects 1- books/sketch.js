// objects books
// Mariyya
// 3/24/2026

//global variables
let myBook; //CAN'T INIT OBJECTS HERE
let myBook2, myBook3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create a single book
  myBook = new Book("CS30 Text", "Mr. Scott",
    1234567891011, "leatherbound", 500,
    width * 0.3);
  myBook2 = new Book("Donkey Kong", "Nintendo", 1982, "hardcover", 250, width * 0.2)
}

function draw() {
  background(220);
  myBook.display();
}

class Book{
  //1. Constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. Class methods
  //since we're in class, we omit
  //function keyword
  display(){
    //render our book object on canvas
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    //set fill colour based on covertype
    switch( this.cover){
      case "softcover":
        fill(250,200,150);  break;
      case "hardcover":
        fill(120,255,255);  break;
      case "leatherbound":
        fill(150,100,15); break;
    }

    //now draw the book
    push();
    translate(this.x, height/2);
    rect(0, 0, this.pages/10, 150);
    fill(255);
    text(this.title[0], 0, -50)
    pop();

  }


}