function setup() {
  createCanvas(800, 800, WEBGL);
  background("pink");
  Head(800,800);
  mouth()
  EyeOfRah(150,25);
  EyeOfRah(-150,25);
  EyeOfRah(4,-75);
}

function Head(x,y) {
  
  stroke(74, 17, 10);
  
  strokeWeight(5);

  fill (137, 207, 240);
  
  quad(-250, -250, -250, 250, 250, 200, 200, -200);

  describe('A white square with a black outline drawn on a gray canvas.');
}

function mouth(x,y){

  stroke(74, 17, 10);

  strokeWeight(4);

  fill(245, 206, 152);

  circle(16, 50, 65);

  describe('A white rhombus with a black outline drawn on a gray canvas.');
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




