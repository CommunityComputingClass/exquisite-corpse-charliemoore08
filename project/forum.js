let myQuestion = "What is the first thing you do when you wake up?";

let contents = "";
let all_the_answers = [];

let saveAnswer_button;
let showAnswers_button;
let textBox;

function setup() {
  createCanvas(500, 400);
  
  saveAnswer_button = createButton("save your answer");
  saveAnswer_button.position(220, 150);
  saveAnswer_button.mousePressed(saveText);

  showAnswer_button = createButton("see the answers");
  showAnswer_button.position(220, 300);
  showAnswer_button.mousePressed(showAnswers);

  textBox = createInput("Type your answer here");
  textBox.size(200, 40);
  textBox.position(50, 100);
  
  
  textBox.elt.addEventListener("focus", function () {
    if (textBox.value() === "Type your answer here") {
      textBox.value("");
    }
  });

  textBox.input(storeText);

  background(156, 56, 14);
  fill(255);
  textSize(14);
  text(myQuestion, 50, 50);
}

function draw() {}

function saveText() {
  if (contents.trim() !== "") {
    all_the_answers.push(contents);
  }
  contents = "";
  textBox.value("Type your answer here");
  print(all_the_answers);
}

function storeText() {
  contents = this.value();
}

function showAnswers() {
  textBox.hide();
  saveAnswer_button.hide();
  showAnswer_button.hide();

  textSize(14);
  fill("White");
  text(all_the_answers.join("\n"), 10, 50, 400);
}