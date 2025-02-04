let myMessage = "Press the Up arrow if you drink coffee or the Down arrow if you drink tea";
let likes = 0; 
let dislikes = 0; 
let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('/assets/laDefense.jpg');
}

function setup() {
  createCanvas(600, 600);

  // Draw the image.
  image(img, 0, 0);

  describe('Image of the underside of a white umbrella and a gridded ceiling.');
}
function draw() { 
  loadImage (img,0,0)
  fill(255);
  text(myMessage, 30, 50);
  
  fill("brown");
  stroke(255,255,255)
  rect(40, 100, likes * 10, 30);
  
  fill("green");
  stroke(255,255,255)
  rect(40, 200, dislikes * 10, 30);
  
  
  fill(255);
  textSize(16);
  text("Coffee Drinkers: " + likes, 50, 90);
  
  
  text("Tea Drinkers: " + dislikes, 50, 190);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    likes = likes + 1;
  }  
  if(keyCode === DOWN_ARROW){
    dislikes = dislikes + 1;
  }    
}
