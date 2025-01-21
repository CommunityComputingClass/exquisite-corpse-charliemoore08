function setup() {
  createCanvas(600, 600, WEBGL);
  
  background("white");

  
  EyeOfRah(150,150)
  EyeOfRah(-150,150)
  EyeOfRah(4,5)
  fill (200)

  
  
}

function EyeOfRah(x, y){
  stroke("black")

  strokeWeight(5)
  fill(200)
  ellipse(x, y, 80, 40);

  fill(220,20,60);
  ellipse(x,y,20);

  stroke("grey");
  strokeWeight();
  fill("white")
  ellipse(x,y,3)
  

}