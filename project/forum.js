let myQuestion = "What is the first thing you do when you wake up?";
let contents = "";
let all_the_answers = [];
let saveAnswer_button;
let showAnswers_button;
let textBox;
let myFont;

function preload() {
  myFont = loadFont("Waffle Cake.otf");
}

function setup() {
  createCanvas(700, 600);
  background(50, 50, 50); 
  textFont(myFont);
  
  
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(myQuestion, width / 2, 50);
  

  textBox = createInput("").size(300, 40).position(190, 100);
  textBox.attribute("placeholder", "Type your answer here");
  textBox.input(() => contents = textBox.value());

  
  saveAnswer_button = createButton("Save Answer").position(280, 160);
  styleButton(saveAnswer_button);
  saveAnswer_button.mousePressed(saveText);

  
  showAnswers_button = createButton("See Answers").position(280, 220);
  styleButton(showAnswers_button);
  showAnswers_button.mousePressed(showAnswers);
}

function saveText() {
  if (contents.trim() !== "") {
    all_the_answers.push(contents);
    contents = "";
    textBox.value(""); 
  }
}

function showAnswers() {
  background(30, 30, 30); 
  fill("White");
  textSize(16);
  textAlign(LEFT);
  
  let yPos = 80;
  text("All Answers:", 50, 50);
  all_the_answers.forEach(answer => {
    text("- " + answer, 50, yPos);
    yPos += 30;
  });

  
  textBox.hide();
  saveAnswer_button.hide();
  showAnswers_button.hide();
}


function styleButton(btn) {
  btn.style("background-color", "#ff9800");
  btn.style("color", "white");
  btn.style("border", "none");
  btn.style("border-radius", "8px");
  btn.style("padding", "10px 20px");
  btn.style("font-size", "16px");
  btn.mouseOver(() => btn.style("background-color", "#e68900"));
  btn.mouseOut(() => btn.style("background-color", "#ff9800"));
}
