let myMessage = "Press the left key if you drink coffee or the right if you drink tea";

let likes = 0; 
let dislikes = 0; 
let bgImage;

function preload() {
  bgImage = loadImage('pic.jpg'); 
}

function setup() {
  createCanvas(850, 600);
  noStroke();
}

function draw() { 
  background(bgImage); // backround image
  fill(255, 150);
  text(myMessage, 30, 50);

  fill("brown");
  stroke(0);
  strokeWeight(1.5);
  rect(40, 100, likes * 10, 30);
  
  fill("green");
  rect(40, 200, dislikes * 10, 30);
  
  
  fill(250, 150);
  textSize(27);
  text("Coffee Drinkers: " + likes, 50, 90);
  
  
  text("Tea Drinkers: " + dislikes, 50, 190);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    likes = likes + 1;
  }  
  if(keyCode === RIGHT_ARROW){
    dislikes = dislikes + 1;
  }    
}
