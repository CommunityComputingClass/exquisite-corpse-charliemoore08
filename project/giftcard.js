let myMessage = "Happy Birthday Dad"
let xLocation = 450
let change = 1

let myFont;

function preload(){
  myFont = loadFont("HappyBirthday-Regular.ttf")
}

function setup() {
    createCanvas(2000, 1500);
     background(0);
    noStroke();
    fill("Green");
    text(myMessage, xLocation, 1000);
    textSize(50)
    xLocation = xLocation +1;

  
  
   
  }
  function draw() {
    background(250, 224, 152);
    noStroke();
    textFont(myFont);
    fill("green");
    text(myMessage, xLocation, 400);
    xLocation = xLocation +change;
    if (xLocation <75)
        change = 1
        
    if (xLocation > 900)
        change = -1
    
  
  }







  


  